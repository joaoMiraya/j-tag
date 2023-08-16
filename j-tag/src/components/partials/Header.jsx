import PropTypes from 'prop-types';
import logo from '/android-chrome-192x192.png';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineMenuUnfold } from 'react-icons/ai';

function Header({ handleOpen, handleClose, openMenuHambRef, closeMenuHambRef }) {
    Header.propTypes = {
        handleOpen: PropTypes.func.isRequired,
        handleClose: PropTypes.func.isRequired,
        closeMenuHambRef: PropTypes.object.isRequired,
        openMenuHambRef: PropTypes.object.isRequired,
    };
    return (
        <header className='border-b-2 border-solid border-gray-200 z-40'>
            <nav className='flex p-4'>
                <Link to={"/"} className='flex items-center text-center'>
                    <img className='w-[6rem] object-contain' src={logo} alt="J-tag Logo" />
                </Link>
                <div className=" md:hidden  flex w-full items-end justify-end">
                    <button tabIndex={0} ref={openMenuHambRef} className='p-2 relative z-40' onClick={handleOpen} aria-label='Botão para abrir menu' >
                        <AiOutlineMenu size={30} />
                    </button>
                    <button tabIndex={0} ref={closeMenuHambRef} className='p-2 relative z-40 hidden' onClick={handleClose} aria-label='Botão para fechar menu'>
                        <AiOutlineMenuUnfold size={30} />
                    </button>
                </div>
                <div className='hidden md:flex w-full justify-end'>
                    <ul className='flex items-end h-full gap-4'>
                        <Link to={"/produtos"} >Produtos</Link>
                        <Link to={"/contatos"} >Contato</Link>
                        <Link to={"/sobre-nos"} >Sobre nós</Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default Header;