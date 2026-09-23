import { title } from "node:process";

interface Postagem {
    title: string;
    body: string;
}

// GET: Buscar postagem
async function buscarPostagem(id: number): Promise<Postagem> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    console.log('STATUS:');
    console.log(res.status);

    const resGet = await res.json() as Postagem;
    return resGet;
}

// POST: Criar uma nova postagem
async function criarPostagem(): Promise<Postagem> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Minha primeira postagem',
                body: 'Aqui existe uma descrição',
                userId: 1
            }),
        }
    );

    console.log('STATUS:');
    console.log(res.status);

    const resPost = await res.json() as Postagem;
    return resPost;
}

// PUT: Atualizar uma postagem completamente
async function atualizarPostagemCompleta(id: number): Promise<Postagem> {

    const corpoEnviado = {
        title: 'Atualização da minha primeira postagem',
        body: 'Aqui tem uma nova descrição',
        userId: 2
    };

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(corpoEnviado),
        }
    );

    console.log('CORPO ENVIADO:');
    console.log(corpoEnviado);

    console.log('STATUS:');
    console.log(res.status);

    console.log('CORPO RECEBIDO:');

    const resPut = await res.json() as Postagem;

    return resPut;
}

// DELETE: Deletar postagem
async function deletar(id: number): Promise<void> {

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            method: 'DELETE'
        }
    );

    console.log('STATUS:');
    console.log(res.status);
}

// Testes

// const post = await criarPostagem();
// console.log(post);

// const get = await buscarPostagem(1);
// console.log(get);
// console.log(get.title);

// const put = await atualizarPostagemCompleta(1);
// console.log(put);

//deletar(77);

async function atualizarCampo(id: number): Promise<Postagem> {
    const corpoEnviado = {
        title: 'Novo título'

    }

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'

            },
            body: JSON.stringify(corpoEnviado)
        });
         console.log('Corpo Enviado:');
        console.log(corpoEnviado);

         console.log('STATUS:');
        console.log(res.status);

         console.log('Corpo Recebido:');
        

        const resPatch = await res.json() as Promise<Postagem>;
        return resPatch
}
const patch = await atualizarCampo(56);
console.log(patch.title);