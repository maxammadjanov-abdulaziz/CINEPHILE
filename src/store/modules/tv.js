import axios from "axios";

export default {
    namespaced: true,
    state: {
        path: 'https://api.themoviedb.org/3/tv/',
        tv: null
    },
    mutations: {
        getTvById(state, payload){
            state.tv = payload
        }
    },
    actions: {
        async getTvById({state, commit, rootState},tvId){
            try {
                const res = await axios.get(`${state.path}${tvId}?language=ru-RU&api_key=${rootState.apiKey}`)
                const results = res.data
                commit('getTvById', results)
            } catch (error) {
                console.log('Произошла ошибка при получении сериала по ID', error);
            }
        }
    }
}