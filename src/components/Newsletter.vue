<template>
  <section class="newsletter">
    <div class="container">
      <h2>NEWSLETTER</h2>
      <p>
        Receive a weekly email with new offers and recommendations and get a discount!
      </p>
      <form>
        <input class="form-control" type="email" placeholder="Your email address">
        <button class="btn" type="button">
          Subscribe
        </button>
      </form>
    </div>

  </section>
</template>

<script>
export default {
  name: "Newsletter"
}
</script>

<style scoped>
/* Featured banner */
.newsletter {
  width:100%;
  background-color: #85a2b7;
  background-image: url(../assets/images/backgrounds/background_triangle.svg);
  background-position: center;
  background-size: cover;
  margin: var(--margin-between-sections);
  padding: 50px;
  color: white;
  font-family: 'EB Garamond', serif;
}

.newsletter h2 {
  color: white;
}
.btn{
  background-color: #85a2b7;
  color: white;
}

.newsletter .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.newsletter form {
  display: flex;
  flex-direction: row;
  gap: 1em;
}

@media (max-width: 481px) {
  .newsletter form {
    flex-direction: column;
  }
}
</style>