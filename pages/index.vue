<script>
  export default {
    data() {
      return {
        info: require("../data/info.json"),
        testimonials: require("../data/testimonials.json"),
        gallery: require("../data/gallery.json"),
        page : require("../data/pages.json").home
      }
    }
  }
</script>

<template>
  <div>

    <h1>{{ page.title }}</h1>
    <div>{{ page.body }}</div>
    
    <h2>Testimonials</h2>
    <div v-for="item of testimonials" :key=item.date>
      <h3>{{ item.title }}</h3>
      <p>{{ item.displayName }}, <time>{{ item.date }}</time> </p>
      <div>{{ item.body}}</div>
    </div>

    <h2>Gallery</h2>
    <div class="gallery">
      <img v-for="item of gallery"
        :key=item.attribution.url
        :src=item.imageUrl
        :alt=item.caption
      >
    </div>

    <hr />

    <footer>
      <h2>Opening hours</h2>
      <div class="hours">
        <p v-for="day in info.hours" :key="day">
          {{day}}
        </p>
      </div>
      <h2>Social</h2>
      <ul>
        <li v-for="item in info.social" :key="item.channel">
          {{item.channel}} : <a :href="item.url">{{ item.displayName}} </a>
        </li>
      </ul>
    </footer>
  </div> 
</template>



<style scoped>
 .gallery img {
   width: 250px;
 }

 .address p,
 .hours p {
   margin: 0;
 }
</style>