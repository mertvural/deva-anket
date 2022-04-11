<template>
  <section v-if="activeScene === 1">
    <h2 class="line">Bana kim olduğunu söyle?</h2>
    <div class="form col2">
      <div class="item">
        <label for="">Yaşın</label>
        <input type="text" class="form-control" v-model="datas.age.value" />
      </div>

      <div class="item">
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
      </div>

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
      <a href="javascript:;" class="btn" @click="nextForm">DEVAM ET</a>
    </div>
  </section>

  <section v-if="activeScene === 2">
    <h2 class="line">Senin için en önemli sorun nedir?</h2>
    <div class="form col2 gap-sm">
      <div class="item" v-for="(item, index) in formRadioDatas1" :key="index">
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
      <a href="javascript:;" class="btn" @click="nextForm">DEVAM ET</a>
    </div>
  </section>

  <section v-if="activeScene === 3">
    <h2 class="line">Sence Türkiye’nin temel sorunu nedir?</h2>
    <div class="form col2 gap-sm">
      <div class="item" v-for="(item, index) in formRadioDatas2" :key="index">
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
      <a href="javascript:;" class="btn" @click="nextForm">DEVAM ET</a>
    </div>
  </section>

  <section v-if="activeScene === 4">
    <h2 class="line">
      Sorunlardan bir kabustan uyanma hızında kurtulmak mümkün. Nasıl bir
      Türkiye'de yaşamak istersin?
    </h2>
    <div class="form col1 gap-sm">
      <div class="item" v-for="(item, index) in formRadioDatas3" :key="index">
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
      <a href="javascript:;" class="btn" @click="finishForm">ANKETİ TAMAMLA</a>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { ref, onMounted, computed } from "vue";
export default {
    setup() {
    const store = useStore();
    const cities = store.getters.getCities;
    const jobs = store.getters.getJobs;
    const formRadioDatas1 = store.getters.getformRadioDatas1;
    const formRadioDatas2 = store.getters.getformRadioDatas2;
    const formRadioDatas3 = store.getters.getformRadioDatas3;
    const datas = {
      age: ref(""),
      gender: ref("Seçiniz"),
      city: ref("Seçiniz"),
      job: ref("Seçiniz"),
      formRadioDatas1Val: ref(""),
      formRadioDatas2Val: ref(""),
      formRadioDatas3Val: ref(""),
      category1ID: ref(""),
      category2ID: ref(""),
      category3ID: ref(""),
    };

    const genderSelected = function (target) {
      target === 1
        ? (datas.gender.value = "Erkek")
        : (datas.gender.value = "Kadın");
      closedSelect();
    };

    const citySelected = function (target) {
      datas.city.value = target;
      closedSelect();
    };

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
      let index=0;
      form.forEach((el) => {
        let inputText = el.querySelector("input[type='text']")?.value;
        let select = el.querySelector(".selected")?.innerHTML;
        let radioChecked = el.querySelector("input[type='radio']")?.checked;

        if (inputText === "" || select === "Seçiniz") {
          valid = false;
        }
     
        if (radioChecked === true && index === 0) {
          index = 1;
          valid = true;
        }
        else if(index === 0 && radioChecked === false) {
          valid = false;
        }
      });
      
      if (valid) {
        store.commit("activeSceneIncrease", 1);
      }
    };

    let finishForm = function () {
      datas.category1ID = formRadioDatas1.filter((x) => x.id === datas.formRadioDatas1Val.value)[0].catID;
      datas.category2ID = formRadioDatas2.filter((x) => x.id === datas.formRadioDatas2Val.value)[0].catID;
      datas.category3ID = formRadioDatas3.filter((x) => x.id === datas.formRadioDatas3Val.value)[0].catID;
      store.commit("finishForm", datas);
    };

    onMounted(() => {
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
      formRadioDatas1,
      formRadioDatas2,
      formRadioDatas3,
      datas,
      genderSelected,
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