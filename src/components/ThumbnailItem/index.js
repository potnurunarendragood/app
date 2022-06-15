// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageUrl, clickImageItem, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageUrl
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbnail = () => {
    clickImageItem(id)
  }
  return (
    <li className="list-items">
      <button
        type="button"
        onClick={onClickThumbnail}
        className="thumbnail-button"
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
