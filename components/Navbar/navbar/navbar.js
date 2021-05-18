import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Turn as Hamburger } from "hamburger-react";
import NavbarContent from "./navbarcontent";
import WebLogo from "../../../assets/logo.svg";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const SignInButton = withStyles(() => ({
  root: {
    color: "#fff",
    borderRadius: "20px",
    fontWeight: "bold",
    padding: "0.50em 2em",
  },
}))(Button);

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 769 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile ? children : null;
};

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const closeMobileMenu = () => setNavbar(!navbar);
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Desktop>
        <div className="app-bar-desktop-wrapper">
          <div className="desktop-web-name">
            <img src={WebLogo} alt="web logo" />
          </div>
          <div className="desktop-navlinks">
            <div>
              <a href="/">Home</a>
            </div>

            <div>
              <a href="/">About</a>
            </div>

            <div>
              <a href="/">Contact</a>
            </div>

            <div>
              <a href="/">Blog</a>
            </div>

            <div>
              <a href="/">Careers</a>
            </div>
          </div>

          <div>
            <a href="/">
              <SignInButton variant="contained" className="desktop-button">
                Request Invite
              </SignInButton>
            </a>
          </div>
        </div>
      </Desktop>

      <Mobile>
        <div>
          <div className="app-bar">
            <div className="app-bar-content-wrapper">
              <div className="app-bar-content">
                <img src={WebLogo} alt="web logo" />
              </div>
              <div className="app-bar-links">
                <div onClick={closeMobileMenu} className="nav_ham">
                  {navbar ? (
                    <Hamburger toggled={isOpen} />
                  ) : (
                    <Hamburger toggle={setOpen} />
                  )}
                </div>
              </div>
            </div>
          </div>
          {navbar ? (
            <div onClick={closeMobileMenu} className="back-drop" />
          ) : null}
          <NavbarContent show={navbar} close={closeMobileMenu} />
        </div>
      </Mobile>
    </div>
  );
}

export default Navbar;
