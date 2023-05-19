<template>
  <article class="product-card" v-for="product in products" v-bind:key="product.id">
    <a href="">
      <div class="product-card__top">
        <div class="product-card__image">
          <img v-bind:src="'../assets/images/' + product.img" alt="iphone 9">
          <div class="product-card__discount">
            <span>{{ product.discountPercentage }}</span>
          </div>
        </div>
      </div>
      <div class="product-card__bottom">
        <div class="product-card__description">
          <div class="product-card__rating"></div>
          <div class="product-card__description">
            <h2>{{ product.title }}</h2>
            <p>{{ product.description }}</p>
          </div>
        </div>
        <div class="product-card__price">
          <span>{{ product.price }}</span>
        </div>
      </div>
    </a>
  </article>
</template>
<script>
import json from '@/json/products.json'
export default {
  name: "Products",
  computed: {
  },
  data() {
    return {
      products: json.products,
    };
  }
}
</script>

<style scoped>
article{
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
  text-align: center;
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
  height: 25px;
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
  background-color: white;
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
</style>