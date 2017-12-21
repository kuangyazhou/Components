<template>
  <div class="bread-component">
    <span v-for="(item,index) in options"  v-bind:key="index">
      <span @click="itemClcik" class="bread-item">{{item.label}}</span>
      <span v-if="index+1!=options.length">></span>
    </span>
  </div>
</template>

<script>
export default {
  props:{
    options:{
      type:Array,
      default:()=>{
        return [];
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    itemClcik(e){
      console.log(e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bread-component{
  display: inline-block;
  padding: 4px 6px;
}
.bread-item{
  display:inline-block;
  margin: 4px;
  transition: all 0.4s ease-in-out;
}
.bread-item:hover{
  cursor: pointer;
  color: cyan;
  transform: scale(1.2);
  transition: all 0.6s ease-in-out;
}
</style>
