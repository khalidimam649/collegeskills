// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './Pages/Contact';
import SoftSkills from './Pages/SoftSkills';
import CorporateTraining from './Pages/CorporateTraining';
import B2BOutsourcing from './Pages/B2BOutsourcing';
import CourseForColleges from './Pages/CourseForColleges';
import CourseForCorprates from './Pages/CourseForCorprates';
import Testimonial from './Pages/Testimonial';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/soft-skills" element={<SoftSkills />} />
        <Route path="/services/corporate-training" element={<CorporateTraining />} />
        <Route path="/services/b2b" element={<B2BOutsourcing />} />
        <Route path="/courses/for-colleges" element={<CourseForColleges />} />
        <Route path="/courses/for-corporate" element={<CourseForCorprates />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;