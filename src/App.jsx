
import { useState } from 'react';
import './App.css'
import Blogs from './Components/Blogs-components/Blogs'
import Bookmarks from './Components/Bookmarks';
import Header from './Components/Header'

function App() {
  
  const [bookmarks,setBookMarks] = useState([]);

   const handleAddToBookMark = blog =>{
    const newBookMarks = [...bookmarks,blog];
    setBookMarks(newBookMarks);
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App
