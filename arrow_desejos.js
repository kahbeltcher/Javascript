const primeiroPedido = () => {
  console.log("1° Faça o oposto do meu proximo pedido");
  opostoSegundoPedido();
}
const segundoPedido = () => {
  console.log("2° Não cumpra meu terceiro pedido");
  primeiroPedido();
}
const opostoSegundoPedido = () => {
  console.log("2° [Não] cumpra meu terceiro pedido");
  terceiroPedido();
}
const terceiroPedido = () => {
  console.log("3° ignore o primeiro pedido");
  segundoPedido();
}
primeiroPedido();