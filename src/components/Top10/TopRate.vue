<template lang="pug">
section.main-rate(v-if="topRate")
    h2 ТОП
        span 10
    Swiper(
        class="main-rate-block"
        :modules="modules"
        :navigation="true"
        :breakpoints="swiperOptions.breakpoints"
    )
        SwiperSlide(
            v-for="(movie, idx) in topRate"
            :key="movie.id"
        ).main-rate-item
            .main-rate-info
                span {{idx + 1}}
                img(:src="imageFullUrl + movie.poster_path", alt="alt")
</template>
<script>
import { mapActions, mapState } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';

export default {
    data() {
        return {
            modules: [Navigation],
            swiperOptions: {
                breakpoints: {
                    320: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 2
                    },
                    900: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 3
                    },
                    1450: {
                        slidesPerView:3
                    }
                }
            }
        }
    },
    components: {Swiper, SwiperSlide},
    methods: {
        ...mapActions('topRate', ['getPopular']),
    },
    computed: {
        ...mapState('topRate', ['topRate']),
        ...mapState(['imageFullUrl'])
    },
   async mounted() {
        await this.getPopular()
    },
}
</script>
<style lang="scss">
    
</style>