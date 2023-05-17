<template>
  <main class="main-body">
    <div id="carouselFeatured" class="carousel carousel-dark slide carousel-featured" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselFeatured" data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselFeatured" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselFeatured" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <img src="../assets/images/featured/featured_clean.png" class="d-block" alt="...">
          <div class="carousel-caption d-md-block">
            <h5>Come clean with Zero Co</h5>
            <p>Take a load off mother earth</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="../assets/images/featured/featured_iphone.png" class="d-block" alt="...">
          <div class="carousel-caption d-md-block">
            <h5>New iPhone</h5>
            <p>The best product at the best price</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="../assets/images/featured/featured_laptop.png" class="d-block" alt="...">
          <div class="carousel-caption d-md-block">
            <h5>New ASUS V-100</h5>
            <p>The new versatile laptop</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselFeatured" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselFeatured" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <br>
    <section class="top-offers">
      <div class="container">
        <h2 class="top-offers__title">Deals of the day</h2>
        <div class="top-offers-grid">
          <products v-bind:products="products"/>
        </div>
      </div>
    </section>
    <categories/>
    <newsletter/>
  </main>
  <Footer/>
</template>

<script>


import Newsletter from "@/components/Newsletter.vue";
import Products from "@/components/Products.vue";
import Categories from "@/components/Categories.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'HomeView',
  components: {
    Footer,
    Categories,
    Products,
    Newsletter

  },
  data() {
    return {
      "products": [
        {
          "id":1,
          "title": "iPhone 9",
          "description": "An apple mobile which is nothing like apple",
          "price": 549,
          "discountPercentage": 12.96,
          "picture": '../assets/images/products/smartphones/1.jpg'
        },
        {
          "id":2,
          "title": "iPhone 9",
          "description": "An apple mobile which is nothing like apple",
          "price": 549,
          "discountPercentage": 12.96,
          "picture": '../assets/images/products/smartphones/1.jpg'
        },
        {
          "id":3,
          "title": "iPhone 9",
          "description": "An apple mobile which is nothing like apple",
          "price": 549,
          "discountPercentage": 12.96,
          "picture": '../assets/images/products/smartphones/1.jpg'
        }
      ]
    };
  },
  computed: {

  },
  created() {

  },
  methods: {

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
/* main body */
.main-body {
  flex: 80;
  margin-top: 30px;
  font-family: 'EB Garamond', serif;
}

/* Home */
.main-body__home {
  display: flex;

}
.carousel-featured {
  border-radius: var(--border-radius);
  background-color: var(--neutral-light-color);
  height: 500px;
  overflow: hidden;
  margin: var(--margin-between-sections);
}

.carousel-inner {
  height: 100%;
}

.carousel-item {
  height: 100%;
}

.carousel-item:nth-child(1) {
  background-color: #e9d7d9;
}

.carousel-item:nth-child(2) {
  background-color: #dbe0c7;
}

.carousel-item:nth-child(3) {
  background-color: #c5d4e0;
}

.carousel-featured .carousel-caption {
  /* background-color: rgba(97, 97, 97, 0.377);
  color: var(--neutral-light-color); */
  border-radius: var(--border-radius);
  width: auto;
  text-align: left;
  bottom: 0;
}

.carousel-featured .carousel-caption h5 {
  font-size: 3em;
}

.carousel-featured .carousel-caption p {
  font-size: 1.5em;
}

@media (max-width: 1024px) {
  .carousel-featured{
    height: 300px;
  }

}
.carousel-featured img {
  /* height: 100%;
  max-width: 100%; */
  height: 100%;
  margin: auto;
  float: right;
}
/* Top offers */
.top-offers {
  background-color: var(--accent-dark-color);
  background: linear-gradient(186deg, rgba(2,0,36,1) 0%, rgba(64,28,64,1) 64%, rgba(110,48,110,1) 100%);
  padding: 20px 0;
  margin: var(--margin-between-sections);
}
.top-offers .container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

@media (max-width: 1024px) {
  .top-offers .container {
    flex-direction: column;
  }
}

.top-offers__title {
  color: white;
  font-weight: bold;
  font-size: 2em;
}
.top-offers-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 30px;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  width: 100%;
  scroll-snap-type: x mandatory;
  scroll-padding: 24px;
  box-sizing: border-box;
}

.top-offers-grid::-webkit-scrollbar {
  height: 10px;
  background-color: rgba(255, 255, 255, 0.178);
}

.top-offers-grid::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.521);
  border-radius: 20px;
}

.top-offers-grid::-webkit-scrollbar-thumb:hover {
  background-color:var(--neutral-light-color);
}

.top-offers-grid > * {
  flex: 0 0 250px;
  scroll-snap-align: start;
  box-sizing: border-box;

}
</style>
