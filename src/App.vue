<template>

  <template v-if="!isSonuc">
    <div
      class="app"
      :class="{ isResultPage: activeScene === 'end' }"
      
    >
      <Header v-if="activeScene !== 'end'" />
      <main>
        <div class="container" v-if="activeScene !== 'end'">
          <Forms />
        </div>
        <div class="container-xs" v-if="activeScene === 'end'">
          <Result />
        </div>
      </main>
      <footer v-if="activeScene !== 'end'">
        <Step />
      </footer>
    </div>
  </template>

  <template v-if="isSonuc">
    <div class="app">
      <Header />
      <Sonuc />
    </div>
  </template>
</template>

<script>
import Step from "./components/Step.vue";
import Header from "./components/Header.vue";
import Result from "./components/Result.vue";
import Forms from "./components/Forms.vue";
import Sonuc from "./components/sonuc.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Step,
    Result,
    Forms,
    Header,
    Sonuc,
  },
  setup() {
    const store = useStore();
    const isSonuc = location.href.split("?uid=")[1];
    let url= new URL(location.href);
    let params = new URLSearchParams(url.search);
    if(params.get("fbclid")) {
      location.href = "?uid="+ params.get("uid")
    }
      
    return {
      isSonuc,
      activeScene: computed(() => store.getters.getActiveScene),
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");
@import "./assets/css/base.scss";
@import "./assets/css/result.scss";
</style>