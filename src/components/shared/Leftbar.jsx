import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Leftbar = () => {

  const { pathname } = useLocation();

  const sidebarLinks = [
    {
        img: 'assets/search-outline.svg',
        route: "/search",
        label: "Search"
    }, 
    {
        img: 'assets/home-outline.svg',
        route: "/",
        label: "Home"
    }, 
    {
        img: 'assets/document-text-outline.svg',
        route: "/option",
        label: "Option"
    }, 
    {
        img: 'assets/keypad-outline.svg',
        route: "/option2",
        label: "Option2"
    }, 
    {
        img: 'assets/person-outline.svg',
        route: "/profile",
        label: "Profile"
    }, 
  ]

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
    <nav className='leftsidebar h-screen'>
      <div>
        <Link to='/'>
            <img src='assets/logo.svg' alt='logo' width={50} height={50}></img>
            
        </Link>
      </div>

      <ul className='flex flex-col'>
        {sidebarLinks.map((link) => {
            const isActive = pathname === link.route
            return (
                <li key={link.label} className={`leftsidebar-link rounded-md group ${isActive && 'bg-blue'}`}>
                  <NavLink to={link.route} className="flex gap-4 items-center p-2">
                  <img src={link.img} alt={link.label} height={30} width={30} className={`icon group-hover:invert-white ${isActive && 'invert-white'}`}/>
                  {/* {link.label} */}
                  </NavLink>
                </li>
            )
        })}
      </ul>

      <ul className='flex flex-col'>
        {sidebarLinksBottom.map((link) => {
            const isActive = pathname === link.route
            return (
                <li key={link.label} className={`leftsidebar-link rounded-md group ${isActive && 'bg-blue'}`}>
                  <NavLink to={link.route} className="flex gap-4 items-center p-2">
                  <img src={link.img} alt={link.label} height={30} width={30} className={`group-hover:invert-white ${isActive && 'invert-white'}`}/>
                   {/* {link.label} */}
                  </NavLink>
                </li>
                
            )
        })}
      </ul>      
    </nav>
  )
}

export default Leftbar