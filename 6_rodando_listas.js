const rodandoListas = (primeiraLinha, segundaLinha) => {
  const [ tamanho, rotacoes ] = primeiraLinha.split(' ')
  const arr = segundaLinha.split(' ')

  for(let i = 1; i <= rotacoes; i++) {
    let elemento = arr.shift()
    arr.push(elemento)
  }

  return arr.join(' ')
}

let entradas = [
 '5 4',
 '1 2 3 4 5'
]

const saida = rodandoListas(...entradas)
console.log(saida)