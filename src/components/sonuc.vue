<template>

  <main>
    <div class="container-xl">
      <section>
        <div class="result-socialnext">
          <h2 class="text-center f400">
            Beklentilerini söyle!<br />
            <strong>
              Deva Partisi olarak, sana uygun<br />
              çözümlerimizi gösterelim!
            </strong>
          </h2>

          <a href="/" class="btn btn-red m-auto">ANKETE KATIL DERDİNE DEVA BUL</a>

          <p class="title-line">
            <span>
              Bir önceki anket sonuçları:
            </span>
          </p>

          <div class="wrapper">
            <div class="left">
              <p v-if="posts">
                <strong>{{ posts.age }} yaşında</strong>
                {{ posts.city }}’da yaşayan bir {{ jobSelected() }} olarak. Daha zengin, mutlu ve üretken bir
                Türkiye’de yaşamak istediğini biliyoruz.
              </p>

              <p>
                <strong>DEVA Partisi</strong> olarak biz de seninle aynı
                hayali paylaşıyoruz. Onun için de işi bilen ekibimizle gece
                gündüz çalışarak yol haritamızı oluşturuyoruz.
              </p>

              <p>
                <strong>İktidara geldiğimiz ilk gün hayata geçirmek üzere
                  planlarımız hazır.</strong>
              </p>

              <p>Daha güzel günlerde yaşamak dileği ile…</p>

              <strong>Ali Babacan</strong>
              <br /><br />

              <div class="statistics one">
                <div class="num">%50</div>
                <p class="line">
                  Çiftçilerin kullandığı gübre maliyetinin
                  <strong>%50’si destek</strong> olarak geri vereceğiz
                </p>
              </div>

              <div class="statistics two">
                <div class="num">2 YIL</div>
                <p class="line">
                  Çiftçierin borçlarını en a
                  <strong>2 yıl faizsiz erteleyeceğiz</strong>
                </p>
              </div>
            </div>

            <div class="right">
              <div class="result-banner" v-if="posts">
                <img :src="`/images/category-images/${posts.shareImg}`" alt="" title="" />
              </div>

              <ul class="category-list">
                <li class="title">
                  {{ posts.text1 }}
                </li>
                <li class="title">
                  {{ posts.text2 }}
                </li>
                <li class="title">
                  {{ posts.text3 }}
                </li>
              </ul>

              <ul class="category-list">
                <li class="title">
                  {{ posts.text4 }}
                </li>
                <li class="title">
                  {{ posts.text5 }}
                </li>
                <li class="title">
                  {{ posts.text6 }}
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>
    </div>
  </main>

</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import * as firebase from "firebase/app";
import { getDatabase, ref as storageRef, onValue } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";
import { firebaseConfig } from "../../firebase-config";
firebase.initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();
export default ({
  setup() {
    const uid = location.href.split("?uid=")[1]
    const posts = ref("");
    signInAnonymously(auth)
      .then(() => {
        const starCountRef = storageRef(db, "users/" + uid);
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          posts.value = data;
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });

    function jobSelected() {
        
      if (posts.value.job === "Diğer") {
        return "Vatandaş"
      }
      else if (posts.value.job === "Ticaret") {
        return "Ticaretle uğraşan biri"
      }
      else if (posts.value.job === "Bilişim") {
        return "Bilişimci"
      }
      else {
        return posts.job
      }

    }

    return {
      posts,
      jobSelected
    };
  },
});
</script>

<style>
</style>