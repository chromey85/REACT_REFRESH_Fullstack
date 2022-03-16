export const PhotoContainer = ({ photo }) => {
  return (
    <div className="photo-container">
      <p>{photo.author}</p>
      <img src={photo.download_url} alt="lorem picsum random" />
    </div>
  );
};
