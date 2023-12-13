var bouton = document.getElementById('elbouton');

bouton.addEventListener('click',exercice);

function exercice() {
var input = document.getElementById('input').value;
var div = document.getElementById('division');
var newdiv = document.createElement('div');
var insert = "";
div.innerHTML = insert;

if(input == 183){
    var insert = "bien jouer";
}
else if(input >= 20 && input <= 30){
    var insert = "non ça c'est sa bite"; 
}
else{
    var insert = "faux"
}
div.innerHTML += insert;
}

var resultat = document.getElementById('egale')
var reponse = document.getElementById("reponse")
reponse.value = 0

resultat.addEventListener('click', calcul)

function calcul(){
    var nombre1 = parseFloat (document.getElementById('nombre1').value);
    var nombre2 = parseFloat (document.getElementById('nombre2').value);
    var op = document.getElementById("add").value;

    if( op == "+" ){
        var calcresultat = nombre1 + nombre2
    }
    if(op == "-"){
        var calcresultat = nombre1 - nombre2
    }
    if( op == "/" ){
        var calcresultat = nombre1 / nombre2
    }
    if(op == "*"){
        var calcresultat = nombre1 * nombre2
    }
    reponse.value = calcresultat
}