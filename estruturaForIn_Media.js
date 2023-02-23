let alunos = [
  { id: 1, nome: "Bruna", media: 8 },
  { id: 2, nome: "Laura", media: 7 },
  { id: 3, nome: "José", media: 5 },
  { id: 4, nome: "Guilherme", media: 4 },
  { id: 5, nome: "Rafael", media: 10 },
];

let contador = 0;

for (contador in alunos) {
  let aluno = alunos[contador];

  contador++;

  if (aluno.media <= 6) {
    continue;
  }

  console.log("Id: " + aluno.id);
  console.log("Nome: " + aluno.nome);
  console.log("Média: " + aluno.media);
  console.log("\n");
}
