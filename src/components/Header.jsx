import React, { useState } from "react";

export default function Header() {
  const [isNavBarMobileOpen, setIsNavBarMobileOpen] = useState(false);

  const toggleClassVisible = () => {
    setIsNavBarMobileOpen(!isNavBarMobileOpen);
  };
  return (
    <header
      className="h-20
           border-2
           {/* border-gray-500*/}
             p-5 flex justify-between items-center bg-transparent backdrop-blur-md"
    >
      <div>logo</div>

      <div id="menu_icon" className="md:hidden cursor-pointer" onClick={toggleClassVisible}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </div>
      <div className="text-white hidden md:block">
        <ul className="flex [&>li]:mx-2 [&>li>a]:max-w-max  text-xl">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">A-propos</a>
          </li>
          <li>
            <a href="#">services</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <a href="">Button</a>
          </li>
        </ul>
      </div>
      {/* NavbarMobile */}
      <div
        className=
              
              {`
                ${isNavBarMobileOpen? '' : 'hidden'}
                absolute
                transition-all
               right-2
               top-5
                w-8/12
                 p-6
                  bg-gradient-to-br
                  bg-opacity-15
                  from-[#2c99a8]
                  to-[#053e49]
                  backdrop-blur-3xlxl
                   {/*h-4/6*/}
                    rounded-2xl
                     text-white`}
      >
        <ul className="transition-all [&>li]:my-5 [&>li>a]:max-w-max  text-3xl links">
          <div className="flex justify-end cursor-pointer" onClick={toggleClassVisible}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className=""
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </div>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">A-propos</a>
          </li>
          <li>
            <a href="#">services</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <a href="">Button</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
