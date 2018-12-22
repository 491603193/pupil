<template>
  <div id="app">
    <transition  name="fade-left" >
      <router-view  class="app-view" />
    </transition>
  </div>
</template>

<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  /*-webkit-font-smoothing: antialiased;*/
}
</style>
