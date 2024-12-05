import BlogList from "./components/BlogList";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import blogsArray from "./posts.js";
import BlogPostPage from "./Pages/BlogPostPage.jsx";
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogList blogs={blogsArray}/> }/>
          <Route path="/blog/:id" element={<BlogPostPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
