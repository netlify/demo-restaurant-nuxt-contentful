<template>
   <div>
    <h1>Menu</h1>
    <ul>
      <li v-for="item of menu">
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
        menu: require("../data/menu.json")
      }
    }
  }
</script>