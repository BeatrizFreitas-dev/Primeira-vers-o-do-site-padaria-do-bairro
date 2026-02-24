// Encontro 26 - JavaScript trabalhando com variáveis

// 👋uma função que exibe uma mensagem de boas-vindas


// 🛒 Uma função que calcule o subtotal de itens (receba preço e quantidade)
   function calcularSubTotal(preco, quantidade) {
    return preco * quantidade
}
 
let resultado = calcularSubTotal (50, 3);
console.log(resultado);

// 🎁 Uma função que calcule desconto (receba valor e percentual de desconto)
  function calcularDesconto(valor, percentual){
    return valor - (valor * percentual / 100)
}
 
let desconto = calcularDesconto(200, 100);
console.log(desconto);

// 💸Uma função que calcule a taxa de entrega baseada na distância 

function calcularTaxaEntrega(distancia){
    if (distancia <= 5) {
        console.log("A sua entrega è gratuita")
    } else if(distancia <= 10){
        console.log("Sua entrega custa R$:15,00")
    } else {
        console.log("Sua taxa de entrega è de R$: 20,00")
    }
}
  calcularTaxaEntrega(20);

  // função tradicional
  function calcularPreco(preco, produto){
    return preco*produto;
  }

  // função tradicional
function calcularPreco(preco, produto){
    return preco * produto;
}
 

// arrow function () => {}
const calcularPrecos = (preco, produto) => preco * produto;
