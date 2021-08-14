const ternosRepetidos = (ternos) => {
  const arr = ternos.split('')
  
  let saida = 0

  let index = 1
  for(terno of arr) {
    if(terno === arr[index]) {
      saida++
    }
    
    index++
  }

  return saida
}

const entrada = 'AAACCMPP'

const saida = ternosRepetidos(entrada)
console.log(saida)