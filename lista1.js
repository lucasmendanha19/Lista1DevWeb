// Questão 1
function calcula(){
var x, y, soma, multiplica, divide, resto;
x = document.getElementById("x").value;
y = document.getElementById("y").value;

soma = (parseInt(x) + parseInt(y));
multiplica = (parseInt(x) * parseInt(y));
divide = (parseInt(x) / parseInt(y));
resto = (parseInt(x) % parseInt(y));

document.getElementById("soma").innerHTML = soma;
document.getElementById("multiplica").innerHTML = multiplica;
document.getElementById("divide").innerHTML = divide;
document.getElementById("resto").innerHTML = resto;

document.getElementById("op1").innerHTML = x + " + " + y;
document.getElementById("op2").innerHTML = x + " * " + y;
document.getElementById("op3").innerHTML = x + " / " + y;
document.getElementById("op4").innerHTML = x + " % " + y;

}

// Questão 2
function trocaCor(){
var hora = new Date().getHours();
if (hora >= 6 & hora < 12){
    document.bgColor = "white";
    document.fgColor = "black";
}
else if (hora >= 12 & hora < 18){
    document.bgColor = "yellow";
    document.fgColor = "black";
}
else if (hora >= 18 & hora < 24){
    document.bgColor = "pink";
    document.fgColor = "white";
 }
else if (hora >= 00 & hora < 6){
    document.bgColor = "blue";
    document.fgColor = "white";
}

}



// Questão 5
function salario(){
    var salarioAtual = prompt("Informe seu salário atual:");
   
    if (salarioAtual <= 280){
        valorReajuste = (parseFloat(salarioAtual)* 0.2);
        salarioAumentado = (parseFloat(salarioAtual) + valorReajuste);
        bonus = "20%";
    }

    else if (salarioAtual > 280 && salarioAtual < 700){
        valorReajuste = (parseFloat(salarioAtual)* 0.15);
        salarioAumentado = (parseFloat(salarioAtual) + valorReajuste);
        bonus = "15%";
    }

    else if (salarioAtual > 700 && salarioAtual < 1500){
        valorReajuste = (parseFloat(salarioAtual)* 0.1);
        salarioAumentado = (parseFloat(salarioAtual) + valorReajuste );
        bonus = "10%";
    }

    else if (salarioAtual >= 1500){
        valorReajuste = (parseFloat(salarioAtual)* 0.05);
        salarioAumentado = (parseFloat(salarioAtual) + valorReajuste);
        bonus = "5%";
    }
    document.writeln("Salario sem reajuste:" + salarioAtual, "<br>");
    document.writeln("Percentual aumentado:" + bonus, "<br>");
    document.writeln("Valor do reajuste:" + valorReajuste, "<br>");
    document.writeln("Salario com ajuste:" + salarioAumentado, "<br>");
    
}