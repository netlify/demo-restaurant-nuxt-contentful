<template>
  <footer class="main-footer">
    <p class="main-footer-text">
      Made as an example of building a site with a headless CMS
    </p>
    <p class="main-footer-text">
      Repo:
      <a href="https://github.com/netlify/demo-restaurant-nuxt-contentful">GitHub</a>
    </p>
    <p class="main-footer-text">
      Built with <a href="https://nuxtjs.org">Nuxt</a> and
      <a href="https://www.netlify.com">Netlify</a>
    </p>
  </footer>
</template>

<style>

  .main-footer {
    padding: 2rem;
    border-top: 1px solid var(--secondary-accent-color);
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

  .main-footer-text {
    margin: 0 4rem 0.5rem;
  }

</style>