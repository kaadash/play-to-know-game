<template>
  <div class="card-placeholder">
    <button @click="isUrlType = !isUrlType">{{cardType}}</button>
    <div v-if="isUrlType">
      <input type="text" v-model="imageUrl" placeholder="image url">
      <button @click="addNewCard({imageUrl: imageUrl})">add</button>
    </div>
    <div v-else>
      <input type="text" v-model="name" placeholder="text">
      <button @click="addNewCard({name: name, color: getRandomColor()})">add</button>
    </div>
    <img :src="imageUrl" alt="">
  </div>
</template>

<script>
import { sample } from 'lodash';
export default {
  data: function() {
    return {
      imageUrl: '',
      name: '',
      isUrlType: true,
    }
  },
  methods: {
    getRandomColor() {
      return sample(['#981313', '	#69c2c9', '#8ce55f']);
    }
  },
  computed: {
    cardType() {
      return this.isUrlType ? 'Change to text card' : 'Change to image card';
    }
  },
  props: {
    addNewCard: [Function],
  }
}
</script>


<style scoped>
img {
  object-fit: cover;
  opacity: .4;
  width: 240px;
  height: 240px;
  position: absolute;
}
input, button {
  position: relative;
  z-index: 2;
}
.card-placeholder {
  position: relative;
  width: 240px;
  height: 240px;
  flex-direction: column;
  line-height: 240px;
  border-radius: 4px;
  border: 1px dashed rgba(0, 0, 0, .4);
  color: rgba(0, 0, 0, .4);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
  
.card-placeholder > div {
  line-height: 1;
  width: auto;
  height: auto;
}
</style>
