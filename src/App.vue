<template>
  <h1>hello</h1>
  <!-- <my-component /> -->
  <h2>Вивід мешканців квартири:</h2>
  <my-notes
    v-for="note in notes"
    v-bind:key="note.id"
    v-bind:task="note.task"
    v-bind:id="note.id"
    v-bind:isOpen="note.isOpen"
    v-bind:taskRead="note.taskRead"
    v-on:countTaskOpen="countTaskOpen"
  />
</template>

<script>
import MyNotes from "./assets/MyNotes.vue";

export default {
  data() {
    return {
      notes: [
        {
          task: "помыть посуду",
          id: 1,
          isOpen: false,
          taskRead: 0,
        },
        {
          task: "убрать вещи",
          id: 2,
          isOpen: false,
          taskRead: 0,
        },
        {
          task: "покормить котов",
          id: 3,
          isOpen: false,
          taskRead: 0,
        },
      ],
    };
  },
  methods: {
    countTaskOpen(id) {
      console.log(id);
      const numberTask = this.notes.find((el) => el.id === id);
      numberTask.taskRead += 1;
    },
  },

  components: {
    MyNotes,
  },
};
</script>

<style>
</style>
// https://www.youtube.com/watch?v=p0PfHuLsGa4&list=PLGS5TF12xmz-E7BPX63Zsv0uuV5qK_vMG&index=16