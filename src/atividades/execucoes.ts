import { expect, describe, test } from 'vitest';

type ExecucaoTeste = {
  id: number;
  nome: string;
  status: string;
  duracao: number;
};

const execucoes: ExecucaoTeste[] = [
  { id: 1, nome: 'Validar login', status: 'Aprovado', duracao: 120 },
  { id: 2, nome: 'Validar cadastro', status: 'Aprovado', duracao: 150 },
  { id: 3, nome: 'Validar recuperação de senha', status: 'Reprovado', duracao: 200 },
  { id: 4, nome: 'Validar logout', status: 'Aprovado', duracao: 100 },
  { id: 5, nome: 'Validar alteração de perfil', status: 'Reprovado', duracao: 180 }
];

// Utilizando map para obter os nomes dos testes
const nomesTestes = execucoes.map(execucao => execucao.nome);

// Utilizando filter para obter os testes aprovados
const testesAprovados = execucoes.filter(
  execucao => execucao.status === 'Aprovado'
);

// Utilizando reduce para somar a duração dos testes
const duracaoTotal = execucoes.reduce(
  (total, execucao) => total + execucao.duracao,
  0
);

// Função assíncrona para buscar uma execução pelo ID
async function buscarExecucao(id: number): Promise<ExecucaoTeste> {
  // Simulando uma espera de rede
  await new Promise(resolve => setTimeout(resolve, 1000));

  const execucao = execucoes.find(execucao => execucao.id === id);

  if (!execucao) {
    throw new Error('Execução não encontrada');
  }

  return execucao;
}

export {
  execucoes,
  nomesTestes,
  testesAprovados,
  duracaoTotal,
  buscarExecucao
};