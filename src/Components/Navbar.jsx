

function Navbar({title}) {

  return (
    <header>
   <nav className="bg-black p -1">
    <div className="container max-auto flex flex-col lg:flex-row items-center">
        <div className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer"> {title} </div>
        </div>

    
        <div className="lg:flex flex-row justify-end items-center text-xl">
            <a href="#Projects" className="text-white  px-4 py-2  hover:text-orange-600">Projects</a>
            <a href="/" className="text-white  px-4 py-2  hover:text-orange-600">Contact</a>
        </div>


</nav>
</header>
  )
}
export default Navbar