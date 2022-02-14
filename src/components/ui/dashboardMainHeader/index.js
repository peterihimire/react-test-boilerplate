import React, {  useEffect } from "react";
import "./styles.scss";
// import Link from "next/link";
import { Link } from "react-router-dom";
// import Nav from "../nav";
// import Logo from "../../../public/images/logo-light.svg";
// import { useRouter } from "next/router";

const DashboardHeader = ({ isOpen, clicked }) => {
  // const [isDropOpen, setDropOpen] = useState(false);
  // const [open, setOpen] = useState(false);

  // const [bgChange, setBgChange] = useState(false);

  // const router = useRouter();
  // console.log(router);

  // const dropHandler = (payload) => {
  //   setDropOpen(payload);
  // };

  // const buttonStyle = [
  //   "hamburger",
  //   "hamburger--spring",
  //   open ? "is-active" : null,
  // ];

  // useEffect(() => {
  //   if (!isOpen) {
  //     setDropOpen(false);
  //   }
  // }, [isOpen]);

  // useEffect(() => {
  //   setDropOpen(false);
  // }, [router.pathname]);

  useEffect(() => {
    // const changeHeaderBg = () => {
    //   if (window.scrollY >= 40) {
    //     setBgChange(true);
    //   } else {
    //     setBgChange(false);
    //   }
    // };

    // window.addEventListener("scroll", changeHeaderBg);

    // return () => {
    //   window.removeEventListener("scroll", changeHeaderBg);
    // };
  }, []);

  return (
    <header
      className='dash_header'

      // className={`${styles.dash_header} ${bgChange || isOpen ? styles.bgDark : ""}`}
    >
      <div className='wrapper'>
        <div className='dash_header__notif'>
          <span>
            {/* {router.asPath.slice(1)} */}
            {/* {router.pathname.slice(1)} */}
            {/* {`${router.query !== "" ? router.query.id : null}`} */}
          </span>
        </div>

        <div className='dash_header__actions'>
          {/* <div className={styles.profile_img}>
          <img src="" alt="profile" />
        </div> */}

          <div className='dropdown_wrapper'>
            <Link to='/profile'>Peter</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
