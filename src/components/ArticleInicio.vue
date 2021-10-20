<template>
    <article>
            <div class="contenedor">
                <h3 id="h3">Calculadora de IMC</h3>
                <form>
                    <ul>
                        <li>
                            <div class="circulos">1</div>
                            <h4>¿Cuál es tu género?</h4>
                            <div class="genero">
                                <div class="generoselec" @click="genero(0)">
                                    <img src="../assets/img/machos.svg" alt="" title="">
                                    <span name="hombre">Hombre</span>
                                </div>
                                <div class="generoselec" @click="genero(1)">
                                    <img src="../assets/img/hembra.svg" alt="" title="">
                                    <span name="mujer">Mujer</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="circulos">2</div>
                            <h4>¿Cuántos años tienes?</h4>
                            <input type="number" id="anos" name="cuantos_años" required placeholder="21">
                            <label for="años">años</label>
                        </li><br>
                        <li>
                            <div class="circulos">3</div>
                            <h4>¿Cuánto mides?</h4>
                            <input type="number" id="mides" name="cuanto_mides" required placeholder="170">
                            <label for="mides">cm</label>
                        </li>
                        <li>
                            <div class="circulos">4</div>
                            <h4>¿Cuánto pesas?</h4>
                            <input type="number" id="pesas" name="cuanto_pesas" required placeholder="69">
                            <label for="pesas">kg</label>
                        </li>
                        <p class="validacion">Todos los campos son obligatorios</p>
                        <button id="Calcular" @click="calcular">Calcular</button>
                    </ul>
                </form>
            </div>
            <div class="resultado"></div>
    </article>
</template>

<script>
export default {
    name: 'ArticleInicio',
    data() {
        return {
            selecgenero: '',
            anos: '',
            altura: '',
            peso: '',
            imc: ''
        }
    },
    methods: {
        genero: function (i) {
            this.selecgenero = document.getElementsByClassName('generoselec')[i].getElementsByTagName('span')[0].getAttribute('name');
            document.getElementsByClassName('generoselec')[i].getElementsByTagName('span')[0].style.background = "#353752";
            document.getElementsByClassName('generoselec')[i].getElementsByTagName('span')[0].style.color = "#ffffff";
            if(i == 0){
                i = 1;
            }else{
                i = 0;
            }
            document.getElementsByClassName('generoselec')[i].getElementsByTagName('span')[0].style.background = "none";
            document.getElementsByClassName('generoselec')[i].getElementsByTagName('span')[0].style.color = "#353752";
            if (i == 3) {
                document.getElementsByClassName('generoselec')[1].getElementsByTagName('span')[0].style.background = "none";
                document.getElementsByClassName('generoselec')[0].getElementsByTagName('span')[0].style.background = "none";
            }
        },
        calcular: function () {
            event.preventDefault();
            this.anos = document.getElementById('anos').value;
            this.altura = document.getElementById('mides').value;
            this.peso = document.getElementById('pesas').value;
            if (this.selecgenero != 'hombre' && this.selecgenero != 'mujer' || this.anos == '' || this.altura == '' || this.peso == '') {
                document.getElementsByClassName('validacion')[0].style.display = 'block';
                setTimeout(() => {
                    document.getElementsByClassName('validacion')[0].style.display = 'none';
                }, 4000);
            }else{
                /* document.getElementsByTagName('article')[0].getElementsByClassName("resultado")[0].remove(); */
                /* calcularimc(altura, peso) */
                this.altura = this.altura*0.01;
                this.imc = this.peso/(this.altura*this.altura);
                this.imc = this.imc.toFixed(1);
                document.getElementsByTagName('article')[0].getElementsByClassName('resultado')[0].innerHTML += `<div class="resultado">
                    <h3>Tu estado actual es</h3>
                    <div class="resulinter">
                        <div class="comenimc">
                            <h5>Tu IMC<br>
                                <span>` + this.imc + `</span>
                            </h5>
                            <div class="triangulo"></div>
                        </div>
                    </div>
                    <div class="resulinter">
                        <div>
                            <h6>bajo peso<br>
                                <span>0,0 - 19,0</span
                            ></h6>
                        </div>
                        <div>
                            <h6>peso normal<br>
                                <span>19,1 - 24,0</span>
                            </h6>
                        </div>
                        <div>
                            <h6>sobrepeso<br>
                                <span>24,1 - 29,0</span>
                            </h6>
                        </div>
                        <div>
                            <h6>obesidad<br>
                                <span>29,1 - 38,9</span>
                            </h6>
                        </div>
                        <div>
                            <h6>obesidad mórbida<br>
                                <span>39,0 +</span>
                            </h6>
                        </div>
                    </div>
                    <div class="resulinter">
                        <div>54,9 kg</div>
                        <div>69,4 kg</div>
                        <div>83,8 kg</div>
                        <div>112,7 kg</div>
                    </div>
                </div>`;
                if (this.imc <= 19) {
                    document.getElementsByClassName("resulinter")[0].style.marginLeft = "-80%";
                } else if (this.imc <= 24 && this.imc >= 19.1) {
                    document.getElementsByClassName("resulinter")[0].style.marginLeft = "-40%";
                    document.getElementsByClassName("comenimc")[0].style.backgroundColor = "#8bc34a";
                    document.getElementsByClassName("triangulo")[0].style.borderTop = "10px solid #8bc34a";
                } else if (this.imc <= 38.9 && this.imc >= 29.1) {
                    document.getElementsByClassName("resulinter")[0].style.marginLeft = "40%";
                    document.getElementsByClassName("comenimc")[0].style.backgroundColor = "#ef6c00";
                    document.getElementsByClassName("triangulo")[0].style.borderTop = "10px solid #ef6c00";
                } else if (this.imc >= 39) {
                    document.getElementsByClassName("resulinter")[0].style.marginLeft = "80%";
                    document.getElementsByClassName("comenimc")[0].style.backgroundColor = "#c62828";
                    document.getElementsByClassName("comenimc")[0].style.width = "120px";
                    document.getElementsByClassName("triangulo")[0].style.borderTop = "10px solid #c62828";    
                } else {
                    document.getElementsByClassName("comenimc")[0].style.backgroundColor = "#ffa726";
                    document.getElementsByClassName("triangulo")[0].style.borderTop = "10px solid #ffa726"; 
                }
                for (let i = 0; i < 5; i++) {
                    let a;
                    if (i == 0) {
                        a ='#ffb300';
                    } else if (i == 1) {
                        a ='#8bc34a';
                    } else if (i == 2) {
                        a ='#ffa726';
                    } else if (i == 3) {
                        a = '#ef6c00';
                    } else {
                        a = '#c62828';
                    }
                    document.getElementsByClassName('resulinter')[1].getElementsByTagName('div')[i].style.borderBottom = 'solid 8px ' + a;
                }
                document.getElementsByClassName("contenedor")[1].style.display = "none"
                document.getElementsByClassName('resultado')[0].scrollIntoView({behavior:"smooth"});
            }
        }
    }
}
</script>