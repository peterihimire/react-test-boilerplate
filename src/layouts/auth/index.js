import React from "react";


import "./styles.scss";

const AuthLayout = ({ children }) => {


  return (
    <div className="auth-layout">
      <header className="header">
       

        <div className="header__lead">
       

          <h1>Image Half</h1>
        </div>
      </header>

      <main className="main">{children}</main>
    </div>
  );
};

export default AuthLayout;
