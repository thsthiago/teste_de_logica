const fabricaFitas = (fita, texto) => {

  let repetiu = 0
  let saida = 0
  while(true) {
    repetiu += texto.length
    saida++
    
    if(repetiu > fita) break
  }

  return saida - 1
}

const entradas = [
  20,
  'Fashion'
]

const saida = fabricaFitas(...entradas)
console.log(saida)