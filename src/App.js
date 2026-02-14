import "./styles/main.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";

import ScrollToTop from "./utils/scrollToTop"

function App() {
  return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Blogs />} />
					<Route path="/project/:id" element={<Blog />} />
				</Routes>
				<Footer />
			</Router>
		</div>
  );
}

export default App;
