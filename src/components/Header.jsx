function Header() {
  return (
    <header className="container mx-auto">
      <ul className="p-5 flex items-center gap-8 border-b-2 ">
        <li>
          <a
            href="#"
            className="text-pink-500 pb-4 border-b-4 border-pink-500 font-medium"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="pb-4 border-b-4 border-transparent font-medium hover:border-pink-500 hover:text-pink-500 transition-colors duration-300"
          >
            How to works
          </a>
        </li>
        <li>
          <a
            href="#"
            className="pb-4 border-b-4 border-transparent font-medium hover:border-pink-500 hover:text-pink-500 transition-colors duration-300"
          >
            Get a photographer
          </a>
        </li>
        <li>
          <a href="#" className="py-2 px-4 border-2 rounded-full  font-medium ">
            Login
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
