import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './Projetos'
import EstiloGlobal, { Container } from './styles'
import temaLigth from './themes/ligth'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLigth}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
