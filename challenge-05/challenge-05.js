/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [2, 5, 10, 15, 7];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg){
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arr)[1]); //5

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function doisParam(arg, n){
  return arg[n];
}

doisParam(arr, 4); //7

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = ['name', 1.250, 99, {first: 'ichi', second: 'ni', third: 'san'}, function(){return 0}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
doisParam(arr2, 0); //'name'
doisParam(arr2, 1); //1.25
doisParam(arr2, 2); //99
doisParam(arr2, 3); //{first: 'ichi', second: 'ni', third: 'san'}
doisParam(arr2, 4); //[Function]

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(livro){
  var obj = {
    'Game of Thrones': {quantidadePaginas: 592, autor: 'George R. R. Martin', editora: 'LeYa Suma'},
    'O Senhor dos Anéis': {quantidadePaginas: 1211, autor: 'J. R. R. Tolkien', editora: 'Martin Fontes'},
    'A Filha da Floresta': {quantidadePaginas: 608, autor: 'Juliet Marillier', editora: 'Butterfly'}
  }
  
  return !livro ? obj : obj[livro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Game of Thrones';
console.log("O livro " + bookName + " tem " + book(bookName).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookName = 'O Senhor dos Anéis';
console.log("O autor do livro " + bookName + " é " + book(bookName).autor  + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookName = 'A Filha da Floresta';
console.log("O livro " + bookName + " foi publicado pela editora " + book(bookName).editora + ".");
