<template>
  <AppHeader />
  <Footer/>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {
    Footer,
    AppHeader
}
}
</script>
