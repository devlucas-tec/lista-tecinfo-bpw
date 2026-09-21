export interface AvaliarEstoqueInput {
  nomeProduto: string;
  quantidadeAtual: number;
  estoqueMinimo: number;
  tamanhoLote: number;
}

export class GestorEsroque {
    public avaliarNecessidadeReposicao ({
        nomeProduto,
        quantidadeAtual,
        estoqueMinimo,
        tamanhoLote
    }: AvaliarEstoqueInput): string {
        const quantidadeLotes = quantidadeAtual > estoqueMinimo ? "ESTOQUE OK": `${(estoqueMinimo *2) - quantidadeAtual} lote(s)`

        return `[ESTOQUE ALERTA] Produto: ${nomeProduto} | Atual: ${quantidadeAtual} | Sugestão de Compra: ${quantidadeLotes} Produto: ${nomeProduto} | Nível seguro (${quantidadeAtual} un)`
    }
}