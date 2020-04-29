function acessar(){
$('parte1').fadeOut();
document.getElementById('parte1').style.display='none';
document.getElementById('parte2').style.display='block';

document.getElementById('avancar').value="◑";
document.getElementById('avancar').setAttribute('onclick','acessar2()');
document.getElementById('voltar').setAttribute('onclick','regressar()');
}

function acessar2() {
document.getElementById('parte2').style.display='none';
document.getElementById('parte3').style.display='block'

document.getElementById('avancar').value="◕";

document.getElementById('voltar').setAttribute('onclick','regressar2()');
}


function regressar(){
document.getElementById('parte1').style.display='block';
document.getElementById('parte2').style.display='none';

document.getElementById('avancar').value="◔";
document.getElementById('avancar').setAttribute('onclick','acessar()')
}

function regressar2(){
document.getElementById('parte2').style.display='block';
document.getElementById('parte3').style.display='none';

document.getElementById('avancar').value="◑";
document.getElementById('avancar').setAttribute('onclick','acessar2()')
document.getElementById('voltar').setAttribute('onclick','regressar()');
}

function marcar(){
$("#toggle-2").attr("checked","checked");
}

function marcar2(){
$("#toggle-2").attr("checked","checked");
}

/*function timeee(){
document.getElementById('Guardador').style.position='absolute';
}

$( document ).ready(function() {
     setTimeout(timeee, 2000);
});*/

var recebe = document.getElementById('idNovo');

function troca(){
document.getElementById('idTitulo').innerHTML = recebe.value
}
