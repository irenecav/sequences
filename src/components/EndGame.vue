<template>
  <div class="container">
    <i class="fa fa-check-circle" v-animate-css="'bounce'"></i>
    <h1>Desempeño</h1>
    <span>{{ (hits * 100) / tries }} %</span>
    <button @click="reset" v-animate-css="'tada'">Continuar</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "EndGame",

  computed: {
    ...mapState(["hits", "tries"])
  },
  methods: {
    ...mapMutations([
      "resetGame",
      "createFirstNumber",
      "createSequence",
      "getMissingNumber"
    ]),
    reset: function() {
      this.resetGame();
      this.createFirstNumber();
      this.createSequence();
      this.getMissingNumber();
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
}

svg {
  color: #00987e;
  font-size: 54px;
  margin-bottom: 20px;
}

h1 {
  letter-spacing: 0.03em;
  color: #6a7680;
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
}

span {
  font-weight: bold;
  font-size: 96px;
  color: black;
}

button {
  position: fixed;
  bottom: 0;
  width: 100%;

  margin-top: 30px;
  background: #ed2a2f;

  text-transform: uppercase;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    border-radius: 40px;
    width: 255px;
    height: 76px;
    position: relative;
  }
}
</style>
