<template>
  <div class="bar" :class="getActiveScene === getTotalScene ? 'last' : ''" :style="'width:'+ 100 / getTotalScene * getActiveScene+'%'">
    <span class="num"> {{getActiveScene}}/{{getTotalScene}} </span>
  </div>
</template>

<script>

import {useStore} from 'vuex';
import {computed } from "vue";

export default {

setup() {

  const store = useStore();
  
  return {
    getActiveScene: computed(() => store.state.activeScene),
    getTotalScene: computed(() => store.state.totalScene)
  }

}

};
</script>

<style lang="scss" scoped>
.bar {
  height: 10px;
  background-color: #41bdc7;
  width: 20%;
  transition: width 1s ease;
  .num {
    background: url(../images/num.png) no-repeat center center;
    width: 200px;
    height: 66px;
    position: absolute;
    right: -100px;
    bottom: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3125em;
    font-weight: 500;
  }
  &.last {
    .num {
      right:0
    }
  }
}
</style>