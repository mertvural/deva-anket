<template>
  <section>
    <div class="result">
      <div class="top">
        <a href="">
          <img src="../assets/images/logo-transparent.png" class="d-block" />
        </a>
        <div class="btn-share">
          <span class="text" @click="showShare = true" v-show="!showShare"
            >DEVA ÇÖZÜMLERİNİ SEN DE PAYLAŞ</span
          >

          <ul class="social-sub" v-show="showShare">
            <li>
              <a
                class="share-btn share-btn-branded share-btn-twitter"
                :href="
                  'https://twitter.com/share?url=https://anket.devahazir.com/?uid=' +
                  datas.uid
                "
                title="Paylaş Twitter"
              >
              </a>
            </li>

            <li>
              <a
                class="share-btn share-btn-branded share-btn-facebook"
                :href="
                  'https://www.facebook.com/sharer/sharer.php?u=https://anket.devahazir.com/?uid=' +
                  datas.uid
                "
                title="Paylaş Facebook"
              >
              </a>
            </li>
            <li>
              <a
                class="share-btn share-btn-branded share-btn-linkedin"
                :href="
                  'https://www.linkedin.com/shareArticle?mini=true&url=https://anket.devahazir.com/?uid=' +
                  datas.uid
                "
                title="Paylaş LinkedIn"
              >
              </a>
            </li>
          </ul>
        </div>
      </div>

      <picture>
        <img src="../assets/images/banner-pazar-secimolsa.png" />
      </picture>

      <article class="desc include-leaf">
        <p>
          <strong>Değerli vatandaşım, </strong>
        </p>
        <p>
          {{ datas.age }} yaşında {{ datas.city }}’da yaşayan bir
          {{ datas.job }} mesleğini yerine getiren biri olarak. Daha
          zengin, mutlu ve üretken bir Türkiye’de yaşamak istediğini biliyoruz.
        </p>
        <p>
          DEVA Partisi olarak biz de seninle aynı hayali paylaşıyoruz. Onun için
          de yol haritamızı oluşturuyoruz. İşi bilen ekibimizle gece gündüz
          çalışıyoruz. Planlarımız hazır. İktidara gelir gelmez uygulayacağız.
        </p>
        <p>
          <strong>Derdine DEVA olacak çözümlerimiz:</strong>
        </p>
      </article>

      <article>
        <template v-for="(datas, index) in selectedDatas">
          <ul class="category-list" v-if="datas" :key="index">
            <li class="title">
              <template v-for="(cat, index) in categories">
                <template v-if="cat.id === datas">
                  <h2 :key="index">
                    {{ cat.text }}
                  </h2>
                </template>
              </template>
            </li>
            <template v-for="cat in categories">
              <template v-if="cat.id === datas">
                <template v-for="(answers, index) in cat.answers">
                  <li :key="index" v-if="index <= 3">
                    {{ answers.text }}
                    {{ setShareText(answers.text) }}
                  </li>
                </template>
              </template>
            </template>
            <template v-for="(cat, index) in categories">
              <template v-if="cat.id === datas">
                <a :href="getButtons(cat.catID)"
                target="_blank"
                class="btn btn-blue btn-sm"
                :key="index">TÜM ÇÖZÜMLERİMİZ</a>
              </template>
            </template>
          </ul>
        </template>
      </article>

      <article class="desc mb-1">
        <p>Daha güzel günlerde yaşamak dileği ile…</p>
        <p>
          <strong>Ali Babacan</strong>
        </p>
      </article>

      <div class="btn-share mb-1">
        <span class="text" @click="showShare = true" v-show="!showShare"
          >DEVA ÇÖZÜMLERİNİ SEN DE PAYLAŞ</span
        >

        <ul class="social-sub" v-show="showShare">
          <li>
            <a
              class="share-btn share-btn-branded share-btn-twitter"
              :href="
                'https://twitter.com/share?url=https://anket.devahazir.com/?uid=' +
                datas.uid
              "
              title="Paylaş Twitter"
            >
            </a>
          </li>

          <li>
            <a
              class="share-btn share-btn-branded share-btn-facebook"
              :href="
                'https://www.facebook.com/sharer/sharer.php?u=https://anket.devahazir.com/?uid=' +
                datas.uid
              "
              title="Paylaş Facebook"
            >
            </a>
          </li>
          <li>
            <a
              class="share-btn share-btn-branded share-btn-linkedin"
              :href="
                'https://www.linkedin.com/shareArticle?mini=true&url=https://anket.devahazir.com/?uid=' +
                datas.uid
              "
              title="Paylaş LinkedIn"
            >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import * as firebase from "firebase/app";
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import {firebaseConfig} from '../../firebase-config'
import { getDatabase, ref as storageRef, set, remove } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";
firebase.initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();
export default {
  setup() {
    const store = useStore();
    const datas = store.getters.getDatas;
    let arr = new Array();
    const categories = store.state.formRadioDatas;
    const selectedDatas = store.state.selectedDatas;
    let showShare = ref(false);
    function setShareText(t) {
      arr.push(t);
    }
    let getButtons = function (catID) {
      switch (catID) {
        case 1:
          return "https://devahazir.devapartisi.org.tr/deva-iktidarinin-yarina-atilim-eylem-plani/";
          break;
        case 2:
          return "https://devahazir.devapartisi.org.tr/deva-iktidarinin-ekonomi-eylem-plani/";
          break;
        case 3:
          return "https://devahazir.devapartisi.org.tr/deva-iktidarinin-sosyal-politikalar-eylem-plani/";
          break;
        case 4:
          return "https://devahazir.devapartisi.org.tr/deva-iktidarinin-tarim-eylem-plan/";
          break;
        case 5:
          return "https://devahazir.devapartisi.org.tr/deva-iktidarinin-demokrasi-eylem-plani/";
          break;
        case 6:
          return "https://devahazir.devapartisi.org.tr/deva-iktidarinin-adil-yargi-eylem-plani/";
          break;
        case 7:
          return "https://devahazir.devapartisi.org.tr/deva-iktidarinin-afet-eylem-plani/";
          break;
        case 8:
          return "https://devahazir.devapartisi.org.tr/deva-iktidarinin-yarina-atilim-eylem-plani/";
          break;
      }
    };

    onMounted(() => {
      (function () {
        var shareButtons = document.querySelectorAll(".share-btn");

        if (shareButtons) {
          [].forEach.call(shareButtons, function (button) {
            button.addEventListener("click", function (event) {
              var width = 650,
                height = 450;

              event.preventDefault();

              window.open(
                this.href,
                "Share Dialog",
                "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" +
                  width +
                  ",height=" +
                  height +
                  ",top=" +
                  (screen.height / 2 - height / 2) +
                  ",left=" +
                  (screen.width / 2 - width / 2)
              );
            });
          });
        }
      })();
      signInAnonymously(auth)
        .then(() => {
          set(storageRef(db, "users/" + datas.uid), {
            age: datas.age,
            job: datas.job,
            city: datas.city,
            text1: `
              ${arr[0]}
            `,
            text2: `
              ${arr[1]}
            `,
            text3: `
              ${arr[2]}
            `,
            text4: `
              ${arr[arr.length - 1]}
            `,
            text5: `
              ${arr[arr.length - 2]}
            `,
            text6: `
              ${arr[arr.length - 3]}
            `,
            shareImg: `${categories[selectedDatas[0] - 1].imageId}.png`,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // alert(errorMessage);
        });
    });

    return {
      datas: computed(() => store.state.datas),
      categories: computed(() => store.state.formRadioDatas),
      selectedDatas: computed(() => store.state.selectedDatas),
      setShareText,
      showShare,
      getButtons
    };
  },
};
</script>

