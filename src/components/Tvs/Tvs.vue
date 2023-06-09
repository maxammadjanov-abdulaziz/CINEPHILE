<template lang="pug">
section.main-media(v-if="popularTvs")
    router-link(to="/tv")
        span Сериалы
        img(src="@/assets/img/arrow.svg", alt="alt")
    Swiper(
        :modules="modules"
        :space-between="25"
        :navigation="true"
        :breakpoints="swiperOptions.breakpoints"
    )
        SwiperSlide(
            class="main-media-item"
            v-for="(tv, idx) in popularTvs" :key="tv.id"
            @click="getTv(tv, idx)"
        )
            img(:src="imageUrl + tv.poster_path", alt="alt")
        SwiperSlide()
            router-link(to="/tv" class="main-media-item") 
                img(src="@/assets/img/arrow.svg", alt="alt")
                span Все сериалы 
    InfoBlock(
        :selectedId="selectedId"
        :selectedMovie="selectedMovie"
        :index="index"
        page="/tv/"
    )
</template>
<script>
import InfoBlock from '@/components/InfoBlock/InfoBlock.vue'
import { mapActions, mapState } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';

export default {
    data() {
        return {
            selectedId: null,
            selectedMovie: null,
            index: null,
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
                        slidesPerView: 4
                    },
                    1450: {
                        slidesPerView: 5
                    }
                }
            }
        }
    },
    components: {Swiper, SwiperSlide, InfoBlock},
    methods: {
        ...mapActions('popularTvs', ['getPopular']),
        ...mapActions('tv', ['getTvById']),
         async getTv(tv, idx){
            this.selectedId = tv.id
            this.selectedMovie = null
            this.index = idx
            await this.getTvById(this.selectedId)
            this.selectedMovie = this.tv
        }
    },
    computed: {
        ...mapState('popularTvs', ['popularTvs']),
        ...mapState('tv', ['tv']),
        ...mapState(['imageUrl'])
    },
   async mounted() {
        await this.getPopular()
    },
}
</script>
<style lang="scss">
    
</style>