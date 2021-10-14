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
  <main class="menu-page">
    <h1 class="section-title">{{ page.title }}</h1>
    <p class="section-strapline">{{ page.description }}</p>
    <div class="section-intro">
      {{ page.body }}
    </div>
    <MenuItem v-for="item of menu" :key=item.title :item=item />
  </main>
</template>


<style scoped>
 
 .menu-page {
    margin: 80px;
  }

  .section-title {
    margin: 0;
    margin-bottom: 30px;
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .section-title::after {
    content: '';
    display: block;
    width: 150px;
    height: 10px;
    margin-top: 20px;
    margin-left: 1px;
    background-color: #c83030;
  }

  .section-intro {
    margin-bottom: 4rem;
  }
</style>