import { expect, describe, test } from 'vitest'

function login(username: string, passord: string): boolean {
    return username === `clara` && passord === `12345`;
}

test(`Permitir fazer login com credenciais válidas`, () => {
    const efetuandologin = login(`clara`, `12345`)
    expect(efetuandologin).toBe(true)
});

describe(`Negar login com credenciais inválidas`, () => {

    test(`Negar login com senha incorreta`, () => {
        const efetuandologin = login(`clara`, `12347`)
        expect(efetuandologin).toBe(false)
    });

    test(`Negar login com usuário incorreto`, () => {
        const efetuandologin = login(`Ana`, `12345`)
        expect(efetuandologin).toBe(false)
    });

    test(`Negar login com senha e usuário incorretos`, () => {
        const efetuandologin = login(`Pedro`, `12362`)
        expect(efetuandologin).toBe(false)
    });

    test(`Negar login com campos vazios`, () => {
        const efetuandologin = login(``, ``)
        expect(efetuandologin).toBe(false)
    });


}) 

// rodar: npx vitest nomedoarquivo.ts

