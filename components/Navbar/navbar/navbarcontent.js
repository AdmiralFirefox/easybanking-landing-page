import Reveal from "react-awesome-reveal";
import { FadeLeft } from "../../Animations";

function NavbarContent({ show, close }) {
  return (
    <div>
      <div
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
        className="navbar-wrapper" /* Wraps the whole sidebar content*/
      >
        <div className="navbar-content">
          <Reveal
            cascade
            keyframes={FadeLeft}
            duration={500}
            triggerOnce
            className="nav_components"
          >
            <a href="/" onClick={close}>
              Home
            </a>

            <a href="/" onClick={close}>
              About
            </a>

            <a href="/" onClick={close}>
              Contact
            </a>

            <a href="/" onClick={close}>
              Blog
            </a>

            <a href="/" onClick={close}>
              Careers
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default NavbarContent;
