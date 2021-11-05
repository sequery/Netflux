import './navbar.scss';
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';
import { useState } from 'react';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)

        return () => (window.onscroll = null);
    };
    return (
        <div className={ isScrolled ? "navbar scrolled" : "navbar" }>
            <div className="container">
                <div className="left">
                    <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Logo"></img>
                    <span>HomePage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <Notifications className="icon"/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKurFbiK1YFmGY6LV3FwBqui2WOp7Kx7Jk7A&usqp=CAU" alt="Profile"></img>
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
