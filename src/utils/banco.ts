export interface ProcessarCobrancaPixInput {
  nomeEmpresa: string;
  valorTransacao: number;
  tipoChave: string;
  ehClientePremium: boolean;
}

export class ProcessadorPix {
    public processarCobranca ({
        nomeEmpresa,
        valorTransacao, 
        tipoChave,
        ehClientePremium
    }: ProcessarCobrancaPixInput): string {
        const valorTaxa = ehClientePremium? 0.005 : 0.015
        const valorLiquido = valorTransacao + (valorTransacao * valorTaxa)
        return `[PIX GATEWAY] Empresa: ${nomeEmpresa} | Bruto: R$${valorTransacao} | Taxa: R$${valorTaxa} | Líquido Repassado: R$${valorLiquido}.`
    }
}