<template>
  <div>
    <section v-if="activeScene === 1">
      <h2 class="line">Bana kim olduğunu söyle?</h2>
      <div class="form col1">
        <div class="item">
          <label for="">Yaşın</label>
          <input type="text" class="form-control" v-model="datas.age.value" @keypress="isNumber($event)" maxlength="3" />
        </div>

        <!-- <div class="item">
          <label for="">Cinsiyetin</label>

          <div class="select-custom form-control">
            <div class="selected">
              {{ datas.gender.value }}
            </div>
            <ul class="items">
              <li @click="genderSelected(1)">Erkek</li>
              <li @click="genderSelected(2)">Kadın</li>
            </ul>
          </div>
        </div> -->

        <div class="item">
          <label for="">Yaşadığın Şehir</label>
          <div class="select-custom form-control select-city">
            <div class="selected">
              {{ datas.city.value }}
            </div>
            <ul class="items">
              <li
                v-for="(city, index) in cities"
                :key="index"
                @click="citySelected(city)"
              >
                {{ city }}
              </li>
            </ul>
          </div>
        </div>

        <div class="item">
          <label for="">Mesleğin</label>
          <div class="select-custom form-control">
            <div class="selected">
              {{ datas.job.value }}
            </div>
            <ul class="items">
              <li
                v-for="(job, index) in jobs"
                :key="index"
                @click="jobSelected(job)"
              >
                {{ job }}
              </li>
            </ul>
          </div>
        </div>
        <div class="item">
          <a href="javascript:;" class="btn btn-first" @click="nextForm">DEVAM ET</a>
        </div>
      </div>
    </section>

    <section v-if="activeScene === 2">
      <h2 class="line">Senin için en önemli sorun nedir?</h2>
      <div class="form col2 gap-sm">
        <template v-for="(item, index) in formRadioDatas">
          <div class="item" v-if="index < 14" :key="index">
            <input
              v-model="datas.formRadioDatas1Val.value"
              type="radio"
              :value="item.id"
              :id="'radio-2-' + index"
              name="radio-elements-2"
            />
            <label :for="'radio-2-' + index" class="form-control">
              {{ item.text }}
            </label>
          </div>
        </template>
        <a href="javascript:;" class="btn" @click="nextForm">DEVAM ET</a>
      </div>
    </section>

    <section v-if="activeScene === 3">
      <h2 class="line">Sence Türkiye’nin temel sorunu nedir?</h2>
      <div class="form col2 gap-sm">
        <template v-for="(item, index) in formRadioDatas">
          <div v-if="index >= 14 && index < 26" class="item" :key="index">
            <input
              v-model="datas.formRadioDatas2Val.value"
              :value="item.id"
              type="radio"
              :id="'radio-3-' + index"
              name="radio-elements-3"
            />
            <label :for="'radio-3-' + index" class="form-control">
              {{ item.text }}
            </label>
          </div>
        </template>
        <a href="javascript:;" class="btn" @click="nextForm">DEVAM ET</a>
      </div>
    </section>

    <section v-if="activeScene === 4">
      <h2 class="line">
        Sorunlardan bir kabustan uyanma hızında kurtulmak mümkün. Nasıl bir
        Türkiye'de yaşamak istersin?
      </h2>
      <div class="form col1 gap-sm">
        <template v-for="(item, index) in formRadioDatas">
          <div v-if="index >= 26" class="item" :key="index">
            <input
              v-model="datas.formRadioDatas3Val.value"
              :value="item.id"
              type="radio"
              :id="'radio-4-' + index"
              name="radio-elements-4"
            />
            <label :for="'radio-4-' + index" class="form-control">
              {{ item.text }}
            </label>
          </div>
        </template>
        <div class="item">
          <a href="javascript:;" class="btn" @click="finishForm"
          >ANKETİ TAMAMLA</a>
        
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

import * as firebase from "firebase/app";
import { getDatabase, ref as storageRef, set, remove } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import {firebaseConfig} from '../../firebase-config'
firebase.initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();
export default {
  setup() {
    const store = useStore();
    const cities = store.getters.getCities;
    const jobs = store.getters.getJobs;
    const formRadioDatas = store.getters.getformRadioDatas;
    const datas = {
      uid: ref(""),
      age: ref(""),
      gender: ref("Seçiniz"),
      city: ref("Seçiniz"),
      job: ref("Seçiniz"),
      formRadioDatas1Val: ref(""),
      formRadioDatas2Val: ref(""),
      formRadioDatas3Val: ref(""),
      catAll: ref([]),
    };

    // const genderSelected = function (target) {
    //   target === 1
    //     ? (datas.gender.value = "Erkek")
    //     : (datas.gender.value = "Kadın");
    //   closedSelect();
    // };

    const citySelected = function (target) {
      datas.city.value = target;
      closedSelect();
    };

    let isNumber = function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    }

    const jobSelected = function (target) {
      datas.job.value = target;
      closedSelect();
    };

    const closedSelect = function () {
      const overlay = document.querySelectorAll(".select-custom");

      for (var i = 0; i < overlay.length; i++) {
        overlay[i].classList.remove("active");
      }
    };

    let nextForm = function () {
      let form = document.querySelectorAll(".form .item");
      let valid = true;
      let index = 0;
      form.forEach((el) => {
        let inputText = el.querySelector("input[type='text']")?.value.trim();
        let select = el.querySelector(".selected")?.innerHTML.trim();
        let radioChecked = el.querySelector("input[type='radio']")?.checked;

        if (inputText === "" || select === "Seçiniz") {
          valid = false;
        }

        if (radioChecked === true && index === 0) {
          index = 1;
          valid = true;
        } else if (index === 0 && radioChecked === false) {
          valid = false;
        }
      });

      if (valid) {
        store.commit("activeSceneIncrease", 1);
      }
    };

    let finishForm = function () {
      let {
        catAll,
        formRadioDatas1Val,
        formRadioDatas2Val,
        formRadioDatas3Val,
        uid,
      } = datas;
      let category1ID = formRadioDatas.filter(
        (x) => x.id === formRadioDatas1Val.value
      )[0].id;
      let category2ID = formRadioDatas.filter(
        (x) => x.id === formRadioDatas2Val.value
      )[0].id;
      // let category3ID = formRadioDatas.filter((x) => x.id === formRadioDatas3Val.value)[0].id;
      catAll.value = catAll.value.concat(category1ID, category2ID);
      store.commit("finishForm", datas);      
    };

    onMounted(() => {
      datas.uid = uuidv4();
      const selected = document.querySelectorAll(".selected");
      for (const select of selected) {
        select.addEventListener("click", function (event) {
          this.parentElement.classList.add("active");
        });
      }

      window.addEventListener("click", function (event) {
        const overlay = document.querySelector(".select-custom.active");

        if (!overlay?.contains(event.target)) {
          closedSelect();
        }
      });
    });

    return {
      store,
      cities,
      jobs,
      formRadioDatas,
      datas,
      //genderSelected,
      isNumber,
      citySelected,
      jobSelected,
      finishForm,
      activeScene: computed(() => store.getters.getActiveScene),
      nextForm,
    };
  },
};
</script>

<style>
</style>