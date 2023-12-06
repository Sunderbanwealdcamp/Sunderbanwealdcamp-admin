'use client'
import { useState } from 'react';
import Script from 'next/script'

import Header from '@/layouts/header';
import Sidebar from '@/layouts/sidebar';


export default function DashboardLayout({ children }) {
  const [showMenu, setShowMenu] = useState(true);
	const ToggleMenu = () => {
		return setShowMenu(!showMenu);
	};
  return (
    <>
    
    <div className={`dash-bg ${showMenu ? '' : 'toggled'}`}>
          <Header showMenu={showMenu} onClick={(value) => setShowMenu(value)} />
          <Sidebar />
          <main id="main" className="main">
            {children}
          </main>
    </div>        
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"  />
    </> 
  )
}




