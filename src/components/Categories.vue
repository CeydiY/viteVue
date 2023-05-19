<template>
  <section class="categories-products-grid mt-5 mb-5">
    <div class="container">
      <ul class="nav nav-pills categories-products-grid__categories" id="v-pills-categories-tab" role="tablist"
          aria-orientation="vertical">
        <li class="nav-link categories-products-grid__category" :id="'v-pills-categories-'+cate+'-tab'"
            data-bs-toggle="pill" :data-bs-target="'#v-pills-categories-'+cate" aria-selected="true" v-for="cate in category" v-bind:key="cate.id">
          <span>{{cate}}</span>
        </li>
      </ul>
      <div class="tab-content" id="v-pills-categories-tabContent">
        <div class="tab-pane fade show active" id="v-pills-categories-smartphones" role="tabpanel"
             aria-labelledby="v-pills-categories-smartphones-tab" tabindex="0">
          <section class="products-grid">
            <article class="product-card">
              <a href="">
                <div class="product-card__top">
                  <div class="product-card__image">
                    <img src="../assets/images/products/smartphones/1.jpg" alt="iphone 9">
                    <div class="product-card__discount">
                      <span>12%</span>
                    </div>
                  </div>
                </div>
                <div class="product-card__bottom">
                  <div class="product-card__description">
                    <div class="product-card__rating"></div>
                    <div class="product-card__description">
                      <h2>iPhone 9</h2>
                      <p>An apple mobile is nothing like apple</p>
                    </div>
                  </div>
                  <div class="product-card__price">
                    <span>549€</span>
                  </div>
                </div>
              </a>
            </article>
          </section>
        </div>

      <div class="tab-pane fade" id="v-pills-categories-skincare" role="tabpanel"
           aria-labelledby="v-pills-categories-skincare-tab" tabindex="0">
        <section class="products-grid">
          <article class="product-card">
            <a href="
                ">
              <div class="product-card__top">
                <div class="product-card__image">
                  <img src="../assets/images/products/skincare/1.jpg" alt="iphone 9">
                  <div class="product-card__discount">
                    <span>13%</span>
                  </div>
                </div>
              </div>
              <div class="product-card__bottom">
                <div class="product-card__description">
                  <div class="product-card__rating"></div>
                  <div class="product-card__description">
                    <h2>Hyaluronic Acid Serum</h2>
                    <p>L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid</p>
                  </div>
                </div>
                <div class="product-card__price">
                  <span>19€</span>
                </div>
              </div>
            </a>
          </article>
        </section>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import json from '@/json/categories.json'
export default {
  name: "Categories",
  data() {
    return {
      category: json,
    };
  }
}
</script>

<style scoped>
section{
  font-family: 'EB Garamond', serif;
}
/* Product card */
.product-card {
  width: 300px;
  height: 325px;
  border-radius: 2%;
  box-shadow: var(--box-shadow-light);
  overflow: hidden;
  animation: card-out 0.5s ease 0s 1 backwards;
}

@keyframes card-out {
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.product-card:hover {
  animation: card-in 0.5s ease 0s 1 forwards;

}
@keyframes card-in {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-10px);
  }
}
.product-card a {
  display: block;
  height: 100%;
  text-decoration: none;
}
.product-card a:hover {
  color: inherit;
}

.product-card__top {
  max-height: 175px;
  overflow: hidden;
}

.product-card__image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-card__discount {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 70px;
  height: 70px;
  background-color: #ef8283;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5em;
}

.product-card__bottom {
  padding: 20px;
  background-color: lightgrey;
}

.product-card__description{
  height: 85px;
  color: black;
}


.product-card__description h2{
  font-weight: bold;
  font-size: 1em;
}

.product-card__description p{
  color: gray;
  font-size: 0.7em;
  line-height: 1.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;

}

.product-card__price {
  font-size: 1.5em;
  font-weight: bold;
  color: black;
}

/* Grid products */
.products-grid {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  /* Grid mode */
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  align-items: center; */
}

.products-grid > * {
  flex: 0 0 240px;
}

@media (max-width: 1024px) {
  .products-grid > * {
    flex: 0 0 45%;
  }
}

/*Products categories*/
.categories-products-grid {
  margin: var(--margin-between-sections);
}
.categories-products-grid .container{
  display: flex;
  gap: 30px;
}

.categories-products-grid__categories {
  flex: 0 0 15%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (max-width: 481px) {
  .categories-products-grid .container {
    flex-direction: column;
  }

  .categories-products-grid__categories {
    flex-direction: row;
  }
  .categories-products-grid__category {
    width: auto;
    flex: 1 1 30%;
  }
}
.nav-pills .nav-link{
  background: white !important;
}


.categories-products-grid__category {
  width: 100%;
  height: 60px;
  color: black;
  box-shadow: var(--box-shadow-light);
  -webkit-box-shadow: 5px 5px 5px #C9C2C1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1em;
  cursor: pointer;
}

.categories-products-grid__category:hover {
  color: #85a2b7;
}

.categories-products-grid__category.active{
  background-color: #85a2b7 !important;
}
</style>