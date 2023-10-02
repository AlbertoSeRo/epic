// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { RiHome2Line,RiFireLine,RiLayoutGridLine,RiUserHeartLine 
,RiGhostLine,RiInboxArchiveLine,RiSettings3Line,RiMenu3Fill,
RiCloseFill,RiNotification2Line,RiSearchLine,RiArrowRightSLine,
RiArrowRightCircleLine,RiArrowLeftCircleLine} from "react-icons/ri";
function App() {
  const [ showMenu,setShowMenu]= useState(false);
  const toggleMenu =() =>{
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-[#141414] min-h-screen">
      <sidebar className={`fixed top-0 w-80 h-full  border-r border-gray-800 p-8 flex flex-col justify-between bg-[#141414]
      transition-all duration-500 z-50 ${showMenu ? "left-0": "-left-full"}`}>
        <div>
          <h1 className="text-gray-300 uppercase font-bold text-2xl tracking-[5px mb-10">
            LOGO
          </h1>
          <ul>
            <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                  <RiHome2Line/>
                  Home
                </a>
            </li>
            <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                  <RiFireLine/>
                  Store
                </a>
            </li>
            <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                  <RiLayoutGridLine/>
                  Libreria
                </a>
            </li>
            <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                  <RiUserHeartLine/>
                  Amigos
                </a>
            </li>
            <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                  <RiGhostLine/>
                  Recomendado
                </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
            <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                  <RiInboxArchiveLine/>
                  Descargas
                </a>
            </li>
            <li>
            <a href="#" className=" relative text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                  <RiSettings3Line/>
                  Configuracion
                </a>
            </li>
            <li>
            <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                  <img src="https://img.freepik.com/vector-gratis/lindo-pulpo-juegos-dibujos-animados-vector-icono-ilustracion-animal-tecnologia-icono-concepto-aislado-plano_138676-9181.jpg?"
                  className="w-6 h-6 object-cover rounded-full"/>
                  
                  Cuenta
                </a>
            </li>
          </ul>
        </div>
        <button  onClick={toggleMenu}
         className="bg-blue-600 text-white fixed bottom-8 right-6 p-2 text-lg rounded-full z-50">
          {showMenu ? <RiMenu3Fill/> :<RiCloseFill/>}
          
          </button>
      </sidebar>
      {/*Header*/}
      <header className=" fixed lg:pl-[340px] w-full flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-[#141414] z-40">
        <nav className="flex item-center gap-4 order-1 lg:order-none">
         <a href="#" className="text-gray-300  gap-4 hover:bg-blue-600 py-2 px-4 rounded-full transition-colors">
          Top Games
          </a>
          <a href="#" className="text-gray-300  gap-4 hover:bg-blue-600 py-2 px-4 rounded-full transition-colors">
          Productos
          </a>
          <a href="#" className="text-gray-300  gap-4 hover:bg-blue-600 py-2 px-4 rounded-full transition-colors">
          Wishlist
          </a>
        </nav>
        <ul className="flex item-center gap-4">
          <li>
            <a href="#" className=" text-gray-500  text-lg ">
              {""}
             <RiNotification2Line className="relative top-3 "/>{""}
            </a>
          </li>
          <li className="">
            <form className="relative ">
              <RiSearchLine className="text-gray-500 absolute top-3 left-2"/>
              <input type="text" 
              className="bg-[#232323] outline-none text-gray-300  py-2 pl-8 pr-4 rounded-full w-full" placeholder="Buscar"/>
            </form>
          </li>
        </ul>
      </header>
      {/*Container*/}
      <main className="lg:pl-[340px] p-8 pt-36 ">
        {/*hero*/}
        <div className="grid grid-cols-1 grid md:grid-cols-6 gap-1">
        <div className=" md:col-span-5  relative">
          <img src="https://wallpapers.com/images/hd/fortnite-1920x1080-hd-cvavgntkwzkn72rg.jpg"
          className="w-full h-[500px] object-cover lg:rounded-tl-xl lg:rounded-bl-xl" />
          <h1 className="absolute top-4 left-4 text-3xl text-white font-bold">
            Fortnite
          </h1>
          <div className="absolute left-0 bottom-0 p-8 max-w-xl">
            <p className="text-gray-200 text-lg">Update</p>
            <h2 className="text-4xl text-white font-extrabold mb-4">
            La caza ha comenzado en Fortnite Capítulo 2 - Temporada 5: Punto cero
            </h2 >
            <button className="bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center gap-2 text-lg group">
              Jugar
              <RiArrowRightSLine className="group-hover:translate-x-1 transition-all"/>
            </button>
          </div>
        </div>
        <div className=" col-span-1 w-full h-[500px] bg-[#232323] lg:rounded-tr-xl lg:rounded-br-xl">
          <ul className="p-2 flex flex-col gap-3  h-full ">
            <li>
              <a href="#" className="flex items-center gap-4 text-white text-lg">
                <img src="https://e0.pxfuel.com/wallpapers/313/768/desktop-wallpaper-cool-fortnite-skins-fortnite-weapon-skin-dope-fortnite.jpg"
                className="w-20 h-20 object-cover" />
                <span className="md:hidden lg:block">Fortnite</span>
                
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-white text-lg">
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/ZFKFGD5I3ZFHXCS4DVIMQTKSGU.jpg"
                className="w-20 h-20 object-cover" />
                <span className="md:hidden lg:block">Warzone</span>
                
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-white text-lg">
                <img src="https://w0.peakpx.com/wallpaper/700/612/HD-wallpaper-hogwarts-legacy-2021-game-poster.jpg"
                className="w-20 h-20 object-cover" />
                <span className="md:hidden lg:block">Hogwarts legacy</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-white text-lg">
                <img src="https://wallpapercave.com/wp/wp2411321.jpg"
                className="w-20 h-20 object-cover" />
                <span className="md:hidden lg:block">Watch Dogs 2</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-white text-lg">
                <img src="https://wallpapercave.com/wp/wp6012294.jpg"
                className="w-20 h-20 object-cover" />
                <span className="md:hidden lg:block">valorant</span>
              </a>
            </li>
          </ul>
        </div>
        </div>
        {/*Slide*/}
        <div className="mt-10 mb-6 flex items-center justify-between">
          <h5 className="text-gray-300 text-2xl">
            Juego en Venta
          </h5>
          <div className="text-gray-300 text-3xl flex items-center gap-2 ">
           <RiArrowLeftCircleLine className="cursor-pointer hover:bg-gary-400 transition-colors"/> 
           <RiArrowRightCircleLine className="cursor-pointer"/>

          </div>
        </div>
        <div className="grid grit-cols-1 lg:grid-cols-5">
          <div className="p-4">
            <button>
            <img src="https://sm.ign.com/t/ign_es/game/t/the-eterna/the-eternal-cylinder_p3fk.1200.jpg"
            className="w-full h-80 object-cover rounded-xl mb-2"/>
            <h3 className="text-gray-300 text-lg">The Eternal Cylinder</h3>
            <p className="text-gray-500 mb-3">Good Shepkerd</p>
            <span className="text-white">242.99 MXN</span>
            </button>
          </div>
          <div className="p-4">
            <img src="https://i.3djuegos.com/juegos/15429/witchfire/fotos/ficha/witchfire-5790397.jpg"
            className="w-full h-80 object-cover rounded-xl mb-2"/>
            <h3 className="text-gray-300 text-lg">Witchs</h3>
            <p className="text-gray-500 mb-3">Dark Fantasy</p>
            <span className="text-white">356.99 MXN</span>
          </div>
          <div className="p-4">
            <img src="https://plusgami.com/wp-content/uploads/2020/12/BioShock-2-Remastered.jpg"
            className="w-full h-80 object-cover rounded-xl mb-2"/>
            <h3 className="text-gray-300 text-lg">Bioshock 2</h3>
            <p className="text-gray-500 mb-3">Action RPG</p>
            <div className="flex items-center gap-2">
              <span className="bg-green-400 p-1 text-green-800 rounded-lg">
                -80%
             </span>
             <span className="text-gray-500">$220</span>
             <span className="text-white">50 MXN</span>
             </div>
            
          </div>
          <div className="p-4">
            <img src="https://media.vandal.net/m/75962/genshin-impact-20209417573364_1.jpg"
            className="w-full h-80 object-cover rounded-xl mb-2"/>
            <h3 className="text-gray-300 text-lg">Genshin</h3>
            <p className="text-gray-500 mb-3">Venture Games</p>
            <span className="text-white">399.99 MXN</span>
          </div>
          
          <div className="p-4">
            <img src="https://image.api.playstation.com/vulcan/ap/rnd/202305/1515/20830c86815b15a302ffd9796ef7d754f2b69ff69790dbc8.jpg"
            className="w-full h-80 object-cover rounded-xl mb-2"/>
            <h3 className="text-gray-300 text-lg">Mortal Kombat 1</h3>
            <p className="text-gray-500 mb-3">Action RPG</p>
            <div className="flex items-center gap-2">
              <span className="bg-green-400 p-1 text-green-800 rounded-lg">
                -15%
             </span>
             <span className="text-gray-500">$999.99</span>
             <span className="text-white">849.99 MXN</span>
             </div>
            
          </div>
        </div>
       
      </main>
      </div>
  )
}

export default App