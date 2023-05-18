<template>
  <h1>Hello Kuma</h1>
  <h2>{{ $store.state.count }}</h2>
  <button :onclick="plusCount">click me</button>
</template>

<script>
export default {
  methods: {
    plusCount() {
      this.$store.commit("mymytant", 5);
    },
  },
};
</script>

<style>
</style>