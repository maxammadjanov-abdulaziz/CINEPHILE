import axios from "axios";

export default {
    namespaced: true,
    state: {
        path: 'https://api.themoviedb.org/3/search/multi',
        searchData: null
    },
    mutations: {
        getSearchData(state, payload){
            state.searchData = payload
        }
    },
    actions: {
        async getSearchData({state, commit, rootState}, search){
            try {
                const res = await axios.get(`${state.path}?language=ru-RU&api_key=${rootState.apiKey}&query=${search}`)
                const data = res.data.results
                commit('getSearchData', data)
            } catch (error) {
                console.log('Произошла ошибка при получении фильма по ID', error);
            }
        }
    }
}