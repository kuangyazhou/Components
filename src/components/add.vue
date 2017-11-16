<template>
    <div class="counter-component">
        <div>{{test}}</div>
    </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      //   number: this.min
      test: 0
    };
  },
  created() {
    //   直接更新为1000,并不会展示从0到1000的过程
    for (let i = 0; i < 1000; i++) {
      this.test++;
    }
  },
  watch: {},
  methods: {}
};
</script>

<style scoped>

</style>
