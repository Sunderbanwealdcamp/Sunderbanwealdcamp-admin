import React from 'react'
import Link from 'next/link'

function Header(props) {
  return (
    <header id="header" className="header fixed-top">

    <div className="d-flex align-items-center justify-content-between">
      <Link href="index.html" className="logo d-flex align-items-center">
        <img src="img/vercel.svg" height="32px" />
      </Link>
      <button
				// className={`nav-link ${location === item.link ? 'active' : ''
				// 	}`}
				onClick={(e) =>
					// isMobile ? 
          props.onClick(!props.showMenu) 
          // : props.showMenu
				  }
        >

				{/* {item.name}
				{''}
				{item.badge ? (
					<Badge
						className="ms-1"
						bg={item.badgecolor ? item.badgecolor : 'primary'}
					>
						{item.badge}
					</Badge>
				) : (
					''
				)} */}
        <i className="material-icons">menu</i>
			</button>
      
    </div>

    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <li className="nav-item dropdown pe-3">

          <Link className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
          <i className="material-icons">person</i>
            <span className="d-none d-md-block dropdown-toggle ps-2">Admin</span>
          </Link>

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li>
              <Link className="dropdown-item d-flex align-items-center" href="#">
                <i className="bi bi-box-arrow-right mr8"></i>
                <span>Sign Out</span>
              </Link>
            </li>

          </ul>
        </li>

      </ul>
    </nav>

  </header>
  )
}

export default Header