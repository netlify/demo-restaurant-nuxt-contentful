<template>
  <div class="home-grid">
    <MainSidebar />
    <Nuxt />
  </div>
</template>

<script>
export default {

  head: () => ({
    
  })
    
}
</script>

<style lang="css">
  * {
    margin:0;
    padding:0;
  }
  
  :root {
    --sansSerif: "Quicksand", "Segoe UI", Candara, "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif;

    --primary-text-color: #333;
    --secondary-text-color: #555555;
    --primary-page-color: #f4f3f0;
    --accent-color: #fa33ab;
    --accent-color-faint: #fa33ab88;
    --accent-color-alternate: #00d9ff;
  }

  body {
    font-family: var(--sansSerif);
    background-color: var(--primary-page-color);
  }

  @media (min-width: 500px) {
    body {
      border-top:10px solid red;
    }
  }

  .home-grid {
    margin-left: 200px;
  }
</style>


