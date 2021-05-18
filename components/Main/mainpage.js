import mainStyles from "../../styles/Home.module.scss";
import Button from "@material-ui/core/Button";
import Design from "../../assets/bg-intro-desktop.svg";
import Illustration from "../../assets/image-mockups.png";
import DesignMobile from "../../assets/bg-intro-mobile.svg";

function MainPage() {
  return (
    <div className={mainStyles["main-wrapper"]}>
      <div className={mainStyles["main-content"]}>
        <div>
          <h1>Next Generation Digital Banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button
            variant="contained"
            className={mainStyles["main-request-button"]}
          >
            Request Invite
          </Button>
        </div>
        <div>
          <img
            src={Design}
            alt="Web Design Background"
            className={mainStyles["design-background"]}
          />
          <img
            src={Illustration}
            alt="Web Illustration"
            className={mainStyles["design-illustration"]}
          />
          <img
            src={DesignMobile}
            alt="Desgin Mobile"
            className={mainStyles["design-illustration-mobile"]}
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
