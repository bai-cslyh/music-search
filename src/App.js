import Rroter from './router';
import { Search, Hompage} from './views'
import { Header, Nav } from './components';
import './App.scss';

function App() {
  return (
    <div className="App">
      <section className="top">
        <Header/>
        <Nav/>
      </section>
      <div className="layout"><Rroter/></div>
    </div>
  );
}

export default App;
