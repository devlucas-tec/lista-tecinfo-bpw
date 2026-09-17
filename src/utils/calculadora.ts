// criar método para aplicar um desconto
// preciso de um valor de entrada e uma porcentagem de desconto

export namespace CalculadoraProps {
  export type PedidoComDesconto = {
    valor: number;
    desconto: number;
  };
  export interface GerarPedidoProps {
    name: string;
    valorCalculado: PedidoComDesconto;
  }
}

// segunda parte do exercício
// Criar AplicarDescontoInput, CalcularFreteInput, e GerarResumoPedidoInput

// Desconto
export interface AplicarDescontoInput {
  precoOriginal: number;
  porcentagemDesconto: number;
}
// Frete
export interface CalcularFreteInput {
  distanciaKm: number;
}
// Resumo Completo
export interface GerarResumoPedidoInput {
  nomeProduto: string;
  preco: number;
  desconto: number;
  distancia: number;
}

// Desafio Extra: Parcelamento

export interface CalcularParcelasInput {
  valorTotal: number;
  quantidadeParcelas: number;
}

export class Calculadora {
  private aplicarDesconto({
    valor,
    desconto,
  }: CalculadoraProps.PedidoComDesconto): number {
    const resultadoDesconto = valor - valor * (desconto / 100);
    return resultadoDesconto;
  }

  public gerarPedido({
    name,
    valorCalculado,
  }: CalculadoraProps.GerarPedidoProps): string {
    const valorFinal = this.aplicarDesconto(valorCalculado);
    return `Pedido: ${name}, Valor Final: ${valorFinal}`;
  }

  // Desafio 2: Calcular Frete
  public calcularFrete({ distanciaKm }: CalcularFreteInput): string {
    const valorFrete = distanciaKm * 2.5;
    return `Valor do frete para ${distanciaKm} km: R$${valorFrete.toFixed(2)}`;
  }

  // Desafio 2: Resumo Completo do Pedido
  // O método gerarResumoPedido deve reutilizar internamente aplicarDesconto e calcularFrete, retornando a string: '[PEDIDO] <nomeProduto> | Preço: R$ <precoFinal> | Frete: R$ <valorFrete> | Total: R$ <totalGeral>'.
    public gerarResumoPedido({
    nomeProduto,
    preco,
    desconto,
    distancia
    }: GerarResumoPedidoInput): string {
    const precoFinal = this.aplicarDesconto({ valor: preco, desconto });
    const valorFrete = this.calcularFrete({ distanciaKm: distancia });
    const totalGeral = precoFinal + parseFloat(valorFrete.split('R$')[1] ?? '0');
    return `[PEDIDO] ${nomeProduto} | Preço: R$${precoFinal.toFixed(2)} | Frete: R$${valorFrete.split('R$')[1]} | Total: R$${totalGeral.toFixed(2)}`;
  }

  // Desafio Extra: Parcelamento
  public calcularParcelas({
    valorTotal,
    quantidadeParcelas,
  }: CalcularParcelasInput): string {
    const valorParcela = valorTotal / quantidadeParcelas;
    return `Pagamento em ${quantidadeParcelas}x de R$${valorParcela.toFixed(2)} sem juros.`;
  }
}
