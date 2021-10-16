<script>
  export default {
    props: ['item'],
    methods: {
      // assemble the relevant dietary notes object into an array
      visibleDietaryIcons(item) {
        let icons = [];
        for (const key in item.dietary) {
          if (item.dietary[key]) {
            icons.push(key)
          }
        }
        return icons;
      },
      markdown(str) {
        const md = require('marked');
        return md(str);
      }
    }
  }
</script>

<template>
  <section class="menu-item">
    <div class="menu-item-header">
      <h2 class="menu-item-title">{{ item.title }}</h2>
      <span class="menu-item-price">{{ item.currency }}{{ item.price }}</span>  
      <ul class="menu-item-diet">      <li
          v-for="diet in visibleDietaryIcons(item)"
          :key="`${item.title}-${diet}`"
        >
        <DietIcon :diet=diet />
        </li>
      </ul>
    </div>
    <p class="menu-item-description" ></p>
    <p class="menu-item-description" v-html=markdown(item.description)></p>
    <figure v-if=item.photo.imageUrl>
      <img :src=item.photo.imageUrl :alt=item.photo.caption>
      <figcaption>{{item.photo.caption}} — <a :href=item.photo.attribution.url>Photo credit</a></figcaption>
    </figure>
    
  </section>
</template> 

<style>
  .menu-item {
    margin-bottom: 6rem;
  }

  .menu-item-description {
    margin: 0;
  }

  .menu-item-diet {
    display: flex;
    margin: 0;
    padding: 0;
  }

  .menu-item-diet li {
    margin-left: 10px;
    list-style-type: none;
  }

  .menu-item-diet li:first-child {
    margin-left: 15px;
  }

  .menu-item img {
    width: 100%;
    background-color: #fff;
    padding: 1rem;
    margin:1rem -1rem 0;
    box-shadow: 0 3px 6px #0004;
  
  }

  .menu-item figcaption {
    text-align: center;
    font-size: 0.9rem;
    margin-top:0.5em;
  }


  .menu-item-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .menu-item-price {
    font-size: 1rem;
    margin-left: 1em;
  }

  .menu-item-title {
    margin: 0;
    font-size: 20px;
  }
</style>