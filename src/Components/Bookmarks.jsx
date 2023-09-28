import PropTypes from "prop-types";
import Bookmark from "./Bookmark";


const Bookmarks = ({ bookmarks,readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-100  p-4 rounded-lg mt-16">
        <div className="bg-slate-300 p-4 mb-4 rounded-lg">
            <h3 className="text-2xl font-medium text-[#6047EC]">Reading spent Time: {readingTime}</h3>
        </div>
      <h2 className="text-2xl font-bold">Bookmarks: {bookmarks.length}</h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
 
export default Bookmarks;
Bookmarks.propTypes = {
  bookmarks:  PropTypes.array,
  readingTime: PropTypes.number
};