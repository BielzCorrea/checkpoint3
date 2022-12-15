/* Crie uma função construtora ou Classe Aluno que tenha como atributos: 
nome (string), quantidade de faltas (number) e notas (array de números). 

Na função construtora crie o método calcularMedia que retorna a média de suas notas. 
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. 
Crie alguns alunos para testar a sua função construtora.


crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), 
faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).


Crie o método que permite adicionar alunos à lista do curso, ou seja, 
quando chamamos nosso método em nosso objeto curso, 
deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se 
ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, 
o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. 
Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.


Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos 
com os resultados se os alunos aprovaram ou não.

*/





class Aluno {
    constructor(nome, qntfaltas, notas) {
        this.nome = nome;
        this.qntfaltas = qntfaltas;
        this.notas = notas
    }

    calcularMedia() {
        let soma = 0
        this.notas.forEach(nota => {
            soma += nota

        });
        return soma / this.notas.length
    }

    faltas() {
        return this.qntfaltas += 1

    }
}



let curso = {
    nome: 'Mecanica',
    nota: 7,
    qntMaxFaltas: 5,
    listEstud: [],

    addAlunos(nome, qntfaltas, notas) {
        this.listEstud.push(new Aluno(nome, qntfaltas, notas))

    },

    mediaFinal(aluno) {
        let media = aluno.calcularMedia()
        if (media >= this.nota && aluno.qntfaltas < this.qntMaxFaltas) {
            return true
        } else if (aluno.qntfaltas === this.qntMaxFaltas && media >= this.nota * 1.1) {
            return true
        } return false

    },

    alunosAprovados() {
        return this.listEstud.map((aluno) => this.mediaFinal(aluno))

    }
}


curso.addAlunos("Gabriel", 3, [4,2,4,2]);
curso.addAlunos("André", 6, [9,8,10,8]);
curso.addAlunos("Carlos", 0, [10,9,8,9]);
curso.addAlunos("Fellipy", 1, [8,9,7,6]);

console.log(curso.listEstud);
console.log(curso.alunosAprovados());
