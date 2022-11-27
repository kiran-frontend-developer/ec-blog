import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App text-center m-0 border border-danger">
      <Navbar />
      <div className="content border border-secondary p-5">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
