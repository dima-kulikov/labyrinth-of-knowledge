<template>
  <h1>hello</h1>
  <!-- <my-component /> -->
  <h2>Вивід мешканців квартири:</h2>
  <my-notes
    v-for="note in notes"
    v-bind:key="note.id"
    v-bind:myName="note.name"
    v-bind:myAge="note.age"
  />
</template>

<script>
import MyNotes from "./assets/MyNotes.vue";

export default {
  data() {
    return {
      notes: [
        {
          name: "Dima",
          age: 35,
          id: 1,
        },
        {
          name: "Lesia",
          age: 28,
          id: 2,
        },
        {
          name: "Kuma",
          age: 3,
          id: 3,
        },
        {
          name: "Simka",
          age: 1,
          id: 3,
        },
      ],
    };
  },

  components: {
    MyNotes,
  },
};
</script>

<style>
</style>
