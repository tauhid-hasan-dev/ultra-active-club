import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleList } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <h1>This is my first commit</h1>
      <FontAwesomeIcon icon="fa-solid fa-rectangle-list" />
      <FontAwesomeIcon icon={faRectangleList}></FontAwesomeIcon>
    </div>
  );
}

export default App;
