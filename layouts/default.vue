
<template>
  <div class="home-grid">
    <MainSidebar />
    <div class="page">
      <Nuxt />
      <MainFooter />
    </div>
  </div>
</template>


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
    color: var(--primary-text-color);
    background-color: var(--primary-page-color);
    font-size: 16px;
    overflow-y: scroll;
  }


  .home-grid {
    
  }

  @media (min-width: 800px) {
    body {
      font-size: 18px;
    }
    .home-grid {
      display:flex;
      flex-direction: row;
    }
  }

  .page {
    margin: 0 auto;
  }

  main {
    margin: 4rem;
    max-width: 600px;
  }


  h1.section-title {
    margin: 0;
    font-size: 3.5em;
    margin-bottom: 4rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  h1.section-title::after {
    content: '';
    display: block;
    width: 150px;
    height: 10px;
    margin-top: 0.2em;
    margin-left: 1px;
    background-color: #c83030;
  }

  h2.section-title {
    font-size: 2rem;
    margin: 2em 0 0 0;
    margin-bottom: 1em;
    font-weight: bold;
    text-transform: uppercase;
  }

  h2.section-title::after {
    content: '';
    display: block;
    width: 120px;
    height: 6px;
    margin-top: 0.2em;
    margin-left: 1px;
    background-color: #c83030;
  }



  .section-intro {
    margin-bottom: 6rem;
  }

  a:link,
  a:visited {
    color: #000;
    text-decoration-color: #ccc;
    text-decoration-thickness: 2px;
  }

  a:hover,
  a:focus {
    text-decoration-color: #c83030;
  }

  ul {
    list-style: none;
  }
</style>


