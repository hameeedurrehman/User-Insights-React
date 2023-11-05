import FetchData from './components/FetchData'
import './App.css';
import { Routes, Route  } from 'react-router-dom';
import UserDetails from './components/UserDetails';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<Main/>}/>
        <Route path='/posts' element= {<FetchData/>}/>
        <Route path='/user/:userId' element= {<UserDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
