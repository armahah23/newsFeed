import PropTypes from "prop-types";

function Feed({ title, link, date }) {
  let fromatted = { day: "numeric", month: "long", year: "numeric" };
  let articalDate = new Date(date).toLocaleDateString("en-GB", fromatted);

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-500"
      >
        <h3 className="text-xl mb-2 underline decoration-blue-300">{title}</h3>
        <p className="text-neutral-500">{articalDate}</p>
      </a>
    </>
  );
}
export default Feed;

Feed.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
