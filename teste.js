// 2- Fibonacci 

function fibonacciSequence(n) {
    let fibonatti = [0, 1]

    while (fibonatti[fibonatti.length - 1] < n ) {
        fibonatti.push(fibonatti[fibonatti.length - 1] + fibonatti[fibonatti.length - 2])
    }

    if (fibonatti.includes(n)) {
        return `O número ${n}, pertence a sequência Fibonacci!`
    } else {
        return `O número ${n}, não pertence a sequência Fibonacci!`
    }
}

console.log(fibonacciSequence(10))
console.log(fibonacciSequence(200))
console.log(fibonacciSequence(34))


//5 - Inverter string
function reverseString(string) {
    let wordReverse = ''

    for(let i = string.length - 1; i >= 0; i--) {
        wordReverse += string[i]
    }

    return `A palavra invertida é ${wordReverse}`


}

console.log(reverseString('brasileiro'))
console.log(reverseString('caminhão'))
console.log(reverseString('futebol'))