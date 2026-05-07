// Aqui você vai aprender JavaScript :D

/*Primeiros comandos */
console.log()/*Comando básico para gerar algo no código[texto/número]*/

// = Serve para fazer um Título principal para um tema específico de relevância
// /* */ = Serve para adicionar comentários no código[anotações]

//Dados fundamentais:
/*
Number = Números
Bigint = Inteiro
String = Texto
Boolean = Verdadeiro/Falso [true/false]
Null = Nulo
Undefined = Indefinido
Symbol = Símbolo
Object = Objeto
*/
 // Operadores Matemáticos
/* 
1.Adição +
2.Subtração -
3.Multiplicação *
4.Divisão /
5.Porcentagem %
 // Operadores de Comparação (Boolean)
6.Maior que >
7.Menor que <
8.Igual ou maior que >=
9.Menor ou igual que <=
10.Igual a ===
11.Não é igual a !==
 //Operadores Lógicos (Boolean)
12. E && = serve para adicionar outra razão junto a anterior que diz se é verdadeiro ou falso(Representação de conjunção)
Exemplo:
console.log(5>1 && 3==3)
Resposta= True 
13. Ou || (Usado também para quando um não for verdadeiro, o outro seja)
14. Não ! (Pode transformar verdadeiro em falso ou o contrario dele)
15. Se ?  (Pode ser usado para trocar o if e o else de jeito que seja mais simples de se fazer)*/
// Exemplo Símbolo 15
let Cor= "Azul"
Cor ? console.log("Azul") : console.log("Verde")
/*Como a variavel é verdadeira, o primeiro comando vai ser selecionado(=Azul), isso porque o primeiro serve como true e o segundo como false. 
Mas se adicionado o ! na variavel(tranformar o verdadeiro para o falso), o segundo vai ser selecionado(=Verde)*/
// Segundo Exemplo 15
let tinta= true
tinta ? console.log("Vermelho") : console.log("Amarelo")
/*Acontece o mesmo como o primeiro exemplo (=Vermelho), mas oque muda é que você já declara a razão da variável nela mesma*/


/*----------------------------------------------------------------------------------------------------------*/
// Comandos Multifuncionais
/*
typeof = É uma forma de verificação para qual seja o tipo da váriavel que ela é
Exemplo: */
var hambúrguer = "Carne"
console.log(typeof hambúrguer)
/*Segundo exemplo*/
var código = 47290
console.log(typeof código)






/*----------------------------------------------------------------------------------------------------------*/
// Comandos Matemáticos








/*----------------------------------------------------------------------------------------------------------*/
// Comandos String
/*
.toUpperCase() = Deixa as letras maiúsculas.
 Exemplo: */
console.log("Plantas".toUpperCase())

/*
.length = Mede o número de caractéres da frase.
Exemplo: */
console.log("Suco de laranja".length)

/*
.trim() = Remove espaços restantes da frase.
Exemplo:*/
console.log("        Água é vida".trim())





/*-----------------------------------------------------------------------------------------------------------*/
// Comandos Boolean
/* 
if(){} e else{}= if = onde se afirma que se algo Por aquilo que não foi esperado ou aceito, que faça outra função por ele, 
else = quando não conseguir a resposta, esse comando será como segunda mão para quando não houver(false) como ser colocado.
Exemplo: */
if(true){
    console.log("Essa mensagem será enviada")
}

/* Segundo Exemplo else: */
let produto = true
if (produto = false){
console.log('Está mensagem pode ser bloqueada')
}
else {
console.log('Está mensagem não está bloqueada')
}
/* Resposta: Está mensagem não está bloqueada
Isso porque no if na variável é falsa, então como ela não pode escrever algo verdadeiro, optou pela segunda mão */


/*                                              Operação ternária                                                      */
// É a simplificação do if e else.

let caderno = "escrito" 
caderno === "escrito" ? console.log("Há algo escrito"): console.log("Há algo a se escrever")
//Se nada for colocado é porque há algo a se escrever no caderno



/*                                                   Switch                                                            */
/*switch= É como o if e else, só que de forma com que seja mais facil ler e entender */


//Primeira utilização de Switch
let athleteFinalPosition = 'first place';
//Declaracao da switch na variável
switch (athleteFinalPosition){
  case ('first place'): /*Adiciona um caso na switch como uma verificação */
  console.log('You get the gold medal!')
  break // Termina o caso
  case ('second place'):
  console.log('You get the silver medal!')
  break
  case ('third place'):
  console.log('You get the bronze medal!')
  break
  default: /*O default diz que se não houver nenhuma resposta igual ao que diz na variável,
  dizer oque deve fazer quando não lhe for respondido[É a mesma coisa do else no if]*/
    console.log('No medal awarded.')
  break
}



/*-------------------------------------------------------------------------------------------------------*/
// Matemática







/*----------------------------------------------------------------------------------------------------------*/
// String







/*----------------------------------------------------------------------------------------------------------*/


