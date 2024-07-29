const prompt = require('prompt-sync')();
const alunos = [];

const validarIndice = (indice) => indice >= 0 && indice < alunos.length;

const modelo = (indice = -1) => {
    const nomeAluno = prompt('Nome do aluno: ');
    const dataNascimento = parseInt(prompt('Ano de nascimento (AAAA): '), 10);
    const curso = prompt('Descrição do curso: ');
    const periodo = prompt('Qual o período: ');

    if (
        nomeAluno !== '' &&
        curso !== '' &&
        periodo !== '' &&
        !isNaN(dataNascimento) &&
        dataNascimento > 1900 &&
        dataNascimento < 2025
    ) {
        return {
            nomeAluno,
            dataNascimento,
            curso,
            periodo,
        };
    } else {
        console.log('Dados inválidos');
        return undefined;
    }
};

const criar = () => {
    const aluno = modelo();
    if (aluno !== undefined) {
        alunos.push(aluno);
        console.log('Aluno cadastrado com sucesso');
        console.log(alunos);
    }
};

// exercicio 02
const listar = () => {
    if (alunos.length === 0) {
        console.log('Nenhum aluno encontrado ');
        return false;
    } else {
        alunos.forEach((aluno, indice) => {
            console.log(`${indice + 1}.
            Nome do Aluno: ${aluno.nomeAluno}
            Ano de Nascimento:${aluno.dataNascimento}
            Curso: ${aluno.curso}
            Período: ${aluno.periodo}
        `);
        });
        return true;
    }
};

// exercicio 03

const remover = () => {
    if (!listar()) {
        return;
    }
    const indice = parseInt(prompt('Qual indice você deseja remover? '), 10) - 1;

    if (validarIndice(indice)) {
        alunos.splice(indice, 1);
        console.log('Aluno removido comsucesso');
    } else {
        console.log('Falha na remoção');
    }
};

//exercicio 04

const atualizar = () => {
    if (!listar()) {
        return;
    }

    const indice = parseInt(prompt('Qual o indice que deseja atualizar? '), 10) - 1;

    const aluno = modelo(indice);

    if (aluno !== undefined && validarIndice(indice)) {
        alunos[indice] = aluno;
        console.log('Aluno atualizado com sucesso');
    } else {
        console.log('Falha na atualização');
    }
};

const calc = function (age) {
    let now = new Date();
    let year = now.getFullYear();

    return year - age;
};

const Calcular = () => {
    let maiores = 0;
    let menores = 0;
    alunos.forEach(function (alunos) {
        if (calc(alunos.dataNascimento) >= 18) {
            maiores++;
        } else {
            menores++;
        }
    });
    console.log(`${maiores} Alunos são de maior, e ${menores} Alunos são menores de idade`);
};

module.exports = {
    criar,
    listar,
    remover,
    atualizar,
    Calcular,
};