<template>
  <div class="v-table">
    <div class="v-title">
      <span class="title-ceil" v-for="item in title" v-bind:key="item.index">{{item}}</span>
    </div>
    <div class="v-content" v-for="(e,index) in tableData" v-bind:key="e.index" :class="{active:activeLine==index+1}">
      <span class="content-ceil" v-for="(ceil,index) in e" v-bind:key="ceil.index" :class="{active:activeRow==index+1}">{{ceil}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeLine: {
      type: Number,
      default: 0
    },
    activeRow: {
      type: Number,
      default: 0
    },
    showIndex: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      title: ["项目", "今日", "昨日", "最近7日", "上月同期"],
      tableData: [
        ["销售额", 33612.16, 116227.32, 804383.53, 0],
        ["销售额", "101.24", "113.95", "121.11", "501.97"],
        ["销售额", "3486", "32495", "36241", "31265"],
        ["销售额", "3486", "32495", "3624", "31265"],
        ["销售额", "3486", "32495", "36241", "31265"]
      ]
    };
  },
  computed: {},
  methods: {},
  mounted() {
    // this.showIndex ? this.title.unshift("排行") : "";
    if (this.showIndex) {
      this.title.unshift("排行");
      this.tableData.forEach((e, i) => {
        e.unshift(i + 1);
      });
    }
  }
};
</script>

<style scoped>
.v-table {
  width: 500px;
  background: transparent;
  color: #e5e5e5;
}
.active {
  font-size: 16px;
  color: #4aedca;
}
.title-ceil,
.content-ceil {
  display: inline-block;
  width: 60px;
  padding: 4px 8px;
}
.v-title {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.v-title .title-ceil:not(:last-child) {
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.v-content {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.v-content .content-ceil:not(:last-child) {
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}
.v-table .v-content:last-child {
  border: none;
}
</style>
