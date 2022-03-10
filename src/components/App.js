import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './ui/Theme'
import Header from '../components/ui/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header /> 
        <Switch>
          <Route exact path='/' component={() => <div>Home</div>} />
          <Route exact path='/technologies' component={() => <div>Technologies</div>} />
          <Route exact path='/portfolio' component={() => <div>Portfolio</div>} />
          <Route exact path='/about' component={() => <div>About</div>} />
          <Route exact path='/contact' component={() => <div>Contact</div>} />
          <Route exact path='/estimate' component={() => <div>Estimate</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
