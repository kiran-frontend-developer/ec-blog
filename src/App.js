import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App text-center m-0 border border-danger">
      <Navbar />
      <div className="content border border-secondary p-5">
        <Home />
      </div>
    </div>
  );
}

export default App;
