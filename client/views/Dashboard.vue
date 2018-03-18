<template>
  <div class="dashboard-container">
    This is dashboard
    <CardList></CardList>
  </div>
</template>


<script>
import OpponentSearchBar from 'components/OpponentSearchBar'
import CardList from 'components/CardList'

export default {
  components: {
    CardList,
    OpponentSearchBar
  }
}
</script>
