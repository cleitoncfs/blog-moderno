import React from "react";

function Sidebar() {
    return (
        <aside id="sidebar">
            <section id="search-bar">
                <h4>Busca</h4>
                <form>
                    <input type="text" placeholder="Pesquise no blog" />
                    <button type="submit">Buscar</button>
                </form>
            </section>
            <section id="categories">
                <h4>Categorias</h4>
                <ul>
                    <li>
                        <a href="#">Paisagens</a>
                    </li>
                    <li>
                        <a href="#">Aventura</a>
                    </li>
                    <li>
                        <a href="#">Viagens longas</a>
                    </li>
                    <li>
                        <a href="#">Florestas</a>
                    </li>
                    <li>
                        <a href="#">Cachoeiras</a>
                    </li>
                </ul>
            </section>
            <section id="tags">
                <h4>Tags</h4>
                <div id="tags-container">
                    <a href="#">Lifestyle</a>
                    <a href="#">Viagem</a>
                    <a href="#">Barco</a>
                    <a href="#">Trilha</a>
                </div>
            </section>
        </aside>
    );
}

export default Sidebar;
