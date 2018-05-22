<template>
  <!-- <div class="tree"> -->
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
  <!-- </div> -->
</template>

<script>
import Vue from "vue";
// import item from "./item";
Vue.component("item", {
    name: "item",
    template: `<li>
      <div :class="{bold: isFolder}" @click="toggle" @dblclick="changeType">
        {{ model.name }}
        <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
      </div>
      <ul v-show="open" v-if="isFolder">
        <item class="item" v-for="(model, index) in model.children" :key="index" :model="model">
        </item>
        <li class="add" @click="addChild">+</li>
      </ul>
    </li>`,
    props: ["model"],
    data() {
        return {
            open: false
        };
    },
    computed: {
        isFolder: function() {
            return this.model.children && this.model.children.length;
        }
    },
    methods: {
        toggle: function() {
            if (this.isFolder) {
                this.open = !this.open;
            }
        },
        changeType: function() {
            if (!this.isFolder) {
                Vue.set(this.model, "children", []);
                this.addChild();
                this.open = true;
            }
        },
        addChild: function() {
            this.model.children.push({
                name: "new stuff"
            });
        }
    }
});

export default {
    props: {
        model: Object,
        default: () => {}
    },
    data() {
        return {
            open: false,
            data: 0
        };
    },
    computed: {
        isFolder: function() {
            return this.model.children && this.model.children.length;
        }
    },
    methods: {
        toggle: function() {
            if (this.isFolder) {
                this.open = !this.open;
            }
        },
        changeType: function() {
            if (!this.isFolder) {
                Vue.set(this.model, "children", []);
                this.addChild();
                this.open = true;
            }
        },
        addChild: function() {
            this.model.children.push({
                name: "new stuff"
            });
        }
        // recure() {
        //     if (this.data < 10) {
        //         this.data++;
        //         this.recure();
        //         this.recure();
        //         console.log(this.data);
        //     }
        // }
    },
    mounted() {
        // this.recure();
        setInterval(() => {
            this.recure();
        }, 1000);
    }
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
