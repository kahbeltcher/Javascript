
let produto_array = [
    { id: 1, nome: "mouse", preco: 50 },
    { id: 2, nome: "teclado", preco: 90 },
    { id: 3, nome: "monitor", preco: 350 },
    { id: 4, nome: "Fone Ouvido", preco: 400 },
];


let percentual_desconto = 10;
for ( let produto in produto_array)
{
    let nome = produto.nome;
    let preco = produto.preco;
    let valor_desconto = (preco * percentual_desconto ) / 100;
    let novo_preco = preco - valor_desconto;

    console.log("Novo valor do produto " + nome + ": R$" + novo_preco + ",00");
}