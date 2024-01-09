import { Link, NavLink, useLocation } from 'react-router-dom';

const Bottombar = () => {
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

  return (
    <div className='bottombar'>
      <ul className='flex flex-row justify-between'>
        {sidebarLinks.map((link) => {
            const isActive = pathname === link.route
            return (
                <li key={link.label} className={`leftsidebar-link rounded-md group ${isActive && 'bg-blue'}`}>
                  <NavLink to={link.route} className="flex gap-4 items-center p-2">
                    <img src={link.img} alt={link.label} height={30} width={30} className={`icon group-hover:invert-white ${isActive && 'invert-white'}`}/>
                  </NavLink>
                </li>
            )
        })}
      </ul>

    </div>
  )
}

export default Bottombar