type CasoDeTeste = {
    id: number;
    titulo: string;
    descricao: string;
    automatizado: boolean;

} // criando o tipo

function criarCasoDeTeste (
    id: number,
    titulo: string,
    descricao: string,
    automatizado: boolean,
): CasoDeTeste {
    return {
        id,
        titulo,
        descricao,
        automatizado
    }
} // criando funçao com 4 parametros que vai retornsr CasoDeTeste

function descrever(caso: CasoDeTeste): string {
    return `Id: ${caso.id} - Título: ${caso.titulo} - Descricão: ${caso.descricao} - Automatizado: ${caso.automatizado}`

} // funçao descrever

function marcarAutomatizado(caso: CasoDeTeste): CasoDeTeste {
    caso.automatizado = true
    return caso
} // funçao marcarAutomatizado

const primeiroCasoDeTeste = criarCasoDeTeste (
    1,
    "login com usuário válido",
    "Verificar se o usuário consegue validar login com os dados válidos",
    false
)

const segundoCasoDeTeste = criarCasoDeTeste (
    2,
    "login com senha inválida",
    "Verificar se o sistema impede o login com senha inválida",
    false
)

console.log(descrever(primeiroCasoDeTeste))
console.log(descrever(segundoCasoDeTeste))

const casoAutomatizado = marcarAutomatizado(primeiroCasoDeTeste)

console.log(descrever(casoAutomatizado))
console.log("TESTE FUNCIONANDO");
