import axios from "axios";

export default {
    namespaced: true,
    state: {
        path: 'https://api.themoviedb.org/3/movie/',
        movie: null
    },
    mutations: {
        getMovieById(state, payload){
            state.movie = payload
        }
    },
    actions: {
        async getMovieById({state, commit, rootState}, movieId){
            try {
                const res = await axios.get(`${state.path}${movieId}?language=ru-RU&api_key=${rootState.apiKey}`)
                const results = res.data
                commit('getMovieById', results)
            } catch (error) {
                console.log('Произошла ошибка при получении фильма по ID', error);
            }
        }
    }
}