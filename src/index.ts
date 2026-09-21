import { ProcessadorPix } from "./utils/banco";
import { GerenciadorBatalha } from "./utils/batalha";
import { GestorEmprestimos } from "./utils/biblioteca";
import { Calculadora } from "./utils/calculadora";
import { CalculadoraDelivery } from "./utils/delivery";

const calculadora = new Calculadora();

const resultado = calculadora.gerarPedido({
  name: "Pedido 1",
  valorCalculado: { valor: 100, desconto: 10 },
});

console.log("===== CALCULADORA =====");
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

console.log("===== FIM CALCULADORA =====");

console.log("\n===== BATALHA =====");

const batalha = new GerenciadorBatalha();

const resumoBatalha = batalha.processarTurno({
  nomeAtacante: "Mago",
  nomeDefensor: "Tanque",
  danoAtaque: 200,
  defesaDefensor: 350,
  ehGolpeCritico: true,
});

console.log(resumoBatalha);

console.log("===== FIM BATALHA =====");

console.log("\n===== DELIVERY =====");
const delivery = new CalculadoraDelivery();
const resumoDelivery = delivery.calcularEntrega({
  distanciaKm: 100,
  valorPedido: 100,
  estaChovendo: true,
});

console.log(resumoDelivery);
console.log("===== FIM DELIVERY =====");

console.log("\n===== BANCO =====");

const banco = new ProcessadorPix();
const transacaoPix = banco.processarCobranca({
  nomeEmpresa: "Empresa X",
  valorTransacao: 1000,
  tipoChave: "chave aleatoria",
  ehClientePremium: true,
});

console.log(transacaoPix);
console.log("===== FIM BANCO =====");

console.log("\n===== BIBLIOTECA =====");
const biblioteca = new GestorEmprestimos();
const resumoBiblioteca = biblioteca.calcularPrazoDevolucao({
  tituloLivro: "O Senhor dos Anéis",
  diasPadrao: 14,
  ehEstudante: true,
  diasAtrasoAnterior: 3,
});

console.log(resumoBiblioteca);
console.log("===== FIM BIBLIOTECA =====");
