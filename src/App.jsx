
import { useState } from 'react';
import './App.css'
import Blogs from './Components/Blogs-components/Blogs'
import Bookmarks from './Components/Bookmarks';
import Header from './Components/Header'

function App() {
  
  const [bookmarks,setBookMarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);

   const handleAddToBookMark = blog =>{
    const newBookMarks = [...bookmarks,blog];
    setBookMarks(newBookMarks);
  }

  const handleAddReadingTime = time =>{
    console.log("mark is added",time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookMark={handleAddToBookMark}
          handleAddReadingTime={handleAddReadingTime}
        ></Blogs>
        <Bookmarks
         bookmarks={bookmarks}
         readingTime = {readingTime}
        ></Bookmarks>
      </div>
    </>
  );
}

export default App
