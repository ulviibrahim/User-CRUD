import './assets/style/main.scss'
import Header from './components/Header';
import { Route,Routes } from 'react-router-dom';
import ProductList from './page/ProductList';
import CreateUser from './page/CreateUser';
import Update from './page/Update';
import Info from './page/Info';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<ProductList/>} />
      <Route path='/create' element={<CreateUser/>} />
      <Route path='/update-user/:id' element={<Update/>} />
      <Route path='/info-user/:id' element={<Info/>} />
     </Routes>
    </div>
  );
}

export default App;
