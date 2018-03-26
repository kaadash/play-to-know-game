<template>
<div>
  <div>hello {{$route.params.gameId}}</div>
  <Gameboard :cards="cards" :state="state"></Gameboard>
</div>
</template>

<script>
import { range } from 'lodash';
import Card from "components/Card";
import Gameboard from "components/Gameboard";

const states = {
  yourTurn: 2,
  opponentTurn: 3,
  youWin: 4,
  opponentWin: 5,
}
const size = 10;
const exampleCards = range(size)
  .map((rowId) => range(size)
    .map((columnId) => ({
      rowId,
      columnId,
      cardUrl: 'https://www.gannett-cdn.com/-mm-/00c84aa0468c2780333237426af6c968e983da0b/c=0-101-1342-1890&r=537&c=0-0-534-712/local/-/media/2017/03/03/USATODAY/USATODAY/636241521801023155-BEAR-BEAR-.JPG'
    })))

export default {
  data: () => ({
    state: states.yourTurn,
    cards: exampleCards,
  }),
  components: {
    Card,
    Gameboard,
  }
}
</script>
