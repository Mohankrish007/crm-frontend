import React from 'react'

import { Link } from 'react-router-dom';

import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar-main'>
      <div>LOGO</div>
      <Link to="/">Home</Link>
      <Link to="/customers">Customers</Link>
      <Link to="/suppliers">Suppliers</Link>
    </div>
  )
}

export default Sidebar