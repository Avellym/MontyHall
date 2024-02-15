import PortaModel from "../models/porta";

export function criarPortas(qtde: number, premiada:number): PortaModel[]{
    const portas = Array.from({ length: qtde }, (_, i) => {
        const numero = i + 1
        const temPresente = numero === premiada
        return new PortaModel(numero, temPresente)
    })

    return portas
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[]{
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.numero === portaModificada.numero

        if(igualAModificada) {
            return portaModificada
        } else {
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}
