// Função paramêtro e retorno
function somar(a: number, b: number): number {
    return a + b;
}

const resultado = somar(10, 5);
 console.log(resultado);

  // Função com paramêtro sem retorno

function mostraNome(nome: string): void {
console.log(`Olá, ${nome}`);
 }
 mostraNome("Clara");

 // Função sem paramêtro com retorno
 function pegarIdade(): number {
 return 25;
}

const idade = pegarIdade();
console.log(idade);

// Função sem paramêtro e sem retorno

function mostrarMensagem(): void {
 console.log("Olá, seja bem-vindo!");
}

mostrarMensagem();