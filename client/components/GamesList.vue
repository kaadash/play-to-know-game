<template>
  <div class="games-list">
      <div class="game" v-for="game in games" :key="game.id">
          <div class="game-name">{{game.name}}</div>
          <button @click="goToGame(game.id)">play</button>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    games: [Array]
  },
  methods: {
    goToGame(gameId) {
        this.$router.push({name: 'game', params: {gameId}});
    }
  }
}
</script>

