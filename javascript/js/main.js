var nome = "jaccan rousseau"//texto
var idade = '10'//texto
var idade2 = 29//numero
var idade3 = 10//numero
var lista = ["pera", "uva", "maça"];//array

alert("meu pimeiro js");//gera um pop-up
console.log(idade3+idade2);//soma entre numeros
console.log(idade+idade);//concatenacao
console.log(idade+nome);//concatenacao
console.log(nome.replace("jaccan", "joão"));//troca o atributo, em especifico jaccan, para joão
console.log(nome.toLowerCase());//troca toca as letras maiusculas para minusculas
console.log(nome.toUpperCase());//troca toca as letras minusculas para maiusculas

lista.push("goiaba");//Adc o atributo goiaba a o array
lista.pop("goiaba");//rmv o atributo goiaba do array
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

