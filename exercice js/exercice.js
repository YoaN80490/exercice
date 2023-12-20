/*
var texteAlert = prompt("je mange du chien:")

let a = 5
let b = 6
var result = a + b 
var calcul = window.alert(result)

let note_maths = 11;
let note_francais = 9;
let note_hg = 16;
let moyenne = (note_maths + note_francais + note_hg) / 3 ;
alert('La moyenne est de ' + (moyenne));

var budget = 2000
var achats = 1500

var economie = budget - achats

if(budget - achats > 0){
    window.alert( 'Le budget permet de payer les achats, il reste ' + (economie)+ '€')
}
else{
    window.alert( 'Le budget ne permet pas de payer les achats')
}

const prix = document.getElementById('dialogue')
var exercice = parseFloat(prompt('quel est le prix hors taxe de votre achat'))
var resultat = ((exercice * 20)/100)+ exercice
prix.innerHTML=('le prix est de ' + resultat + ' €')


const multiple = document.getElementById('dialogue')


for(var x = 10; x <= 1000;x+=10){
    multiple.innerHTML+=x + '<br>'

}



var age = parseInt(prompt('Quel age as tu?'))

if(age < 18){
    window.alert('tu n\'as pas 18 ans, dégage')
}
else{
    window.alert('une chaudasse a moin de 5km de chez toi')
}


const dialogue = document.getElementById('dialogue')

var codePostal = 7000

while(codePostal < 8000){
    dialogue.innerHTML += '7' + codePostal + '<br>'
    codePostal++
}


const dialogue = document.getElementById('dialogue')
for(var x = 1; x<= 10; x+=1){
    var number = 5;
    var table = number * x
    dialogue.innerHTML +=  number +'x' + x + "=" + table+  '<br>'
}


for(var x = 1; x<= 5; x+=1){

    if(x==1){
        var nombre = x * 1
        dialogue.innerHTML += nombre + '<br>'
    }
    if(x==2){
        var nombre = x * 11
        dialogue.innerHTML += nombre + '<br>'
    }
    if(x==3){
        var nombre = x * 111
        dialogue.innerHTML += nombre + '<br>'
    }
    if(x==4){
        var nombre = x * 1111
        dialogue.innerHTML += nombre + '<br>'
    }
    if(x==5){
        var nombre = x * 11111
        dialogue.innerHTML += nombre + '<br>'
    }

}
*/
var x = 0

while (x <= 20){
    dialogue.innerHTML += x +"<br>"
    x+=2
}
