import { expect, describe, test } from 'vitest';
import {
execucoes,
nomesTestes,
testesAprovados,
duracaoTotal,
buscarExecucao
} from './execucoes.js';

describe('Manipulação do array de execuções', () => {


test('Verificar se o array possui pelo menos 5 execuções', () => {
    expect(execucoes.length).toBeGreaterThanOrEqual(5);
});

test('Utilizar map para obter os nomes dos testes', () => {
    expect(nomesTestes).toHaveLength(5);
    expect(nomesTestes[0]).toBe('Validar login');
});

test('Utilizar filter para retornar somente os testes aprovados', () => {
    expect(testesAprovados).toHaveLength(3);
    expect(testesAprovados.every(execucao => execucao.status === 'Aprovado')).toBe(true);
});

test('Utilizar reduce para calcular a duração total dos testes', () => {
    expect(duracaoTotal).toBe(750);
});


});

describe('Buscar execução pelo ID', () => {


test('Permitir buscar uma execução com ID existente', async () => {
    const resultado = await buscarExecucao(1);

    expect(resultado.nome).toBe('Validar login');
    expect(resultado.status).toBe('Aprovado');
});

test('Lançar erro ao buscar uma execução com ID inexistente', async () => {
    await expect(buscarExecucao(10)).rejects.toThrow('Execução não encontrada');
});


});
