import '../css/App.css'
import { Outlet, Link } from "react-router-dom";

function MenuBar() {
   return ( <div class="container">
            <div class="navbar">
                <nav>
                    <ul>
                        <li class="hoverbutton"><Link to="about">About Me</Link></li>
                        <li class="hoverbutton"><Link to="/">Home</Link></li>
                        <li class="hoverbutton"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </div>
        
   );
}

export default MenuBar;