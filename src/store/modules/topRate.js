import axios from "axios";

export default {
    namespaced: true,
    state: {
        path: 'https://api.themoviedb.org/3/movie/top_rated?',
        topRate: null
    },
    mutations: {
        getPopular(state, payload){
            state.topRate = payload
        }
    },
    actions: {
        async getPopular({state, commit, rootState}){
            try {
                const res = await axios.get(`${state.path}language=ru-RU&api_key=${rootState.apiKey}&page=1`)
                const results = res.data.results
                const top10 = []
                results.forEach(item => {
                    if(top10.length < 10) top10.push(item)
                });
                commit('getPopular', top10)
            } catch (error) {
                console.log('Произошла ошибка при получении топовых фильмов', error);
            }
        }
    },
    getters: {},
}