import { Link, useLocation } from 'react-router-dom';
import { routes } from '../routes.tsx';



const Sidebar = () => {
    const location = useLocation();
    return (
        <aside className="absolute left-0 z-30 hidden group min-w-16 hover:w-64 xl:flex flex-col items-center justify-between h-screen p-2 border-r border-primary/50 bg-base-100 transition-all duration-500 ease-in-out overflow-hidden shadow-lg ">
            <div className="mb-8">
                <h1>Logo</h1>
            </div>
            <nav className="flex flex-col gap-4 w-full">
                {routes.map((route) => {
                    const Icon = route.icon;
                    return (
                        <Link
                            key={route.name}
                            to={route.path}
                            className={`flex items-center gap-3 px-2 py-2 rounded-lg transition cursor-pointer hover:bg-primary/40 hover:text-primary ${location.pathname === route.path ? 'bg-primary/20 text-primary' : 'text-primary'}`}
                        >
              <span>
                <Icon size={22}/>
              </span>
                            <span className="font-medium hidden group-hover:block transition-opacity duration-200 whitespace-nowrap">
                {route.name}
              </span>
                        </Link>
                    );
                })}
            </nav>
            <div>
                <h1>Account</h1>
            </div>
        </aside>
    );
};

export default Sidebar;