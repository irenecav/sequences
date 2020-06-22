<template>
  <div class="container">
    <div :class="classObject">
      <span>{{ picked }}</span>
    </div>
    <div class="wrapper-options">
      <div v-if="currentTry === 'success'" class="check">
        <i class="fa fa-check-circle"></i>
      </div>
      <div v-else-if="currentTry === 'fail'">
        <p class="menssage">La respuesta correcta es {{ missingNumber }}</p>
      </div>
      <div v-else>
        <div v-if="randomPosition === 1" class="options">
          <input type="radio" id="a" v-model="picked" :value="a" />
          <label for="a">{{ a }}</label>

          <input type="radio" id="b" v-model="picked" :value="b" />
          <label for="b">{{ b }}</label>

          <input type="radio" id="c" v-model="picked" :value="c" />
          <label for="c">{{ c }}</label>
        </div>
        <div v-else-if="randomPosition === 2" class="options">
          <input type="radio" id="c" v-model="picked" :value="c" />
          <label for="c">{{ c }}</label>

          <input type="radio" id="b" v-model="picked" :value="b" />
          <label for="b">{{ b }}</label>
          <input type="radio" id="a" v-model="picked" :value="a" />
          <label for="a">{{ a }}</label>
        </div>
        <div v-else class="options">
          <input type="radio" id="c" v-model="picked" :value="c" />
          <label for="c">{{ c }}</label>
          <input type="radio" id="a" v-model="picked" :value="a" />
          <label for="a">{{ a }}</label>

          <input type="radio" id="b" v-model="picked" :value="b" />
          <label for="b">{{ b }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import _ from "lodash";

export default {
  name: "Answer",
  data: function() {
    return {
      a: null,
      b: null,
      c: null,
      picked: null,
      randomPosition: 1
    };
  },
  watch: {
    picked: function(value) {
      this.setPicked(value);
    },
    missingNumber: function() {
      this.picked = null;
      this.a = this.missingNumber;
      this.b = this.missingNumber + 1;
      this.c = this.missingNumber - 1;
      this.randomPosition = _.random(1, 3);
    }
  },
  computed: {
    ...mapState(["missingNumber", "tries", "currentTry"]),
    classObject: function() {
      switch (this.currentTry) {
        case "success":
          return { success: true };
        case "fail":
          return { fail: true };
        default:
          return { square: true };
      }
    }
  },
  methods: {
    ...mapMutations(["setPicked"])
  },
  created: function() {
    this.a = this.missingNumber;
    this.b = this.missingNumber + 1;
    this.c = this.missingNumber - 1;
    this.randomPosition = _.random(1, 3);
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper-options {
  height: 170px;
}

.check {
  margin-top: -30px;
}

.options {
  width: 198.6px;
  height: 70.9px;
  background: #91a9bc;
  box-shadow: 0px 9.7335px 9.7335px #b4d8f4;
  border-radius: 9.7335px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: -25px;

  label {
    width: 52.84px;
    height: 52.84px;
    display: block;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 4.36097px;
    font-size: 32px;
  }
}

input {
  display: none;
}

.square {
  width: 125px;
  height: 125px;
  border-radius: 20px;
  border: 1px dashed #a4a4a4;
}

.success {
  width: 125px;
  height: 125px;
  border-radius: 20px;
  border: 3px solid #52e1c9;
  box-shadow: 0px 30px 30px rgba(0, 234, 194, 0.3);
}

.menssage {
  font-weight: 600;
  font-size: 24px;
  color: #b60006;
  max-width: 200px;
}

.fail {
  width: 125px;
  height: 125px;
  border-radius: 20px;
  border: 3px solid #ff7c80;
  box-shadow: 0px 28.6166px 28.6166px rgba(255, 124, 128, 0.3);
}

svg {
  width: 50px;
  height: 50px;
  color: #00987e;
  margin-top: -20px;
}
</style>
