import { createStore } from 'vuex'
import upcoming from '@/store/modules/upcoming'
import popularMovies from '@/store/modules/popularMovies'
import popularTvs from '@/store/modules/popularTvs'
import topRate from '@/store/modules/topRate'
import movie from '@/store/modules/movie'
import tv from '@/store/modules/tv'
import searching from '@/store/modules/searching'
export default createStore({
  state: {
    apiKey: '71cb2676f355bd5674fbe977b8b7fb4b',
    imageFullUrl: 'https://image.tmdb.org/t/p/original/',
    imageUrl: 'https://image.tmdb.org/t/p/w500/',
  },
  modules: {
    upcoming, popularMovies, popularTvs, topRate, movie, tv, searching
  }
})
