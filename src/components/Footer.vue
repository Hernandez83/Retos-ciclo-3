<template>
    <footer class="contenlight">
        <img v-for="imgs in imglogos" :key="imgs" :src=imgs.srcimg :alt=imgs.titleimg :title=imgs.titleimg />
        <div id="calen"></div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                imglogos: [{
                        srcimg: 'https://www.utp.edu.co/cms-utp/data/bin/UTP/web/uploads/media/comunicaciones/img/Logo-MisionTIC-2022.jpg',
                        titleimg: 'Mision TIC 2022'
                    },
                    {
                        srcimg: '/img/logo_negro_grupo_1_sin_fondo.png',
                        titleimg: 'Python Eye'
                    },
                    {
                        srcimg: 'https://www.unab.edu.co/sites/default/files/1-LOGO-WEB_0.png',
                        titleimg: 'Unab'
                    },
                ]
            }
        }
    }
</script>