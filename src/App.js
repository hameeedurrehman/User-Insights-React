import FetchData from './components/FetchData'
import './App.css';
import { Routes, Route  } from 'react-router-dom';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<FetchData/>}/>
        <Route path='/user/:userId' element= {<UserDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
