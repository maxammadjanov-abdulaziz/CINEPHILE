<template lang="pug">
.container.main-search
    input(
        type="text"
        :placeholder="placeholder"
        v-model="value"
        autofocus
    )
    .main-content-list(v-if="searchData")
        SearchContent(
            v-for="item in searchData" :key="item.id"
            :item="item"
        )
    
</template>
<script>
import SearchContent from '@/components/Search/SearchContent.vue'
import { mapState } from "vuex";
export default {
    components: {SearchContent},
    props: ['placeholder'],
    data() {
        return {
            value: ''
        }
    },
    computed: {
        ...mapState('searching',['searchData'])
    },
    watch: {
        value(){
            if(this.value != ''){
                this.$store.dispatch('searching/getSearchData', this.value)
            }
        }
    }
    
}
</script>
<style lang="scss">
    
</style>