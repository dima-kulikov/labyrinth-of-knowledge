<template>
  <div class="block">
    <p v-if="myisOpen" v-bind:class="this.taskRead < 2 ? 'green' : 'red'">
      {{ task }}
    </p>
    <button :onclick="showTask" class="btn-1">Прочитать задание</button>
    <span>прочитал {{ taskRead }} раз</span>
  </div>
  <my-third />
</template>

<script>
import MyThird from "../MyThird.vue";
export default {
  data() {
    return {
      myisOpen: this.isOpen,
    };
  },
  props: {
    task: {
      type: String,
      required: true,
    },
    taskRead: {
      type: Number,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    showTask() {
      this.myisOpen = !this.myisOpen;
      if (this.myisOpen) {
        this.$emit("countTaskOpen", this.id);
      }
    },
  },
  components: {
    MyThird,
  },
};
</script>

<style scoped >
.block {
  margin: 10px 0;
}
.btn-1 {
  margin-right: 10px;
  cursor: pointer;
}
.green {
  background: #07ff0f58;
}
.red {
  background: #ff07077e;
}
</style>