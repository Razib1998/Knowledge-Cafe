import PropTypes from "prop-types"; 
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookMark }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    hashtags,
    reading_time,
  } = blog;
  return (
    <div>
      <div className="card w-96 md:w-[700px] bg-gray-300 md:m-6 shadow-xl">
        <figure className="w-full">
          <img src={cover} alt={"Cover picture of the title ${title}"} />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div>
                <img
                  className="w-16 h-16 rounded-full"
                  src={author_img}
                  alt=""
                />
              </div>
              <div>
                <h5 className="text-xl font-bold">{author}</h5>
                <p className="font-medium">{posted_date}</p>
              </div>
            </div>
            <div className="flex  items-center gap-2">
              <span>Reading Time: {reading_time}min</span>
              <button
                onClick={ () => handleAddToBookMark(blog)}
                className="text-2xl text-red-500"
              >
                <FaBookmark></FaBookmark>
              </button>
            </div>
          </div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p>
            {hashtags.map((hashtag, idx) => (
              <span className="p-2" key={idx}>
                <a href=""># {hashtag}</a>
              </span>
            ))}
          </p>
        </div> 
      </div>
    </div>
  );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired, 
    handleAddToBookMark: PropTypes.func
}
export default Blog;
