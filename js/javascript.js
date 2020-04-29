
$( document ).ready(function() {
     setTimeout(carregar, 5000);
     setTimeout(load, 100);
     setTimeout(load2,250);
     setTimeout(load3,400);
     setTimeout(load4,550);
     setTimeout(load5,750);
    setTimeout(load7,1800);
});



function carregar() {
    document.getElementById('conteiner').style.display='none';
    $('#logo2').fadeOut(190);
    $('#menu2').fadeIn(200);
    document.getElementById('logo3').style.display='block';
    document.getElementById('logo4').style.display='block';
    document.getElementById('logo5').style.display='block';
}

function load() {
}

function load2(){
document.getElementById('log2').style.display='none';
document.getElementById('log3').style.display='block';
}

function load3(){
document.getElementById('log3').style.display='none';
document.getElementById('log4').style.display='block';
}

function load4(){
document.getElementById('log4').style.display='none';
document.getElementById('log5').style.display='block';
}

function load5(){
document.getElementById('log5').style.display='none';
document.getElementById('log6').style.display='block';
}

function load7(){
document.getElementById('conteina').style.display='none';
}


function marcar(){
$("#toggle-1").attr("checked","checked");
}
