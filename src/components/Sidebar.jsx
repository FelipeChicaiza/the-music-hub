const SideBar = () => {
  return (
      <div className="sidebar-div">
          <h1 className="title-text">The Cat Hub 🐈</h1>
          <div className="sidebar-options">
              <button className="btn-block"><h2>Dashboard</h2></button>
              <button className="btn-block"><h2>Search</h2></button>
              <button className="btn-block"><h2>About</h2></button>
          </div>
      </div>
  )
}

export default SideBar;