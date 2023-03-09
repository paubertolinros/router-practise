import './App.css';
import Home from './views/Home';
import { Routes, Route } from "react-router-dom";
import Contact from './views/Contact.jsx'
import Projects from './views/Projects.jsx'
import ErrorPage from './views/ErrorPage.jsx'
import Navbar from './components/Navbar.jsx'
import ProjectsApps from './components/ProjectsApps.jsx'
import ProjectsGames from './components/ProjectsGames.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />}>
          <Route path="/project/apps" element={<ProjectsApps />} />
          <Route path="/project/games" element={<ProjectsGames />}/>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
