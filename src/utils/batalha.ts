export interface ProcessarTurnoInput {
    nomeAtacante: string,
    nomeDefensor: string,
    danoAtaque: number,
    defesaDefensor: number,
    ehGolpeCritico: boolean
}

export class GerenciadorBatalha {
    public processarTurno({
        nomeAtacante,
        nomeDefensor,
        danoAtaque,
        defesaDefensor, 
        ehGolpeCritico
    }: ProcessarTurnoInput): string {
        const danoCalculado = ehGolpeCritico ? danoAtaque * 2 : danoAtaque
        let tipoAtaque
        ehGolpeCritico ? tipoAtaque = '🔥 CRÍTICO!' : '⚔️ Ataque Normal' 
        const danoAplicado = Math.max(0, danoCalculado - defesaDefensor);
        return `[BATALHA] ${nomeAtacante} atacou ${nomeDefensor} ${tipoAtaque} -> Dano: ${danoAplicado}.`
    }
}