<template>
  <section>
    <div class="result">
      <h2 class="text-center f400">
        Değerli vaktinizden ayırarak <br />
        verdiğiniz yanıtlar için teşekkür ederiz. <br />
        <strong> Deva olarak çözümlerimiz hazır.</strong>
      </h2>

      <div class="wrapper">
        <div class="left">
          <p>
            <strong>{{datas.age}} yaşında</strong> {{datas.city}}’da yaşayan bir {{datas.job}} olarak. Daha
            zengin, mutlu ve üretken bir Türkiye’de yaşamak istediğini
            biliyoruz.
          </p>

          <p>
            <strong>DEVA Partisi</strong> olarak biz de seninle aynı hayali
            paylaşıyoruz. Onun için de işi bilen ekibimizle gece gündüz
            çalışarak yol haritamızı oluşturuyoruz.
          </p>

          <p>
            <strong
              >İktidara geldiğimiz ilk gün hayata geçirmek üzere planlarımız
              hazır.</strong
            >
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
          <div class="result-banner">
              <img
            src="/images/result-img.png"
            alt=""
            title=""
          />
          </div>
          
     

         <template v-for="(datas, index) in selectedDatas" :key="index">

           <ul class="category-list" v-if="datas">
            <template v-for="(cat, index) in categories" :key="index">
              <template v-if="cat.catID === datas">
               <li v-for="(answers, index) in cat.answers" :key="index">
                 {{answers.text}}
               </li>
              </template>
            </template>
          </ul>
         </template>
           
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import {useStore} from 'vuex';
import {computed } from "vue";

export default {

setup() {

  const store = useStore();

  let categories = store.getters.getCategories;


  
  return {
    datas: computed(() => store.state.datas),
    categories: computed(() => store.state.categories),
    selectedDatas: computed(() => store.state.selectedDatas)
  }

}

};
</script>

<style lang="scss" scoped>
@mixin bottomLine {
  border-bottom: 1px solid #fff;
  &::before {
    content: "";
    width: 116px;
    height: 5px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

.f400 {
  font-weight: 400;
}
.result {
  .wrapper {
    display: grid;
    grid-template-columns: 486px 1fr;
    grid-gap: 20px;
    margin-top: 3em;
  }
  .left {
    border-radius: 30px;
    border: 2px solid #1784b1;
    padding: 2em 80px 2em 2em;
    font-size: 1.4em;
    p {
      padding-bottom: 20px;
      &:first-child {
        &::after {
          content: "";
          width: 10px;
          height: 24px;
          background-color: #fff;
          position: absolute;
          left: calc(-2em - 1px);
          top: 3px;
        }
      }
    }
  }
  .right {
    padding-top: 2em;
    .result-banner {
      left: -90px;
      margin-bottom: 2em;
       border-radius: 30px;
      overflow: hidden;
      img {
        transition: transform 1s ease;
        border-radius: 30px;
        &:hover {
           transform: scale(1.1);
        }
      }
     
    }
  }
}

strong {
  font-weight: 700;
}

.statistics {
  &.one .num {
    font-weight: 700;
    color: #41bdc7;
    font-size: 5.5em;
    line-height: 1;
  }
  &.two .num {
    font-weight: 700;
    color: #a7ad37;
    font-size: 4.5em;
    line-height: 1;
  }
  p {
    font-size: 0.8em;
  }
  & + .statistics {
    margin-top: 2.5em;
  }
}

p.line {
    @include bottomLine
}

.category-list {
  padding: 0 90px 0 0;
  margin: 0;
  li {
    font-size: 1.3em;
    list-style: none;
    @include bottomLine;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-color:#41BDC7;
    &::before {
        background-color: #41BDC7;
    }
  }
  & + .category-list {
      margin-top: 3.5em;
      li {
        border-color:#D8B828;
        &::before {
          background-color: #D8B828;
        }
      }
  }
}
</style>