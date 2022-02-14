import React from "react";
import "./styles.scss";
// import Dropdown from "../dropdown";
// import { useRouter } from "next/router";
// import Link from "next/link";
import { NavLink } from "react-router-dom";
import { ReactComponent as Search } from "../../../../assets/images/search.svg";

// import ActiveLink from "../../../../hoc/activeLink2";
// import Logo from "../../../../public/images/logo-light.svg";
// import LogoDark from "../../../../public/images/logo-dark.svg";
// import Dashboard from "../../../../public/images/dashboardd.svg";

// import CrowdInvest from "../../../../public/images/crowd-invest.svg";
// import LongHold from "../../../../public/images/long-hold.svg";
// import Wallet from "../../../../public/images/wallet.svg";
// import Portfolio from "../../../../public/images/portfolio.svg";
// import Favourite from "../../../../public/images/favourite.svg";
// import Referral from "../../../../public/images/referral.svg";
// import Settings from "../../../../public/images/settings.svg";
// import Attention from "../../../../public/images/attention.svg";
// import Logout from "../../../../public/images/logoutt.svg";

const Nav = ({ clicked, isDrop, isOpen, bgChange }) => {
  // const [showLang, setShowLang] = useState(false);

  // const router = useRouter();

  // const crowdInvest = "/crowd-invest";
  // const orderConfirmation = "/order-confirmation";

  // useEffect(() => {
  //   openAbout(false);
  //   openServices(false);
  //   openIndustries(false);
  // }, [router.pathname]);

  // useEffect(() => {
  //   const hideLang = () => {
  //     setShowLang(false);
  //   };

  //   document.body.addEventListener("click", hideLang);

  //   return () => {
  //     document.body.removeEventListener("click", hideLang);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!isOpen) {
  //     openAbout(false);
  //     openServices(false);
  //     openIndustries(false);
  //   }
  // }, [isOpen]);

  return (
    // <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`} id="navbar">
    <nav className='nav' id='navbar'>
      <div className='logo'>
        {/* <Link to='/'>
          <a
          // className={`${isDropOpen ? styles.lightLogo : ""}`}
          >
            {bgChange ||
            isOpen ||
            router.pathname === "/contact-us" ||
            router.pathname === "/about-us" ||
            router.pathname === "/faq" ? (
              <LogoDark />
            ) : (
              <Logo />
            )}
          </a>
        </Link> */}
      </div>
      <ul className='navLinks'>
        <li>
          <NavLink to='/dashboard' className='dashLink'>
            <Search />
            <span>Profile</span>
          </NavLink>
        </li>

        <li>
          <NavLink to='/crowd-invest' className='dashLink'>
            <Search />
            <span>Notification</span>
          </NavLink>
        </li>

        <li>
          <NavLink to='/long-hold-investment' className='dashLink'>
            <Search />
            <span>Team Members</span>
          </NavLink>
        </li>

        <li>
          <NavLink to='/favourite' className='dashLink'>
            <Search />
            <span>Token</span>
          </NavLink>
        </li>

        <li>
          <NavLink to='/wallet' className='dashLink'>
            <Search />
            <span>Invoice</span>
          </NavLink>
        </li>

        <li>
          <NavLink to='/my-portfolio' className='dashLink'>
            <Search />
            <span>Billing</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
