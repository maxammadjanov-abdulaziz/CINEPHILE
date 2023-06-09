<template lang="pug">
footer.footer
    ul.footer-social
        li(v-for="link in links" :key="link.img")
            a(href="#") 
                img(:src="require('@/assets/img/' + link.img)", alt="alt")
    p © 2022 CINEPHILE. Может содержать информацию, не предназначенную для несовершеннолетних <br><br> Данные получены с сайта themoviedb.org
    img(src="@/assets/img/footer-logo.svg", alt="alt")
</template>
<script>
export default {
    data() {
        return {
            links: [
                {img: 'tg.svg'},
                {img: 'v.svg'},
                {img: 'f.svg'},
                {img: 'i.svg'},
                {img: 'tk.svg'},
                {img: 'y.svg'},
                {img: 't.svg'},
                {img: 'l.svg'},
            ]
        }
    },
}
</script>
<style lang="scss">
    
</style>