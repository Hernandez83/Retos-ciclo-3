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

for (let i = 0; i < 2; i++) {
    document.getElementsByClassName('generoselec')[i].addEventListener('click', function(){
        selecgenero = document.getElementsByClassName('generoselec')[i].getElementsByTagName('span')[0].getAttribute('name');
        resetgenero(i);
        genero(i);
    })
}

document.getElementById('Calcular').addEventListener('click', function(event){
    event.preventDefault();
    anos = document.getElementById('anos').value;
    altura = document.getElementById('mides').value;
    peso = document.getElementById('pesas').value;
    if (selecgenero != 'hombre' && selecgenero != 'mujer' || anos == '' || altura == '' || peso == '') {
        alert('Faltan datos')
    }else{
        calcularimc(altura, peso)
        alert(imc)
    }
})