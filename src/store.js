import {createStore} from "vuex";

const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations:{
        mymytant(state, num){
            state.count += num;
        }
    }
  })


  export default store;