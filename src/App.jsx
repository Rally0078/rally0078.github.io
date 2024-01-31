import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout.jsx'
import HomePage from './HomePage.jsx'
import Contacts from './Contacts.jsx'
import About from './about.jsx'
import NoPage from './NoPage.jsx'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="contact" element={<Contacts />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    
    
  );
}

export default App;
