export interface CalcularTaxaInput {
  distanciaKm: number;
  valorPedido: number;
  estaChovendo: boolean;
}

export class CalculadoraDelivery {
  private tempoEntrega({
    distanciaKm,
    estaChovendo,
  }: Omit<CalcularTaxaInput, "valorPedido">): number {
    const contaKm = distanciaKm * 3;
    return estaChovendo ? contaKm + 15 : contaKm;
  }

  private calcularTaxa({
    distanciaKm,
    valorPedido,
    estaChovendo,
  }: CalcularTaxaInput): number {
    const taxaPadrao = valorPedido >= 150 ? 0 : distanciaKm * 3;
    return estaChovendo ? taxaPadrao + 5 : taxaPadrao;
  }

  public calcularEntrega({
    distanciaKm,
    valorPedido,
    estaChovendo,
  }: CalcularTaxaInput): string {
    const taxa = this.calcularTaxa({ distanciaKm, valorPedido, estaChovendo });
    const tempoMinutos = this.tempoEntrega({ distanciaKm, estaChovendo });

    const taxaFinal = taxa + valorPedido

    return `[DELIVERY] Taxa: R$ ${taxaFinal} | Tempo Estimado: ${tempoMinutos} min`;
  }
}
