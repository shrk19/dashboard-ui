import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';


const Topbar = () => {
    const { pathname } = useLocation();

    const sidebarLinksBottom = [
        {
            img: 'assets/notifications-outline.svg',
            route: "/notifications",
            label: "Notifications"
        }, 
        {
            img: 'assets/log-out-outline.svg',
            route: "/logout",
            label: "Logout"
        }, 
    ]

  return (
    <section className='bottombar flex flex-row justify-between'>
    <div>
        <Link to='/'>
            <img src='assets/logo.svg' alt='logo' width={50} height={50}></img>
            
        </Link>
    </div>
    <ul className='flex flex-row'>
        {sidebarLinksBottom.map((link) => {
            const isActive = pathname === link.route
            return (
                <li key={link.label} className={`leftsidebar-link rounded-md group ${isActive && 'bg-slate-300'}`}>
                  <NavLink to={link.route} className="flex gap-4 items-center p-2">
                    <img src={link.img} alt={link.label} height={30} width={30} className={`icon group-hover:invert-white ${isActive && 'invert-white'}`}/>
                  </NavLink>
                </li>
            )
        })}
      </ul>
    
    </section>
  )
}

export default Topbar