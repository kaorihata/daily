import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { AuthProvider } from './contexts/AuthContext'

export default function App() {

  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <Switch >
          <Route path="/Daily/signup">
            <Signup />
          </Route>
          <Route path="/Daily/login">
            <Login />
          </Route>
          <Route path="/Daily">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}
