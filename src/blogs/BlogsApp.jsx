import Navbar from "../Navbar";
import Footer from "../Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import AllBlogs from "./AllBlogs";
import BlogDetail from "./BlogDetail";
import CreateBlogs from "./CreateBlog";

const BlogsApp = () => {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<AllBlogs />} />
                    <Route path="/blogs/:id" element={<BlogDetail />} />
                    <Route path="/createBlog" element={<CreateBlogs />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default BlogsApp;