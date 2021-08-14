const encontrandoEmail = (n, palavra, ...rest) => {
  const saidas = []
  const regex = new RegExp(palavra, 'gi')
  rest.forEach((frase) => {
    if(frase.search(regex) !== -1) {
      saidas.push(frase)
    }
  })

  for(index of saidas) {
    console.log(index)
  }
}

const entradas = [
  6,
  'bug',
  'Minha impressora esta pegando fogo',
  'tem um inseto no meu pc',
  'o site ta piscando #medo',
  'tem um bug no formulario',
  'o sistema esta bugado',
  'como faz um for em java?',
  'Ja resolveu o Bug do Aplicativo?',
]

const saida = encontrandoEmail(...entradas)