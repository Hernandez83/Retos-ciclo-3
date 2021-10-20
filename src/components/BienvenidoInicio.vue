<template>
    <div class="cajas">
            <div class="contenedor conprom">
                <img class="flotante" src="../assets/img/gorditos.png" alt="" title="">
                <h1>¿Ya tienes tu IMC?</h1>
                <h2>¡Tu índice de masa corporal adecuado!</h2>
                <a @click="bajar">Calculadora de IMC</a>
            </div>
        </div>
</template>

<script>
export default {
    name: 'BienvenidoInicio',
    methods: {
        bajar: function () {
            document.getElementsByClassName('contenedor')[1].scrollIntoView({behavior:"smooth"});
        }
    }
}
</script>