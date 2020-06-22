<template>
  <div>
    <TimeBar v-if="currentTry === 'asking'" />
    <h1>Completa la Secuencia</h1>
    <ul>
      <li v-for="(number, index) of sequence" :key="number.id">
        <div v-if="number !== missingNumber">{{ number }}</div>
        <Answer v-else></Answer>
        <div v-if="index !== 6">&#8594;</div>
      </li>
    </ul>
    <button v-if="currentTry === 'asking'" @click="checkAnswer">
      Responder
    </button>
    <button v-else @click="newSequence">Continuar</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Answer from "./Answer.vue";
import TimeBar from "./TimeBar.vue";

export default {
  name: "Game",
  components: {
    Answer,
    TimeBar
  },
  computed: {
    ...mapState(["sequence", "missingNumber", "currentTry"])
  },
  methods: {
    ...mapMutations([
      "createFirstNumber",
      "createSequence",
      "getMissingNumber",
      "checkAnswer",
      "resetCurrentTry",
      "nextTry"
    ]),

    newSequence: function() {
      this.nextTry();
      this.createFirstNumber();
      this.createSequence();
      this.getMissingNumber();
      this.resetCurrentTry();
    }
  },
  created: function() {
    this.createFirstNumber();
    this.createSequence();
    this.getMissingNumber();
    this.resetCurrentTry();
  }
};
</script>

<style scoped lang="scss">
h1 {
  margin-top: 60px;
}

ul {
  font-weight: 600;
  font-size: 96px;
  margin-block-end: 30px;
  overflow: auto;

  display: flex;
  li {
    list-style: none;
    display: inline-flex;
  }
}

button {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;

  background: #495259;
  text-transform: uppercase;

  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  border: none;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 174px;
    height: 56px;
    border-radius: 5px;
    position: relative;
  }
}
</style>
