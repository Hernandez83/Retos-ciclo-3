<template>
    <article>
        <div class="contendash">
            <div class="contenlight">
                <div id="top_x_div" style="width: auto; height: 400px;"></div><br><br>
                <table id="tabla">
                    <thead>
                        <tr>
                            <th>Año</th>
                            <th>Mes</th>
                            <th>IMC</th>
                            <th>Clasificación</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(n, index) in datosimc" :key="index">
                            <td>{{ n.ano }}</td>
                            <td>{{ n.mes }}</td>
                            <td>{{ n.imc }}</td>
                            <td>{{ n.clasificacion }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            datosimc: [
                {
                    ano: '2021',
                    mes: 'Marzo',
                    imc: 21.3,
                    clasificacion: 'Normal'
                },
                {
                    ano: '2021',
                    mes: 'Abril',
                    imc: 22.7,
                    clasificacion: 'Normal'
                },
                {
                    ano: '2021',
                    mes: 'Mayo',
                    imc: 24.1,
                    clasificacion: 'Sobrepeso'
                },
                {
                    ano: '2021',
                    mes: 'Junio',
                    imc: 23,
                    clasificacion: 'Normal'
                },
                {
                    ano: '2021',
                    mes: 'Julio',
                    imc: 23.5,
                    clasificacion: 'Normal'
                },
                {
                    ano: '2021',
                    mes: 'Agosto',
                    imc: 24.6,
                    clasificacion: 'Sobrepeso'
                },
                {
                    ano: '2021',
                    mes: 'Septiembre',
                    imc: 23,
                    clasificacion: 'Normal'
                },
                {
                    ano: '2021',
                    mes: 'Octubre',
                    imc: 23,
                    clasificacion: 'Normal'
                },
            ]
        }
    },
    mounted() {
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://www.gstatic.com/charts/loader.js')
        document.head.appendChild(recaptchaScript)

        let scriptlocal = document.createElement('script')
        scriptlocal.setAttribute('src', '/js/charts.js')
        document.body.appendChild(scriptlocal)
    },
    methods: {
        funtionvue: function () {
            alert('Funciona desde el script')
        }
    },
}
</script>

<style scoped>
    article {
        margin: 0 auto;
    }

    #tabla {
        border-collapse: collapse;
        align-content: center;
        overflow: scroll;
        font-family: "Roboto", sans-serif;
        text-align: center;
        max-height: 20px;
        margin-left: auto;
        margin-right: auto;
    }

    th,
    td {
        border: solid 2px rgb(117, 108, 108);
        padding: 0.5em 2em;
    }

    th {
        background-color: orange;
        color: whitesmoke;
    }

    tr:nth-child(even) {
        background-color: #eee;
    }

    tr:hover {
        background-color: #aaa;
        cursor: pointer;

    }

    @media screen and (max-width: 550px){
        th, td {
            padding: 0.5em 0.5em;
        }
    }
</style>