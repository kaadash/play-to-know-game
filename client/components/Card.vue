<template>
  <div class="card">
    <div>{{name}}</div>
    <img :src="cardUrl">
  </div>
</template>

<script>
export default {
  props: {
      cardUrl: [String],
      name: [String],
  }
}
</script>
<style>
.card {
    width: 120px;
    height: 120px;
    line-height: 120px;
    border-radius: 4px;
    border: 1px dashed rgba(0, 0, 0, .4);
    color: rgba(0, 0, 0, .87);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
}
</style>
