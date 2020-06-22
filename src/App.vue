<template>
  <div id="app">
    <Game v-if="tries < 5" />
    <EndGame v-else />
  </div>
</template>

<script>
import Game from "./components/Game.vue";
import EndGame from "./components/EndGame.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["tries"])
  },
  components: {
    Game,
    EndGame
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
