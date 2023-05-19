<template>
  <AppHeader />
  <home-view/>
  <Footer/>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Footer from "@/components/Footer.vue";
import HomeView from "@/views/HomeView.vue";

export default {
  name: 'App',
  components: {
    Footer,
    AppHeader,
    HomeView,
}
}
</script>
