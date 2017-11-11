<template>
  <div>
      <h1>fuck the king</h1>
      <!-- <bankChooser></bankChooser> -->
      <!-- <dialog></dialog> -->
      <counter :max="100" :min="20"></counter>
      <!-- <HelloWorld></HelloWorld> -->
  </div>
</template>

<script>
// import bankChooser from "./bankChooser";
// import checkOrder from "./checkOrder";
// import chooser from "./chooser";
import counter from "./counter";
import HelloWorld from "./HelloWorld";
// import datepicker from "./datepicker";
import dialog from "./dialog";
// import layout from "./layout";
// import logForm from "./logForm";
// import multiplyChooser from "./multiplyChooser";
// import regForm from "./regForm";
// import selection from "./selection";
// import slideShow from "./slideShow";
export default {
  name: "component",
  components: { HelloWorld, counter },
  data() {
    return {
      msg: ""
    };
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
