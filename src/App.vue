<template>
<Navbar />
<router-view></router-view>
<Footer />
</template>
<script>
import Footer from './components/Footer/Footer.vue'
import Navbar from './components/Navbar/Navbar.vue'
export default {
  components: { Navbar, Footer },
}
</script>
<style>
  
</style>