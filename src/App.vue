<template>
  <Header />
  <main>
    <div class="container">
      <Forms />
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
alert("adad")
import Step from "./components/Step.vue";
import Header from "./components/Header.vue";
import Result from "./components/Result.vue";
import Forms from "./components/Forms.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Step,
    Result,
    Forms,
    Header,
  },
  setup() {
    const store = useStore();
    return {
      activeScene: computed(() => store.getters.getActiveScene),
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");
@import "./css/base.scss";
</style>