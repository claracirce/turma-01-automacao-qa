# Automação de QA - Casos de Teste

## O que foi feito

Foi criado um arquivo em TypeScript para representar casos de teste de uma aplicação.

Foi definido o tipo `CasoDeTeste`, contendo as propriedades:

* `id`: número de identificação do caso de teste;
* `titulo`: título do caso de teste;
* `descricao`: descrição do teste;
* `automatizado`: informa se o caso de teste é automatizado.

Também foram criadas as funções:

* `criarCasoDeTeste`: cria um novo caso de teste;
* `descrever`: exibe as informações do caso de teste em formato de texto;
* `marcarAutomatizado`: altera a propriedade `automatizado` para `true`.

Foram criados dois casos de teste e utilizados `console.log` para exibir os resultados no terminal.

## Como rodar

Para executar o projeto, abra o terminal na pasta do projeto e execute:

```bash
npm run dev
```

O comando executa o arquivo TypeScript responsável pelos casos de teste.

## Erro de tipo provocado

Para testar a tipagem do TypeScript, foi provocado um erro de propósito na criação do primeiro caso de teste.

O parâmetro `id` da função `criarCasoDeTeste` foi definido como `number`, porém foi passado o valor `"1"` entre aspas, que é um `string`.

Exemplo:

```typescript
criarCasoDeTeste(
    "1",
    "login com usuário válido",
    "Verificar se o usuário consegue validar login com os dados válidos",
    false
)
```

O editor identificou o erro porque um valor do tipo `string` não pode ser utilizado onde é esperado um valor do tipo `number`.

A mensagem apresentada pelo TypeScript foi:

```text
Argument of type 'string' is not assignable to parameter of type 'number'.
```

## Print do erro

O print do erro de tipo provocado foi adicionado abaixo:

**[Erro](erro.png)**


