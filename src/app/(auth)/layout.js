'use client'
// import node module libraries
//import { Container } from 'react-bootstrap';
// import Image from 'next/image';

export default function AuthLayout({ children }) {
  return (
    <div className="bg_log">
      <div className="logwrap">
        
         <div className="logoPan">
        
         </div>
         
        <div className="logBox">
          {children}
        </div>
      </div>
    </div>
  )
}