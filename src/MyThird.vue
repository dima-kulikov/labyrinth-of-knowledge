<template>
  <h3>hello</h3>
  <ul>
    <li v-for="one in info" v-bind:key="one.id">{{ one.task }}</li>
  </ul>
</template>

<script>
export default {
  inject: ["info"],
};
</script>

<style>
</style>