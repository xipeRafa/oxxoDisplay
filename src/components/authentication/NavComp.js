import React, { useContext } from 'react';
import logoImg from '../../assets/canal10.png';
import { AuthContext } from '../../context/AuthContext';
import { LoginComp } from './LoginComp';
import { RegisterComp } from './RegisterComp';

export const NavComp = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="container-fluid navbar navbar-light bg-secondary">
      <div className="container-fluid">
        <div className="navbar-brand text-white">
        <img src={logoImg} alt="logo" height="50" />   DISPLAY TC-10
        </div>
        <div className="d-flex">
          <div className="col">
            {currentUser ? (
              <>
                <div className="btn mx-2 disabled">
                  {currentUser.email}
                </div>
                <div onClick={() => logout()} className="text-white btn mx-2">
                  Salir
                </div>
              </>
            ) : (
              <>
                <LoginComp />
                <RegisterComp />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
