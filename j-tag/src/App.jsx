import { useRef } from 'react';
import Header from './components/partials/Header'
import './stylesheets/App.css'
import MenuHamb from './components/utils/MenuHamb';
import { Outlet } from 'react-router-dom';

function App() {

  const menuHambRef = useRef();
  const openMenuHambRef = useRef();
  const closeMenuHambRef = useRef();

  /* FUNÇÃO PARA ABRIR O MENU HAMB */
  const handleOpen = () => {
    menuHambRef.current.classList.add('openMenu')
    menuHambRef.current.classList.remove('hiddeMenu')
    openMenuHambRef.current.classList.add('hidden')
    closeMenuHambRef.current.classList.remove('hidden')
  };
  /* FUNÇÃO PARA FECHAR O MENU HAMB */
  const handleClose = () => {
    menuHambRef.current.classList.remove('openMenu')
    menuHambRef.current.classList.add('hiddeMenu')
    closeMenuHambRef.current.classList.add('hidden')
    openMenuHambRef.current.classList.remove('hidden')
  };

  return (

    <>
      <Header
        handleOpen={handleOpen}
        handleClose={handleClose}
        menuHambRef={menuHambRef}
        openMenuHambRef={openMenuHambRef}
        closeMenuHambRef={closeMenuHambRef}
      />
      <div>
        <MenuHamb menuHambRef={menuHambRef} />

        <Outlet />

      </div>
    </>
  )
}

export default App
