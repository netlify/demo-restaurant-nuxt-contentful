<template>
  <div>
    <h1>{{ page.title }}</h1>
    <div>{{ page.body }}</div>
    <p>
      <a href="/menu">Look at the menu</a>
    </p>
  </div> 
</template>

<script>
  export default {
    data() {
      return {
        menu: require("../data/menu.json"),
        page : require("../data/pages.json").home
      }
    }
  }
</script>