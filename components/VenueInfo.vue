<script>
  export default {
    data() {
      return {
        info: require("../data/info.json")
      }
    }
  }
</script>


<template>
  <div>
    <h1>{{ info.name}}</h1>
    <p>{{ info.strapline }}</p>
    <div class="address">
      <p v-for="line of info.contact.streetAddress" :key=line> 
        {{ line }}
      </p>
    </div>
    <p>
      Reservations: <a :href="info.contact.email">{{info.contact.email}}</a>, {{ info.contact.phone}}
    </p>
  </div>
</template>