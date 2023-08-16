import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import logo from '/android-chrome-192x192.png';

function MenuHamb({ menuHambRef }) {
    MenuHamb.propTypes = {
        menuHambRef: PropTypes.instanceOf(Object).isRequired,
    };

    return (
        <aside aria-label="Menu lateral" ref={menuHambRef} className=" shadow-2xl z-20 bg-white border-r-2 border-solid border-gray-200 h-screen flex flex-col items-center justify-between absolute hiddeMenu w-[200px]">
            <nav className="w-full flex flex-col h-full justify-evenly">
                <div className="  text-center flex gap-2 flex-col">
                    <Link aria-label="Navegar para cardápio" to={"/menu"} className=" z-40 py-2 w-full bg-gray-100 shadow-inner font-medium flex justify-center hover:opacity-75">Produtos</Link>
                    <Link aria-label="Navegar para carrinho" to={"/carrinho"} className=" z-40 py-2 w-full bg-gray-100 shadow-inner font-medium flex justify-center hover:opacity-75">Contato</Link>
                    <Link aria-label="Navegar para perfil" to={"/perfil"} className=" z-40 py-2 w-full bg-gray-100 shadow-inner font-medium flex justify-center hover:opacity-75">Sobre nós</Link>
                </div>
                <Link to={"/"} className='flex flex-col items-center text-center'>
                    <img className='w-[6rem] object-contain' src={logo} alt="J-tag Logo" />
                    <h1 className='text-xl font-medium' >J-TAG Etiquetas</h1>
                </Link>
            </nav>
        </aside>
    )
}

export default MenuHamb;