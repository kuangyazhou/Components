<template>
  <div>
      <h1>fuck the king</h1>
      <!-- <bankChooser></bankChooser> -->
      <kdialog :isShow="showDialog"></kdialog>
      <counter :max="100" :min="20"></counter>
      <!-- <HelloWorld></HelloWorld> -->
      <button @click="add+=1">打开dialog</button>
      <!-- <elButton @click="openDialog" type="success" round>计数</elButton> -->
      <p>按钮点击了{{add}}次</p>
  </div>
</template>

<script>
// import bankChooser from "./bankChooser";
// import checkOrder from "./checkOrder";
// import chooser from "./chooser";
import counter from "./counter";
import HelloWorld from "./HelloWorld";
// import datepicker from "./datepicker";
import kdialog from "./dialog";
// import layout from "./layout";
// import logForm from "./logForm";
// import multiplyChooser from "./multiplyChooser";
// import regForm from "./regForm";
// import selection from "./selection";
// import slideShow from "./slideShow";
import {Button} from 'element-ui';
import Vue from 'vue';
Vue.use(Button);
export default {
  name: "component",
  components: { HelloWorld, counter,kdialog },
  data() {
    return {
      msg: "",
      add:0,
      showDialog:false,
    };
  },
  methods:{
    openDialog:function(e){
      console.log(e);
      this.showDialog=true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
