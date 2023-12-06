import React from 'react'

function Sidebar() {
  return (
  <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item active">
        <a className="nav-link " href="dashboard.html">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="app-user.html">
          <i className="bi-menu-button"></i>
          <span>App User</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="admin-user.html">
          <i className="bi-person-check"></i>
          <span>Admin User</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="requested-store.html">
          <i className="bi bi-receipt"></i>
          <span>Requested Store</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="store-information.html">
          <i className="bi-shop-window"></i>
          <span>Store Information</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="catagory-information.html">
          <i className="bi bi-bookmarks"></i>
          <span>Catagory Information</span>
        </a>
      </li> 
      <li className="nav-item">
        <a className="nav-link" href="product-request.html">
          <i className="bi-bounding-box"></i>
          <span>Product Request</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="product-information.html">
          <i className="bi-box-seam"></i>
          <span>Product Information</span>
        </a>
      </li>
    </ul>
  </aside>
  )
}

export default Sidebar