<template>
  <p>імья - {{ myName }}</p>
  <p>age - {{ myAge }}</p>
</template>

<script>
export default {
  props: {
    myName: {
      type: String,
      required: true,
      default: "not have",
      validator(value) {
        if (typeof value === "string") {
          return true;
        }
      },
    },
    myAge: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
</style>