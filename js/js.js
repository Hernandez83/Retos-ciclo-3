function mover() {
    document.getElementsByClassName('contenedor')[0].getElementsByTagName('a')[0].addEventListener('click', function(event){
        event.preventDefault();
        document.getElementsByClassName('contenedor')[1].scrollIntoView({behavior:"smooth"});
        mover();
    })
}
/* mover(); */

function cerrar() {
    document.getElementById('inisesion').style.top = '-200%';
    document.getElementById('registrar').style.top = '-200%';
}

function calcularimc(altura, peso) {
    altura = altura*0.01;
    imc = peso/(altura*altura);
    imc = imc.toFixed(1);
    return imc;
}

function menu() {
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName('icomenu')[i].addEventListener('click', function(){
            if (i == 1) {
                document.getElementsByClassName('alinear')[1].style.display = 'block';
                document.getElementsByClassName('alinear')[1].style.top = 0;
                document.getElementsByClassName('alinear')[2].style.textAlign = 'right';
            } else if(i == 3) {
                document.getElementsByClassName('alinear')[1].style.top = '-150%';
            }
        })
    }
}
menu();

document.getElementById('login').addEventListener('click', function(){
    document.getElementById('inisesion').style.top = 0;
})

document.getElementById('crearcta').addEventListener('click', function(){
    document.getElementById('registrar').style.top = 0;
})

for (let i = 0; i < 2; i++) {
    document.getElementsByClassName('cerrar')[i].addEventListener('click', function(){
        cerrar();
    })
}

function genero(i) {
    document.getElementsByClassName('generoselec')[i].getElementsByTagName('span')[0].style.background = "#353752";
    document.getElementsByClassName('generoselec')[i].getElementsByTagName('span')[0].style.color = "#ffffff";
}

function resetgenero(i) {
    if(i == 0){
        i = 1;
    }else{
        i = 0;
    }
    document.getElementsByClassName('generoselec')[i].getElementsByTagName('span')[0].style.background = "none";
    document.getElementsByClassName('generoselec')[i].getElementsByTagName('span')[0].style.color = "#353752";
}

let selecgenero;

function repetirgenero() {
    for (let i = 0; i < 2; i++) {
        document.getElementsByClassName('generoselec')[i].addEventListener('click', function(){
            selecgenero = document.getElementsByClassName('generoselec')[i].getElementsByTagName('span')[0].getAttribute('name');
            resetgenero(i);
            genero(i);
        })
    }
}
/* repetirgenero(); */


function botonenviar() {
    document.getElementById('Calcular').addEventListener('click', function(event){
        event.preventDefault();
        anos = document.getElementById('anos').value;
        altura = document.getElementById('mides').value;
        peso = document.getElementById('pesas').value;
        if (selecgenero != 'hombre' && selecgenero != 'mujer' || anos == '' || altura == '' || peso == '') {
            document.getElementsByClassName('validacion')[0].style.display = 'block';
            setTimeout(() => {
                document.getElementsByClassName('validacion')[0].style.display = 'none';
            }, 4000);
        }else{
            document.getElementsByTagName('article')[0].getElementsByClassName("resultado")[0].remove();
            calcularimc(altura, peso)
            document.getElementsByTagName('article')[0].innerHTML += `<div class="resultado">
                <h3>Tu estado actual es</h3>
                <div class="resulinter">
                    <div class="comenimc">
                        <h5>Tu IMC<br>
                            <span>` + imc + `</span>
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
            if (imc <= 19) {
                document.getElementsByClassName("resulinter")[0].style.marginLeft = "-80%";
            } else if (imc <= 24 && imc >= 19.1) {
                document.getElementsByClassName("resulinter")[0].style.marginLeft = "-40%";
                document.getElementsByClassName("comenimc")[0].style.backgroundColor = "#8bc34a";
                document.getElementsByClassName("triangulo")[0].style.borderTop = "10px solid #8bc34a";
            } else if (imc <= 38.9 && imc >= 29.1) {
                document.getElementsByClassName("resulinter")[0].style.marginLeft = "40%";
                document.getElementsByClassName("comenimc")[0].style.backgroundColor = "#ef6c00";
                document.getElementsByClassName("triangulo")[0].style.borderTop = "10px solid #ef6c00";
            } else if (imc >= 39) {
                document.getElementsByClassName("resulinter")[0].style.marginLeft = "80%";
                document.getElementsByClassName("comenimc")[0].style.backgroundColor = "#c62828";
                document.getElementsByClassName("comenimc")[0].style.width = "120px";
                document.getElementsByClassName("triangulo")[0].style.borderTop = "10px solid #c62828";    
            } else {
                document.getElementsByClassName("comenimc")[0].style.backgroundColor = "#ffa726";
                document.getElementsByClassName("triangulo")[0].style.borderTop = "10px solid #ffa726"; 
            }
            for (let i = 0; i < 5; i++) {
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
            document.getElementsByClassName('resultado')[0].scrollIntoView({behavior:"smooth"});
        }
        repetirgenero();
        botonenviar();
    })
}
/* botonenviar(); */
