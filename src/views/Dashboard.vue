<template>
    <div class="home">
        <Header></Header>
        <section>
            <Nav></Nav>
            <Article v-if="tituloweb == '/dashboard' "></Article>
            <Editar v-else-if="tituloweb == '/dashboard/editar'"></Editar>
            <Historial v-else-if="tituloweb == '/dashboard/historial'"></Historial>
            <Error v-else></Error>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Nav from '../components/Nav.vue';
import Editar from '../components/Editar.vue';
import Footer from '../components/Footer.vue';
import Article from '../components/Article.vue';
import Historial from '../components/Historial.vue';
import Error from '../components/404.vue';

export default {
    name: 'Home',
    components: {
        Header,
        Nav,
        Editar,
        Footer,
        Article,
        Historial,
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
    @import url('../assets/css/style.css');
</style>