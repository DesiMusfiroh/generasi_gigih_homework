import './App.css';
import Playlist from './pages/Playlist';
import data from './data/Data';

function App() {
  return (
    <div className="App">
       <Playlist data={data}/>
    </div>
  );
}

export default App;
