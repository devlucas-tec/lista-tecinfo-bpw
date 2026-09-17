import { Calculadora } from "./utils/calculadora";

const calculadora = new Calculadora();

const resultado = calculadora.gerarPedido({
  name: "Pedido 1",
  valorCalculado: { valor: 100, desconto: 10 },
});

console.log(resultado);

// Desafio 2: Calcular Frete
console.log(calculadora.calcularFrete({ distanciaKm: 10 }));

// Desafio Extra: Parcelamento
console.log(
  calculadora.calcularParcelas({
    valorTotal: 92.0,
    quantidadeParcelas: 3,
  }),
);

// Desafio 2: Resumo Completo do Pedido
console.log(
  calculadora.gerarResumoPedido({
    nomeProduto: "Produto A",
    preco: 100,
    desconto: 10,
    distancia: 10,
  }),
);
