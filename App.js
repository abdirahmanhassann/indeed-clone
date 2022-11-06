
import {BrowserRouter as Router ,Route,Routes,Link}from 'react-router-dom'
import './App.css';
import Searched from './searched';
import Notfound from './Notfound';
import Home from './Home';
function App() 
{
 return (
   <>
<Router>
   <Routes>
   <Route  path='/' element={<Home />}exact>
      </Route>
 <Route  path= '/searched' element={<Searched /> }exact>
</Route>
<Route path='*' element={<Notfound/>}/>
</Routes>
</Router>
   </>
  );
}
export default App;
