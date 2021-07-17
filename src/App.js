import './App.css';
import Playlist from './components/playlist';
import Header from './components/header';
import data from './data/playlist';

function App() {
  return (
    <div className="App">
      <Header />
      <Playlist data={data}/>
    </div>
  );
}

export default App;
