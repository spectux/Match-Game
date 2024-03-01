import './index.css'

const Tab = ({tabDetails, handleTabChange, isSelected}) => {
  const {tabId, displayText} = tabDetails

  const handleClick = () => {
    handleTabChange(tabId)
  }

  return (
    <button
      type="button"
      className={`tab-button ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {displayText}
    </button>
  )
}

export default Tab
