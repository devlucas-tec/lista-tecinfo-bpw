export interface CalcularEmprestimoInput {
    tituloLivro: string
    diasPadrao: number
    ehEstudante: boolean
    diasAtrasoAnterior: number
}

export class GestorEmprestimos {

    public calcularPrazoDevolucao ({
        tituloLivro,
        diasPadrao,
        ehEstudante,
        diasAtrasoAnterior
    }: CalcularEmprestimoInput): string {
        const diasTotais = ehEstudante ? diasPadrao + 7 : diasPadrao
        const valorMulta = diasAtrasoAnterior > 0 ? diasAtrasoAnterior * 2 : 0

        return `[BIBLIOTECA] Livro: "${tituloLivro}" | Prazo Total: ${diasTotais} dias | Pendência Multa: R$ ${valorMulta}`
    }
}