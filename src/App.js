import './App.css';
import HomePage from "./BuildingApp/HomePage"
import AboutPage from "./BuildingApp/AboutPage"
import ServicePage from "./BuildingApp/ServicePage"
import ProjectsPage from './BuildingApp/ProjectsPage'
import ContactUsPage from './BuildingApp/ContactUsPage'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/aboutPage" element={<AboutPage />} />
                <Route path="/servicePage" element={<ServicePage />} />
                <Route path="/projectsPage" element={<ProjectsPage />} />
                <Route path="/contactUsPage" element={<ContactUsPage />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
