<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
body {
  margin: 0;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
}
button {
    border-radius: 8px;
    padding: 8px 10px;
    background: white;
    text-transform: uppercase;
    color: rgba(0, 0, 0, .87);
    font-weight: 500;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
    border: none;
    margin: 5px;
    cursor: pointer;
    border: 2px solid rgb(34, 190, 68);
}

input {
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, .3);
  padding: 8px;
  outline: none;
}
label {
    color: rgba(0, 0, 0, .4);
    font-size: 12px;
    margin-bottom: 6px;
}
</style>
