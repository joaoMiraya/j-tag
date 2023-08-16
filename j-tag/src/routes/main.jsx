import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App.jsx'
import Home from '../components/pages/Home/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<Home />} />

      </Route>
    </Routes>
  </BrowserRouter>

)
