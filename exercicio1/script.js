//function nome(saudacao){

//    const primeiroNome = 'Luciano'
//    console.log(`Olá ${primeiroNome}!`)

//} 

//nome('Luciano')

//-----------------------------------------------

const nome = (saudacao) =>{
    const primeiroNome = 'Luciano'

    return `Olá ${primeiroNome}!`

}

console.log(nome('Luciano'))

//-----------------------------------------------

// function calcular(multiplicado, multiplcador){

//     let tabuada = multiplicado * multiplcador

//     console.log(tabuada)

// }

// calcular(5,1)
// calcular(5,2)
// calcular(5,3)
// calcular(5,4)
// calcular(5,5)
// calcular(5,6)
// calcular(5,7)
// calcular(5,8)
// calcular(5,9)
// calcular(5,10)

//-----------------------------------------------

const calcular = (multiplicado) =>{

    const numero = multiplicado

    return `1= ${multiplicado*1} / 2= ${multiplicado*2} / 3= ${multiplicado*3} / 4= ${multiplicado*4} / 5= ${multiplicado*5}
     / 6= ${multiplicado*6} / 7= ${multiplicado*7} / 8= ${multiplicado*8} / 9= ${multiplicado*9} / 10= ${multiplicado*10}`

}

console.log(calcular(5))
