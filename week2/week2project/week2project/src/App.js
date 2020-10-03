import React from 'react';
import './App.css';
import BlogPost from './BlogPost'
import BlogList from './BlogList'
import Navbar from './Navbar'

function App() {
  
  const Blog = BlogList.map(blog => {
    return <BlogPost key={blog.id} title={blog.title} subTitle={blog.subTitle} author={blog.author} date={blog.date}/>
  })
  return (
    <div className="App">
        <header>
          <Navbar/>
          <div className="titleBlock">
          <h1>Clean Blog</h1>
          <h2>A Blog Theme by Start Bootstrap</h2>
          </div>
        </header>

        <div className="main">
         {/* blog list */}
         {Blog}
        </div>
        <button>Older Posts &raquo;</button>

        <footer>
          <h6>Copyright &#169 Your Website 2019</h6>
        </footer>
        
    </div>
  );
}

export default App;
