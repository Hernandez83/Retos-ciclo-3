<template>
    <div>
        <header>
            <HeaderPrincipal></HeaderPrincipal>
            <BienvenidoInicio v-if="tituloweb == '/'"></BienvenidoInicio>
        </header>
        <ArticleInicio v-if="tituloweb == '/'"></ArticleInicio>
        <Nosotros v-else-if="tituloweb == '/nosotros'"></Nosotros>
        <Error v-else></Error>
        <FooterInicio></FooterInicio>
    </div>
</template>

<script>
import HeaderPrincipal from '../components/HeaderPrincipal.vue';
import BienvenidoInicio from '../components/BienvenidoInicio.vue';
import ArticleInicio from '../components/ArticleInicio.vue';
import FooterInicio from '../components/FooterInicio.vue';
import Nosotros from '../components/Nosotros.vue';
import Error from '../components/404.vue';

export default {
    name: 'Home',
    components: {
        HeaderPrincipal,
        BienvenidoInicio,
        ArticleInicio,
        FooterInicio,
        Nosotros,
        Error
    },
    data() {
        return {
            tituloweb: window.location.pathname
        }
    }
}
</script>



<style>
    @import url('../assets/css/styleinicial.css');
</style>