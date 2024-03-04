const carro = {
    cor: 'Amaralo',
    marca: 'Nissao',
    modelo: 'Kicos',
    ano: 2024
}

const carroDesejado = {
    portas: 4,
    cor: 'prata',
    mecanica: {
        motorizacao: [
            2.0,
            'turbo',
            '140 cv'
        ]
    },
    tetoSolar: true
}

const carroAVenda = {
    portas: 4,
    cor: 'preto',
    mecanica: {
        motorizacao: [
            1.0, 
            'aspirado',
            '60 cv'
        ]
    },
    tetoSolar: false,
    cambio: 'manual'
}

const carroOlx = {
    portas: 4,
    cor: 'prata',
    mecanica: {
        motorizacao: [
            2.0,
            'turbo',
            '140 cv'
        ],
        cambio: 'automatico',
        tracao: '4x4'
    },
    tetoSolar: true,
    ano: 2022,
    wifi: true,
    assistenteDeEstacionamento: true,
    centralMultimidia: true,
}


                                                                                                                        
test('Caracteristica do carro desejado', () => {    
    expect(carroOlx.portas).toContain('prata')
})