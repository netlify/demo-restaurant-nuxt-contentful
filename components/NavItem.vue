<script>
  export default {
    props: ['text', 'url'],
    methods: {
      iconFileName(text) {
        return `${text.toLowerCase()}-icon.svg`;
      }
    }
  };

</script>

<template>
  <li class="nav-item">
    <a :href="url" class="nav-item-link">
      <img :src="require(`~/assets/img/${iconFileName(text)}`)" :alt="text" />
      <span>{{ text }}</span>
    </a>
  </li>
</template>


<style>
  .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    list-style-type: none;
    border-top: 1px solid var(--secondary-accent-color)
  }
  .nav-item:last-child {
    border-bottom: 1px solid var(--secondary-accent-color);
  }
  .nav-item-link {
    display: grid;
    justify-items: center;
    grid-template-rows: 40px auto;
    grid-row-gap: 5px;
    font-weight: bold;
    text-decoration: none;
    color: var(--primary-text-color);
  }
</style>
