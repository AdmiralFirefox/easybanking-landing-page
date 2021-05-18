import footerStyles from "../../styles/Home.module.scss";
import WebLogo from "../../assets/footer-logo.svg";
import Button from "@material-ui/core/Button";

function Footer() {
  return (
    <div className={footerStyles["footer-wrapper"]}>
      <div className={footerStyles["footer-content"]}>
        <div className={footerStyles["web-logo-social-links"]}>
          <div>
            <img src={WebLogo} alt="Web Logo" />
          </div>
          <div className={footerStyles["social-links"]}>
            <div>
              <a href="/">
                <i class="fab fa-facebook-square"></i>
              </a>
            </div>
            <div>
              <a href="/">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
            <div>
              <a href="/">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div>
              <a href="/">
                <i class="fab fa-pinterest"></i>
              </a>
            </div>
            <div>
              <a href="/">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={footerStyles["footer-links"]}>
          <div>
            <div>
              <a href="/">About Us</a>
            </div>
            <div>
              <a href="/">Contact</a>
            </div>
            <div>
              <a href="/">Blog</a>
            </div>
          </div>
          <div>
            <div>
              <a href="/">Careers</a>
            </div>
            <div>
              <a href="/">Support</a>
            </div>
            <div>
              <a href="/">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className={footerStyles["button-copyright"]}>
          <div>
            <Button
              variant="contained"
              className={footerStyles["footer-button"]}
            >
              Request Invite
            </Button>
          </div>
          <div>
            <p>©Easybank. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
