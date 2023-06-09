<template>
<main class="main">
    <Upcoming/>
    <Movies />
    <Tvs />
    <TopRate />
</main>
</template>
<script>
import Upcoming from '@/components/Upcoming/Upcoming.vue'
import Movies from '@/components/Movies/Movies.vue'
import Tvs from '@/components/Tvs/Tvs.vue'
import TopRate from '@/components/Top10/TopRate.vue'
export default {
  components: { Upcoming, Movies, Tvs, TopRate },
    
}
</script>
<style lang="scss">
    
</style>