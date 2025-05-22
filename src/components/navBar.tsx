import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../routes.tsx';


const NavBar = () => {
    const location = useLocation();
    return (
        <nav className="xl:hidden flex fixed bottom-0 left-0 w-full bg-base-100 border-t border-primary/50 justify-around items-center px-2 gap-2 py-2 z-50 shadow-lg transition-all duration-200 ease-in-out">
            {routes.map((route) => {
                const Icon = route.icon;
                return (
                   <div className={`grid-cols-1 text-center`}>
                       <Link
                           key={route.name}
                           to={route.path}
                           className={`w-20 flex flex-col items-center justify-center text-[12px] text-primary p-1 ${location.pathname === route.path ? 'bg-primary/20 rounded-lg px-2' : 'text-base-content'}`}
                       >
                           <Icon size={28} className="mb-1" />
                       </Link>
                       <p className="font-medium text-sm whitespace-nowrap text-primary">{route.name}</p>
                   </div>
                );
            })}
        </nav>
    );
};

export default NavBar;
