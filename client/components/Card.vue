<template>
  <div class="card" :style="{backgroundColor: color}">
    <div v-if="name">{{name}}</div>
    <img v-if="cardUrl" :src="cardUrl">
  </div>
</template>

<script>
export default {
  props: {
      cardUrl: [String],
      name: [String],
      color: [String],
  }
}
</script>
<style scoped>
img {
  width: 120px;
  height: 120px;
  object-fit: cover;
}
.card {
    width: 120px;
    height: 120px;
    line-height: 120px;
    border-radius: 4px;
    border: 1px dashed rgba(0, 0, 0, .4);
    color: white;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
}
</style>
