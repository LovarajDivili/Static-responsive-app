import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId,isActive} = props
  const {displayText, tabId} = tabDetails


  const activeTabClassName= isActive? 'active-tab-btn' : ''

const onclickItem = () => {
    updateActiveTabId(tabId)
}
  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${activeTabClassName}`} onClick={onClickItem}> 
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
