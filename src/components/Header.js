import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className='header-wrapper'>
      <div className='main-info'>
        <h1> Hello, I am Roselida Akoth, I specialize in</h1>
        <Typed
          className='typed-text'
          strings={[
            "Frontend Web Development",
            "Web development",
            "Web design",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href='#contact' className='btn-main-offer'>
          {" "}
          Contact Me{" "}
        </a>
      </div>
    </div>
  );
};

export default Header;
