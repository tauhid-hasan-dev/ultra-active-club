import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleList } from '@fortawesome/free-solid-svg-icons'
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Main></Main>
      <FontAwesomeIcon icon="fa-solid fa-rectangle-list" />
      <FontAwesomeIcon icon={faRectangleList}></FontAwesomeIcon>
    </div>
  );
}

export default App;
