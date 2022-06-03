/*function clique(){
    alert("obrigado por clicar");
    document.getElementById("teste").innerHTML = <strong>Você clicou!</strong>//inner html seta textos no html
}

*/

/**
 * usar onload no body
 * ver onmouseover
 * ver onmouseout
 * usar um campo no html adc os dois atributos acima e fazer functions para testes
 * ver onChange
 */





/*
var nome = "jaccan rousseau"//texto
var idade = '10'//texto
var idade2 = 18//numero
var idade3 = 10//numero
var lista = ["pera", "uva", "maça"];//array
var fruta = {nome:"maça", cor:"vermelha"};//um dicionario
var d = new Date();//Data atual


var fruts = [{nome:"maça", cor:"vermelha"},
{nome:"uva", cor:"roxa"}];//uma lista de dicionarios inicia com zero

alert("meu pimeiro js");//gera um pop-up
console.log(idade3+idade2);//soma entre numeros
console.log(idade+idade);//concatenacao
console.log(idade+nome);//concatenacao
console.log(nome.replace("jaccan", "joão"));//troca o atributo, em especifico jaccan, para joão
console.log(nome.toLowerCase());//troca toca as letras maiusculas para minusculas
console.log(nome.toUpperCase());//troca toca as letras minusculas para maiusculas

lista.push("goiaba");//Adc o atributo goiaba a o array
lista.pop(); //rmv o ultimo atributo do array
console.log(lista.length);//exibe o tamanho da lista
console.log(lista.reverse);//exibe a lista de modo inverso
console.log(lista.toString());//exibe a lista em strings
console.log(lista[0]);//exibe o primeiro elemento da lista
console.log(lista.toString()[0]);//exibe a primeira letra do primeiro elemento
console.log(lista.join(" - "));//muda a maneira como a lista será exiba, invés de vírgula como padrão  usará o " - " para separar os elementos
console.log(lista.join(" - "));//muda a maneira como a lista será exiba, invés de vírgula como padrão  usará o " " para separar os elementos
console.log(lista.join(" - "));//muda a maneira como a lista será exiba, invés de vírgula como padrão  usará o "" para separar os elementos
console.log(lista.join(" - "));//muda a maneira como a lista será exiba, invés de vírgula como padrão  usará o "x " para separar os elementos
console.log(lista.join(" - "));//muda a maneira como a lista será exiba, invés de vírgula como padrão  usará o " x" para separar os elementos
console.log(lista.join(" - "));//muda a maneira como a lista será exiba, invés de vírgula como padrão  usará o " x " para separar os elementos
console.log(lista.join(" - "));//muda a maneira como a lista será exiba, invés de vírgula como padrão  usará o "etc" para separar os elementos
console.log(fruta.nome);//exibe o nome da fruta
console.log(frutada[1].nome);//exibe o nome da fruta na casa 1

if(idade2 >= 18){
    alert("maior de idade")
}
else{
    alert("de menor")
};
/*
* ( condicao ) ? ação se verdadeira : ação se falsa;
* = atribuição
* == valor igual
* === valor igual e do mesmo tipo
* !=  valor diferente
* !== valores e tipos diferentes
* >
* <
* >=
* <=
* || ou
* && e
*/
/*var cont =0;
while(cont<5){
    cont++;
};//oque imprime?R: 0-1-2-3-4
alert(d.getMonth());//o get month recupera meses iniciando de zero até onze, logo para saber o mes atual é preciso add +1
alert(d.getDay());//o get day recupera o dia atual
alert(d.getHours());//o get hours recupera a hora atual
alert(d.getMinutes());//o get minutes recupera o minuto atual

/**
 * funcions*******************************************
 * **************************************************************************************************************************************** */
/*function soma(n1,n2){
    return(n1+n2);
}
var validar = 0;//global
function validaidd(idade){
    var validar;//local, dentro desta func apenas
if(idade2 >= 18){
    validar = true
}
else{
    validar = false
}
return validar;
}
console.log(validaidd(prompt("Qual a sua idade?")));
*/