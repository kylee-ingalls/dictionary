export default function Photos(props) {
  if (!props.photos) return null;

  return (
    <div className="Photos">
      {props.photos.slice(0, 6).map((photo, index) => (
        <a key={index} href={photo.url} target="_blank" rel="noreferrer">
          <img src={photo.src.landscape} alt={photo.alt} />
        </a>
      ))}
    </div>
  );
}
