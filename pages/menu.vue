<script>
  export default {
    data() {
      return {
        menu: require("../data/menu.json"),
        page : require("../data/pages.json").menu
      }
    },
    filters: {
      marked: require('marked')
    }
  }
</script>


<template>
  <main>
    <h1 class="section-title">{{ page.title }}</h1>
    <div class="section-intro" v-html=this.$options.filters.marked(page.description)></div>
    <MenuItem v-for="item of menu" :key=item.title :item=item />
  </main>
</template>


<style >

</style>