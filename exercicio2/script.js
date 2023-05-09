const soma = (numero1, numero2) =>{

    const somatorio = numero1 + numero2

    return `Resultado da soma: ${somatorio}`

}

console.log(soma(50, 10))

//-----------------------------------------------

const comparacao = (primeiroNumero, segundoNumero) =>{

    let maiorIgual = primeiroNumero >= segundoNumero

    return maiorIgual

}

console.log(comparacao(10, 10))

//-----------------------------------------------

const numeroPar = (numero) =>{

    let resto = numero % 2 === 0

    return resto

}

console.log(numeroPar(9))

//-----------------------------------------------

const salario = (salarioBruto) =>{

    const inss = salarioBruto*0.1
    let salarioLiquido = salarioBruto - inss
    
    return salarioLiquido

}

console.log(salario(1320.00))