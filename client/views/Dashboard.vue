<template>
  <div class="dashboard-container">
    This is dashboard
    <CardList :list="list"></CardList>
  </div>
</template>


<script>
import OpponentSearchBar from 'components/OpponentSearchBar'
import CardList from 'components/CardList'

export default {
  data: () => ({
    list: [{name: 'asd'}, {name: 12332}]
  }),
  components: {
    CardList,
    OpponentSearchBar
  }
}
</script>
