import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    firstNumber: 0,
    sequence: [],
    missingNumber: Number,
    tries: 0,
    hits: 0,
    currentTry: "asking",
    picked: null
  },
  mutations: {
    createFirstNumber(state) {
      state.firstNumber = _.random(0, 8);
    },
    createSequence(state) {
      let firstNumber = state.firstNumber;
      const sequence = (state.sequence = []);
      for (let i = 0; i < 7; i++) {
        firstNumber++;
        sequence.push(firstNumber);
      }
    },
    getMissingNumber(state) {
      var sequence = state.sequence;
      state.missingNumber = sequence[_.random(0, 6)];
    },
    checkAnswer(state) {
      if (state.missingNumber === state.picked) {
        state.hits += 1;

        state.currentTry = "success";
      } else {
        state.currentTry = "fail";
      }
    },
    nextTry(state) {
      state.tries += 1;
    },

    resetGame(state) {
      state.hits = 0;
      state.tries = 0;
    },
    setPicked(state, value) {
      state.picked = value;
    },
    resetCurrentTry(state) {
      state.currentTry = "asking";
      state.picked = null;
    }
  },
  actions: {},
  modules: {}
});
