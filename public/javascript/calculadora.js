let funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
      console.log('a')
        evento.preventDefault();
        let valorPorHora = parseFloat(document.getElementById('valorPorHora').value)
        let resultado = 0
        let inputs = document.querySelectorAll('.input-horas')
        inputs.forEach( input => {
          resultado += valorPorHora * parseFloat(input.value)
        })
        document.getElementById('valorTotal').value = resultado
      })
}

funcionPredeterminada()