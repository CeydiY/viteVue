<template>
  <form class="search" id="search-component">
    <input class="form-control" type="search" placeholder="Search for a product or inspiration">
    <div class="search__icon">
      <i class="fas fa-search"></i>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchBar"
}
</script>

<style scoped>
.search {
  flex: 1 1 500px;
  margin: auto;
  display: inline-flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px 0;
  background-color: lightgray;
}

.search__icon {
  padding: 6px 10px 6px 10px;
  color: var(--neutral-color);
}

.search .form-control {
  border: 0;
  background-color: inherit;
}

.search .form-control:focus {
  box-shadow: none;
}
</style>