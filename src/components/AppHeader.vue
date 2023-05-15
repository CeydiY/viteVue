<template>
  <header class="main-header">
    <nav class="navbar navbar-light navbar-header">
      <div class="container">
        <div class="logo">
          <a href="/">
            <img src="../assets/images/logos/logo.svg" class="img-fluid logo-img logo-img--full" alt="logo">
            <img src="../assets/images/logos/icon.svg" class="img-fluid logo-img logo-img--mobile" alt="logo">
          </a>
        </div>
        <search-bar/>
        <div class="user-options">
          <div class="user-options__item">
            <a href="" aria-label="Cart" class="nav-link"><i class="fas fa-cart-shopping fa-xl"></i></a>
          </div>
          <div class="user-options__item">
            <a href="" aria-label="User" class="nav-link"><i class="fas fa-user fa-xl"></i></a>
          </div>
        </div>
      </div>
    </nav>

    <nav class="navbar navbar-expand-lg navbar-categories">
      <div class="container">
        <a class="navbar-brand" href="#">Top categories</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Smartphones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Laptops</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Fragances</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Skincare</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Groceries</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Home decoration</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
  
<script>

import SearchBar from "@/components/SearchBar.vue";
export default {
    name: 'AppHeader',
    components: {
      SearchBar

}
}
</script>
  
<style scoped lang="scss">
:root {
  --heading-color: #242d31;
  --text-color: #2b2b2b;
  --accent-color: #85a2b7;
  --contrast-color: #ef8283;
  --accent-color-light: #dde8ef;
  --accent-dark-color: #345974;
  --contrast-light-color: #d99a9a;
  --neutral-color: #444a4c;
  --neutral-light-color: #f8f8f8;
  --bg-dark-color: #2b2c4d;
  --bg-light-color: #f5f5f5;
  --text-family: 'Outfit';
  --text-neutral-color: #bebfc1;
  --border-light-color: #f5f5f5;
  --border-radius: 10px;
  --box-shadow-light: 10px 10px 26px -21px rgba(0,0,0,0.75);
  --margin-between-sections: 0 0 100px 0;


  /* screen sizes */
  --screen-size-mobile-min: 480px;
  --screen-size-tablet-min: 481px;
  --screen-size-tablet-max: 1024px;
  --screen-size-desktop-min: 1025px;

}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none !important;
}

a:hover {
  color: var(--accent-color);
}

.btn {
  background-color: var(--accent-color);
  border: none;
}

.btn:hover {
  background-color: var(--accent-dark-color);
}

h1, h2, h3, h4, h5, h6 {
  color: var(--heading-color);
}

/* header and nav */

.main-header {
  background-color: #fff;
  width: 100%;
  z-index: 10;
  position: sticky;
  top: 0;
  font-family: 'EB Garamond', serif;

}

.navbar-header {
  height: 100px;

}

.navbar-header .container {
  flex-wrap: nowrap;
  gap: 5em;
}


@media (max-width: 1024px) {
  .navbar-header .container {
    gap: 10px;
  }
}


.logo {
  padding: 0;
}

.logo-img {
  max-height: 70px;
  width: 10em;
}

.logo-img--mobile {
  display: none;
  max-height: 50px;
  max-width: 50px;
}


@media (max-width: 481px) {
  .logo-img--mobile {
    display: block;
  }

  .logo-img--full {
    display: none;
  }
}


.main-header {
  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, .25);
}

.navbar-light .navbar-nav .nav-link {
  color: var(--text-color);
  font-size: 16px;
  font-weight: 600;

}

.navbar-light .navbar-nav .nav-link:hover {
  color: var(--accent-color);

}

.navbar-toggler {
  border: 0;
  padding: 1px 2px;
}

.logo {
  margin-right: 0;
}

.nav-buttons {
  display: flex;
}

.btn-register {
  margin-right: 10px;
}

.main-header__navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}




/* Navbar categories*/
.navbar-categories {
  color: white;
  background-color: #85a2b7;
  box-shadow: none;
}

.navbar-categories a {
  color: var(--neutral-light-color);
}

.user-options a:hover {
  color: var(--neutral-color);
}


.navbar-categories ul {
  display: inline-flex;
  gap: 1rem;
}

/* user options */
.user-options {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: var(--neutral-color);
}
</style>
  