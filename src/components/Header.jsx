import React, { useState } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav id="navbar">
            <div id="navbar-inner">
                <h2>Blog</h2>
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
                <ul id="nav-links" className={isMenuOpen ? "open" : ""}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Categorias</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
