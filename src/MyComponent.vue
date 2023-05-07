<template>
  <p>счетчик: {{ myNumber }}</p>
  <button @click="minus" class="btn btn-minus">уменшити</button>
  <button v-on:click="plus" class="btn btn-plus">увеличити</button>
  <br />
  <input type="text" v-bind:value="sumText" v-on:input="changeInput" />
  <p>{{ sumText }}</p>
</template>

<script>
export default {
  data() {
    return {
      myNumber: 0,
      sumText: "1",
    };
  },
  methods: {
    plus() {
      this.myNumber += 1;
    },
    minus() {
      this.myNumber += -1;
    },
    changeInput(e) {
      this.sumText = e.target.value;
    },
  },
};
</script>
<style>
.btn {
  display: inline-block;
  margin: 10px;
  padding: 5px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}
.btn:hover {
  color: #1e1eb7;
  font-weight: 700;
}
.btn-minus {
  background: red;
}
.btn-plus {
  background: greenyellow;
}
</style>