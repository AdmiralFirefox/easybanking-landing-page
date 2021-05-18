import infoStyles from "../../styles/Home.module.scss";

function Info() {
  return (
    <div className={infoStyles["info-wrapper"]}>
      <div className={infoStyles["info-content"]}>
        <h2>Why Choose Easy Bank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
    </div>
  );
}

export default Info;
