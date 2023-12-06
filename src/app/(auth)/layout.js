'use client'
// import node module libraries
//import { Container } from 'react-bootstrap';

export default function AuthLayout({ children }) {
  return (
    <div className="bg_log">
      <div className="logwrap">
        <div className="logoPan">
          <img src="img/vercel.svg" />
        </div>
        <div className="logBox">
          {children}
        </div>
      </div>
    </div>
  )
}