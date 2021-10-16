<script>
  export default {
    data() {
      return {
        menu: require("../data/menu.json"),
        page : require("../data/pages.json").menu
      }
    },
    methods: {
      markdown(str) {
        const md = require('marked');
        return md(str);
      }
    }
  }
</script>


<template>
  <main>
    <h1 class="section-title">{{ page.title }}</h1>
    <div class="section-intro" v-html=markdown(page.description)></div>
    <MenuItem v-for="item of menu" :key=item.title :item=item />
  </main>
</template>

