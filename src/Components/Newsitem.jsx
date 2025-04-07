
const Newsitem = ({ title, description, src, url }) => {
  const fallbackImage = "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=";

  const getShortDescription = (text) => {
    if (!text) return "Stay informed with real-time updates, trending headlines, and curated stories from around the world.";
    return text
      .split(" ")
      .reduce((acc, word) => {
        if ((acc + word).length <= 100) return acc + word + " ";
        return acc;
      }, "")
      .trim() + "...";
  };

  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-4 px-2 py-2" style={{ maxWidth: "400px" }}>
      <img
        src={src && src !== "null" ? src : image}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallbackImage;
        }}
        style={{ height: "200px", width: "360px", objectFit: "cover" }}
        className="card-img-top"
        alt="News"
      />
      <div className="card-body">
        <h5 className="card-title">{title?.slice(0, 50)}{title?.length > 50 ? "..." : ""}</h5>
        <p className="card-text">{getShortDescription(description)}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsitem;


