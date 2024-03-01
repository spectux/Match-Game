import './index.css'

const Thumbnail = ({imageUrl, handleClick}) => {
  return (
    <div className="thumbnails">
    <img src={imageUrl} alt="match" />
      <button type="button" className="thumbnail-button" onClick={handleClick}>
        <img src={imageUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </div>
  )
}

export default Thumbnail
