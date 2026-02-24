// Encontro 26 - JavaScript trabalhando com variáveis

// 👋uma função que exibe uma mensagem de boas-vindas

// 🛒 Uma função que calcule o subtotal de itens (receba preço e quantidade)

// 🎁 Uma função que calcule desconto (receba valor e percentual de desconto)

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

