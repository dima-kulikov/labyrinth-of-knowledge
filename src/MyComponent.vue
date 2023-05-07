<template>
  <p>счетчик: {{ myNumber }}</p>
  <button v-on:click="plus" class="btn btn-plus">увеличити</button>
  <button @click="minus" v-if="myNumber >= 1" class="btn btn-minus">
    уменшити
  </button>
  <br />
  <input type="text" v-model="sumText" />
  <p>{{ sumText }}</p>
  <br />
  <div class="list" v-for="(ar, index) in myAr" :key="index">
    {{ ar }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      myNumber: 0,
      sumText: "1",
      myAr: ["dima", "lesia", "kuma"],
    };
  },
  methods: {
    plus() {
      this.myNumber += 1;
    },
    minus() {
      this.myNumber += -1;
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
  background-color: #71ebef;
}
.btn-minus {
  background: red;
}
.btn-plus {
  background: greenyellow;
}
.list {
  padding: 5px;
  border: 1px solid red;
  max-width: 200px;
}
</style>

// https://www.youtube.com/watch?v=JLsbNbeCIQk&list=PLGS5TF12xmz-E7BPX63Zsv0uuV5qK_vMG&index=13