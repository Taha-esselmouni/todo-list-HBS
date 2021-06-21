import React, { useState } from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import Todos from './screens/Todos'

export const CredentialsContext = React.createContext()

const App = () => {
  const credentialsState = useState(null)

  return (
    <CredentialsContext.Provider value={credentialsState}>
      <Router>
        <Header />
        <main>
          <Container>
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/todos' component={Todos} />
            <Route path='/' component={HomeScreen} exact />
          </Container>
        </main>
        <Footer />
      </Router>
    </CredentialsContext.Provider>
  )
}

export default App
