<template>
<div class="card-list-container">
    <CardCreator :add-new-card="onAddNewCard"></CardCreator>
    <div class="card-list">
    <div v-for="(card, index) in list" :key="index">
        <Card
          :card-url="card.imageUrl"
          :name="card.name"
          :color="card.color"
        ></Card>
    </div>
</div>
</div>
</template>

<script>
import CardCreator from '../components/CardCreator';
import Card from '../components/Card';

export default {
    props: {
        list: [Array],
        onAddNewCard: [Function]
    },
    components: {
      Card,
      CardCreator,
    }
}
</script>

<style scoped>
    .card-list {
      flex-wrap: wrap;
      display: flex;
    }
  .card-list-container {
   display: flex;
  }
</style>


