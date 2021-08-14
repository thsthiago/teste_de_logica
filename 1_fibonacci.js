const fibonacci = (n) => {
  
  if (n < 46) {
    const arr = [0, 1]
    let anterior = 1

    while (true) {
      anterior += arr[arr.length - 2]
      arr.push(anterior)
      
      if(arr.length === n) break
    }

    return arr.join(' ')

  } else {
    return 'O número precisa ser menor que 46'
  }

}

const entrada = 6

const saida = fibonacci(entrada)
console.log(saida)