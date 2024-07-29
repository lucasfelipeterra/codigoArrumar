const prompt = require('prompt-sync')();
const { criar, atualizar, listar, remover, Calcular } = require('./function.js');

while (true) {
    console.log(`
1 - Adicionar Aluno
2 - Listar Alunos
3 - Remover Aluno
4 - Atualizar Aluno
5 - para sair
6 - Listar alunos de maior
\n
`);

    const opcao = Number(prompt(`Escolha uma opção acima: `));
    switch (opcao) {
        case 1:
            criar();
            break;
        case 2:
            listar();
            break;
        case 3:
            remover();
            break;
        case 4:
            atualizar();
            break;
        case 5:
            process.exit();
            break;
        case 6:
            Calcular();
            
            break;
            
        default:
            console.log(`Opção invalida`);
            break;
    }
}