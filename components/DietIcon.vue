<script>
export default {
  props: ["diet"],
  methods: {
    symbol(d){
      switch (d) {
        case 'vegetarian':
          return 'V'
        case 'vegan':
          return 'VE'
        case 'pescatarian':
          return 'P'
        case 'glutenFree':
          return 'GF'
      }
    }
  }
}
</script>


<template>
  <abbr :title=diet class="diet-icon">{{symbol(diet)}}</abbr>
</template>


<style>

.diet-icon {
  font-size: 0.9em;
  width: 2em;
  height: 2em;
  border: 2px solid var(--secondary-text-color);
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

</style>