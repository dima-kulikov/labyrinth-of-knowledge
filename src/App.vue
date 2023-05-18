<template>
  <h1>hello</h1>
  <!-- <my-component /> -->
  <!-- <h2>Вивід мешканців квартири:</h2> -->
  <!-- <my-notes
    v-for="note in notes"
    v-bind:key="note.id"
    v-bind:task="note.task"
    v-bind:id="note.id"
    v-bind:isOpen="note.isOpen"
    v-bind:taskRead="note.taskRead"
    v-on:countTaskOpen="countTaskOpen"
  /> -->

  <keep-alive>
    <BlockContentOne v-if="nameComponent === 'ONE'"> </BlockContentOne>
    <BlockContentTwo v-else-if="nameComponent === 'TWO'" />
    <BlockContentThree v-else-if="nameComponent === 'THREE'" />
  </keep-alive>
  <button v-on:click="nameRename">ONE</button>
  <button :onclick="nameRename">TWO</button>
  <button :onclick="nameRename">THREE</button>
  <!--  -->
  <br />
  <hr />
  <formBlock />
  <hr />
  <my-counter></my-counter>
  <button @click="plusCount2">minus click</button>
</template>

<script>
import BlockContentOne from "./components/BlockContentOne.vue";
import BlockContentThree from "./components/BlockContentThree.vue";
import BlockContentTwo from "./components/BlockContentTwo.vue";
import formBlock from "./components/formBlock.vue";
import MyCounter from "./components/MyCounter.vue";
// import MyNotes from "./assets/MyNotes.vue";

export default {
  data() {
    return {
      nameComponent: "ONE",
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
    nameRename(e) {
      const myTarget = e.target.innerHTML;
      this.nameComponent = myTarget;
    },
    plusCount2() {
      this.$store.state.count -= 1;
    },
  },
  components: {
    // MyNotes,
    BlockContentOne,
    BlockContentTwo,
    BlockContentThree,
    formBlock,
    MyCounter,
  },
  provide() {
    return {
      info: this.notes,
    };
  },
};
</script>

<style>
</style>
// https://www.youtube.com/watch?v=cmzeczmgMW4&list=PLGS5TF12xmz-E7BPX63Zsv0uuV5qK_vMG&index=29