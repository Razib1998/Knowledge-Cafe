import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs-components/Blogs";
import Bookmarks from "./Components/Bookmarks";
import Header from "./Components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

  function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

    const handleAddToBookMark = (blog) => {
    if (bookmarks.includes(blog)) {
      toast.error("This blog is already bookmarked!");
    }
      else{
      const newBookMarks = [...bookmarks, blog];
      setBookMarks(newBookMarks);
      }
      
      };
    
    const handleAddReadingTime = (time,id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // Remove the existing blog When we click Mark as read button

   const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
   setBookMarks(remainingBookMarks);
  };

  return (
    <>
      <Header></Header>
      <ToastContainer />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookMark={handleAddToBookMark}
          handleAddReadingTime={handleAddReadingTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
