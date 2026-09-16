// function somar(a: number, b: number): number {
   // return a + b;
//}

//const resultado = somar(10, 5);
// console.log(resultado);

// função com paramêtro e retorno

// function mostraNome(nome: string): void {
   // console.log(`Olá, ${nome}`);
// }
// mostraNome("Clara");

// function pegarIdade(): number {
  // return 25;
// }

// const idade = pegarIdade();
// console.log(idade);

//function mostrarMensagem(): void {
 //  console.log("Olá, seja bem-vindo!");
//}

// mostrarMensagem();

type Pessoa = {nome: string; idade: number};

function criarPessoa(nome:string, idade:number): Pessoa {
   return{nome: nome, idade: idade};
}

const p = criarPessoa("Clara", 26);
console.log(p);
