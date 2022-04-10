<template>
  <header>
    <div class="container">
      <a href="/">
        <img src="/images/logo-white.svg" />
      </a>
    </div>
  </header>

  <main>
    <div class="container">
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
          <div
            class="item"
            v-for="(item, index) in formRadioDatas1"
            :key="index"
          >
            <input
              v-model="datas.formRadioDatas1Select.value"
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
          <div
            class="item"
            v-for="(item, index) in formRadioDatas2"
            :key="index"
          >
            <input
              v-model="datas.formRadioDatas2Select.value"
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
          <div
            class="item"
            v-for="(item, index) in formRadioDatas3"
            :key="index"
          >
            <input
              v-model="datas.formRadioDatas3Select.value"
              :value="item.id"
              type="radio"
              :id="'radio-4-' + index"
              name="radio-elements-4"
            />
            <label :for="'radio-4-' + index" class="form-control">
              {{ item.text }}
            </label>
          </div>
          <a href="javascript:;" class="btn" @click="finishForm"
            >ANKETİ TAMAMLA</a
          >
        </div>
      </section>
    </div>
    <div class="container-xl">
      <Result v-if="activeScene === 'end'" />
    </div>
  </main>

  <footer>
    <Step v-if="activeScene !== 'end'" />
  </footer>
</template>



<script>
import { useStore } from "vuex";
import { ref, onMounted, computed } from "vue";
import Step from "./components/Step.vue";
import Result from "./components/Result.vue";
export default {
  components: {
    Step,
    Result,
  },
  setup() {
    const store = useStore();

    const cities = [
      "Adana",
      "Adıyaman",
      "Afyon",
      "Ağrı",
      "Amasya",
      "Ankara",
      "Antalya",
      "Artvin",
      "Aydın",
      "Aksaray",
      "Ardahan",
      "Balıkesir",
      "Bilecik",
      "Bingöl",
      "Bitlis",
      "Bayburt",
      "Bolu",
      "Batman",
      "Burdur",
      "Bartın",
      "Bursa",
      "Çanakkale",
      "Çankırı",
      "Çorum",
      "Denizli",
      "Diyarbakır",
      "Düzce",
      "Edirne",
      "Elazığ",
      "Erzincan",
      "Erzurum",
      "Eskişehir",
      "Gaziantep",
      "Giresun",
      "Gümüşhane",
      "Hakkari",
      "Hatay",
      "Isparta",
      "Mersin",
      "Iğdır",
      "İstanbul",
      "İzmir",
      "Kars",
      "Kastamonu",
      "Kayseri",
      "Kırklareli",
      "Kırşehir",
      "Kocaeli",
      "Konya",
      "Kütahya",
      "Malatya",
      "Manisa",
      "Kahramanmaraş",
      "Karabük",
      "Kilis",
      "Karaman",
      "Kırıkkale",
      "Mardin",
      "Muğla",
      "Muş",
      "Nevşehir",
      "Niğde",
      "Ordu",
      "Osmaniye",
      "Rize",
      "Sakarya",
      "Samsun",
      "Siirt",
      "Sinop",
      "Sivas",
      "Tekirdağ",
      "Tokat",
      "Trabzon",
      "Tunceli",
      "Şanlıurfa",
      "Şırnak",
      "Uşak",
      "Van",
      "Yozgat",
      "Yalova",
      "Zonguldak",
    ];

    const jobs = ["Yazılımcı", "İşletme", "Esnaf"];

    const formRadioDatas1 = [
      {
        id: 1,
        catID: 1,
        text: "Çocuklarımın geleceği",
      },
      {
        id: 2,
        catID: 3,
        text: "İstediğim gibi yaşayamamak",
      },
      {
        id: 3,
        catID: 2,
        text: "Yüksek fiyatlar",
      },
      {
        id: 4,
        catID: 5,
        text: "Özgürce kendimi ifade edememek",
      },
      {
        id: 5,
        catID: 3,
        text: "Barınma sorunu",
      },
      {
        id: 6,
        catID: 3,
        text: "Emekli olarak geçinememek",
      },
      {
        id: 7,
        catID: 4,
        text: "Tarım politikası",
      },
      {
        id: 8,
        catID: 3,
        text: "Engelli olmak",
      },
      {
        id: 9,
        catID: 5,
        text: "Adalet eksikliği",
      },
      {
        id: 10,
        catID: 2,
        text: "Esnaf olarak var olmaya çalışmak",
      },
      {
        id: 11,
        catID: 3,
        text: "İşsizlik",
      },
      {
        id: 12,
        catID: 3,
        text: "Kadın olarak kendimi güvende hissetmemek",
      },
      {
        id: 13,
        catID: 4,
        text: "Çiftçi olarak üretmemek",
      },
      {
        id: 14,
        catID: 5,
        text: "Genç olarak ülkeye güvenmemek",
      },
    ];

    const formRadioDatas2 = [
      {
        id: 15,
        catID: 2,
        text: "Ekonomik durgunluk",
      },

      {
        id: 16,
        catID: 5,
        text: "Adalet, hukuk ve yargı sorunu",
      },
      {
        id: 17,
        catID: 1,
        text: "Eğitim ve öğretim sorunu",
      },
      {
        id: 18,
        catID: 6,
        text: "Cumhurbaşkanlığı Hükümet sistemi",
      },
      {
        id: 19,
        catID: 4,
        text: "Tarım ve üretim",
      },
      {
        id: 20,
        catID: 2,
        text: "Hayat pahalılığı",
      },
      {
        id: 21,
        catID: 5,
        text: "Denge ve denetleme ve kuvvetler ayrılığı",
      },
      {
        id: 22,
        catID: 3,
        text: "Engelli sorunu",
      },
      {
        id: 23,
        catID: 3,
        text: "Kadına yönelik şiddet ve kadın-erkek eşitliği",
      },
      {
        id: 24,
        catID: 7,
        text: "İklim krizi ve çevre sorunu",
      },
      {
        id: 25,
        catID: 5,
        text: "Liyakat sorunu",
      },
      {
        id: 26,
        catID: 3,
        text: "Sağlık, aile ve çocuk politikaları sorunu",
      },
    ];

    const formRadioDatas3 = [
      {
        id: 27,
        text: "Özgür",
      },
      {
        id: 28,
        text: "Zengin",
      },
      {
        id: 29,
        text: "Güçlü",
      },
      {
        id: 30,
        text: "Mutlu",
      },
      {
        id: 31,
        text: "Huzurlu",
      },
    ];

    const datas = {
      age: ref(""),
      gender: ref("Seçiniz"),
      city: ref("Seçiniz"),
      job: ref("Seçiniz"),
      formRadioDatas1Select: ref(""),
      formRadioDatas2Select: ref(""),
      formRadioDatas3Select: ref(""),
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
      // let form = document.querySelectorAll(".form .item");
      // let valid = true;
 
      //   let inputText = el.querySelector("input[type='text']")?.value;
      //   let select = el.querySelector(".selected")?.innerHTML;
      //   let radioChecked = el.querySelector("input[type='radio']")?.checked;
    
        store.commit("activeSceneIncrease", 1);
      
    };

    let finishForm = function () {
      datas.category1ID = formRadioDatas1.filter(
        (x) => x.id === datas.formRadioDatas1Select.value
      )[0].catID;
      datas.category2ID = formRadioDatas2.filter(
        (x) => x.id === datas.formRadioDatas2Select.value
      )[0].catID;
      datas.category3ID = formRadioDatas3.filter(
        (x) => x.id === datas.formRadioDatas3Select.value
      )[0].catID;
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
      activeScene: computed(() => store.state.activeScene),
      nextForm,
    };
  },
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");
@import "./css/base.scss";
</style>