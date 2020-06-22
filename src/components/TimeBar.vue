<template>
  <vue-topprogress
    ref="topProgress"
    height="20"
    colorShadow="transparent"
  ></vue-topprogress>
</template>

<script>

import { vueTopprogress } from "vue-top-progress";
import { mapMutations } from "vuex";

export default {
  name: "TimeBar",
  data: function() {
    return { timerId: null };
  },
  methods: {
    ...mapMutations(["checkAnswer"])
  },
  mounted() {
    this.$refs.topProgress.start();

    this.timerId = setTimeout(() => {
      this.checkAnswer();
      this.$refs.topProgress.done();
    }, 10000);
  },
  beforeDestroy: function() {
    clearTimeout(this.timerId);
    this.timerId = null;
  },

  components: {
    vueTopprogress
  }
};
</script>

<style lang="scss" scoped>
.top-progress {
  background: linear-gradient(90deg, #ff8001 0%, #ffcc0d 100%) !important;
  border-top-right-radius: 10px !important;
  border-bottom-right-radius: 10px !important;

  .peg {
    display: none !important;
  }
}
</style>
