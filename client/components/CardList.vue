<template>
<div class="card-list">
    <CardPlaceholder></CardPlaceholder>
    <div v-for="card in list">
        <Card name="asdasd"></Card>
    </div>
</div>
</template>

<script>
import CardPlaceholder from '../components/CardPlaceholder';
import Card from '../components/Card';

export default {
    props: {
        list: [Array]
    },
    components: {
      Card,
      CardPlaceholder,
    }
}
</script>

<style scoped>
    .card-list {
        display: flex;
    }
</style>


