<template>
  <div class="tree">
    <li>
      <div :class="{bold: isFolder}" @click="toggle" @dblclick="changeType">
        {{ model.name }}
        <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
      </div>
      <ul v-show="open" v-if="isFolder">
        <item class="item" v-for="(model, index) in model.children" :key="index" :model="model">
        </item>
        <li class="add" @click="addChild">+</li>
      </ul>
    </li>
  </div>
</template>

<script>
import Vue from "vue";

export default {
    props: {
        model: Object,
        default: () => {}
    },
    data() {
        return {};
    },
    computed: {
        isFolder: function() {
            return this.children && this.children.length;
        }
    },
    methods: {
        toggle() {
            if (this.isFolder) {
                this.open = !this.open;
            }
        },
        changeType: function() {
            if (!this.isFolder) {
                Vue.set(this.children, "children", []);
                this.addChild();
                this.open = true;
            }
        },
        addChild() {
            this.children.push({
                name: "new stuff"
            });
        }
    },
    mounted() {}
};
</script>

<style scoped>
body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
}
.item {
    cursor: pointer;
}
.bold {
    font-weight: bold;
}
ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
}
</style>
