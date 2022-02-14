import React, { useState } from "react";
import  "./styles.scss";
import Header from "../../components/ui/dashboardHeader";
// import Backdrop from "../../components/ui/backdrop";
// import Footer from "../../components/ui/footer";
import Sidebar from "../../components/ui/dashboardNav";
import DashboardHeader from "../../components/ui/dashboardMainHeader";

// import { useRouter } from "next/router";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  // const router = useRouter();

  // useEffect(() => {
  //   setOpen(false);

  //   document.documentElement.classList.remove("_fixed");
  //   document.body.classList.remove("_fixed");
  // }, [router.pathname]);

  return (
    <div className='layout'>
      <Sidebar isOpen={open} />
      {/* <Backdrop
        open={open}
        clicked={() => {
          setOpen(false);

          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      /> */}

      <Header
        isOpen={open}
        clicked={() => {
          setOpen(!open);

          document.documentElement.classList.toggle("_fixed");
          document.body.classList.toggle("_fixed");
        }}
      />
      <DashboardHeader />
      <main className='main'>{children}</main>

      {/* <Footer /> */}
    </div>
  );
};

export default DashboardLayout;
