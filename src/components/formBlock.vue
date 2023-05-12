<template>
  <form>
    <input v-bind:value="valueOne" v-on:input="inputChangeOne" type="text" />
    <br />
    <p>{{ valueOne }}</p>
    <br />
    <input v-model="valueTwo" type="text" />
    <br />
    <p>{{ valueTwo }}</p>
    <br />
    <button>button</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      valueOne: "",
      valueTwo: "",
    };
  },
  methods: {
    inputChangeOne(e) {
      this.valueOne = e.target.value;
    },
  },
};
</script>

<style>
</style>