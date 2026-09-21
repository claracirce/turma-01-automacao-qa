import { test, expect } from 'vitest'

interface User {
    nome: string,
    idade: number,
}

function creatUser (nome: string, idade: number): User {
    return {nome, idade}
}

test(`Criar um usuário com nome e idade`, () => {
    const user = creatUser(`Alice`, 38)

    expect(user).toEqual({nome: `Alice`, idade: 38})
    expect(user.nome).toBe(`Alice`)
});