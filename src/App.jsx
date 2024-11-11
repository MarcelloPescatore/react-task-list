import './App.css'
// importiamo le componenti
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

function App() {
  // const message = "welcome to my react app"

  return (
    <>
      {/* {message} */}
      <AppHeader />
      <AppMain />
      <AppFooter />
    </>
  )
}

export default App
