<template lang="pug">
router-link(to="" class="main-content-item" v-if="item.title")
    img(:src="imageFullUrl + item.poster_path", alt="alt")

</template>
<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(['imageFullUrl'])
    },
    props: ['item']
}
</script>
<style lang="scss">
    
</style>