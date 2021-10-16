<template>
  <footer class="main-footer">
    <p class="main-footer-text">
      Repo:
      <a href="https://github.com/bencodezen/demo-restaurant-vue3-ts-contentful">GitHub</a>
    </p>
    <p class="main-footer-text">
      Built with <a href="https://v3.vuejs.org">Nuxt</a> and
      <a href="https://www.netlify.com">Netlify</a>
    </p>
  </footer>
</template>

<style>

  .main-footer {
    padding: 2rem;
    border-top: 1px solid #eee;
    background-color: #fff;
    font-size: 0.8rem;
    text-align: center;
  }

  @media (min-width: 800px) {
    .main-footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 30%;
      max-width: 400px;
      padding: 2rem 0;
      background-color: transparent;
      border-style: none;
    }
  }

  .main-footer-text:first-child {
    margin-bottom: 0.5rem;
  }

</style>