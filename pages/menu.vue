<script>
  export default {
    data() {
      return {
        menu: require("../data/menu.json"),
        page : require("../data/pages.json").menu
      }
    }
  }
</script>


<template>
  <main>
    <h1 class="section-title">{{ page.title }}</h1>
    <div class="section-intro">
      {{ page.body }}
    </div>
    <MenuItem v-for="item of menu" :key=item.title :item=item />
  </main>
</template>


<style >

</style>