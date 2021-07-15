import './App.css';
import Playlist from './components/playlist';
import data from './data/Data';

function App() {
  return (
    <div className="App">
       <Playlist data={data}/>
    </div>
  );
}

export default App;
