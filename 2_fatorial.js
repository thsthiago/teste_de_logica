const fatorial = (n) => {
  const arr = [(n - 1)]

  for(let i = 2; i < n; i++) {
    arr.push(arr[arr.length - 1] - 1)
  }

  let value = n

  for(index in arr) {
    value *= arr[index]
  }

  return value

}

const entrada = 12

const saida = fatorial(entrada)
console.log(saida)