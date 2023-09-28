import { useEffect, useState } from "react";
import Blog from "../Blog";
import PropTypes from 'prop-types'


const Blogs = ({ handleAddToBookMark, handleAddReadingTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h2 className="text-2xl ml-6 mt-2">Blogs: {blogs.length}</h2>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookMark={handleAddToBookMark}
          handleAddReadingTime={handleAddReadingTime}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleAddToBookMark: PropTypes.func,
  handleAddReadingTime: PropTypes.func
};

export default Blogs;