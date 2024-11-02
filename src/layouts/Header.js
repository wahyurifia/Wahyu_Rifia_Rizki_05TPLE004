import { Navbar, Button } from "reactstrap";
import user1 from "../assets/images/user5.jpg";
import logo from "../assets/images/logo-pamulang.png";
const Header = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  return (
    <Navbar color="primary" dark expand="md" className="fix-header">
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center gap-3 ">
          <img src={logo} alt="logo-pamulang" width={35} />
          <div className="align-items-center fw-bold text-bg-primary">
            UNIVERSITAS PAMULANG
          </div>
        </div>
        <Button
          color="primary"
          className=" d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2"></div>
      <img
        src={user1}
        alt="profile"
        className="rounded-circle"
        width="45"
      ></img>
    </Navbar>
  );
};

export default Header;
