<template lang="pug">
router-link(:to="`/${content}/${item.id}`" class="main-content-item")
    img(:src="imageFullUrl + item.poster_path", alt="alt")
</template>
<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(['imageFullUrl'])
    },
    props: ['item', 'content']
}
</script>
<style lang="scss">
    
</style>