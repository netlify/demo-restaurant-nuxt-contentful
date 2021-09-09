<template>
   <div>
    <h1>{{ page.title }}</h1>
    <div>{{ page.body }}</div>
    <p>
      <a href="/">Look at the home page</a>
    </p>
    <h2>Menu</h2>
    <ul>
      <li v-for="item of menu" :key=item.title>
        <h2>{{ item.title }}</h2>
        <div>{{ item.description}}</div>
        <p>{{ item.currency}}{{ item.price}}</p>
      </li>
    </ul>
     </div> 
</template>

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