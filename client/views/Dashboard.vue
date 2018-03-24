<template>
  <div class="dashboard-container">
    This is dashboard
    <CardList :list="list"></CardList>
    <GamesList :games="games"></GamesList>
  </div>
</template>


<script>
import OpponentSearchBar from 'components/OpponentSearchBar'
import CardList from 'components/CardList'
import GamesList from 'components/GamesList'

export default {
  data: () => ({
    list: [{name: 'asd'}, {name: 12332}],
    games: [{id: 1, opponent: 'kadash'}],
  }),
  components: {
    CardList,
    OpponentSearchBar,
    GamesList
  }
}
</script>
