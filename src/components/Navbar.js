import React from 'react';
import { Link } from 'react-router-dom';
import myicon from '../img/myicon.svg';

const Navbar = () => (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid1">
          <Link className="logolink" to="/">
          <img alt="logo" src={myicon} />
          </Link >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" >
                  Accueil
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/recettes" >
                  Recettes
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/conseils" >
                  Conseils
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/hygiene" >
                  Hygiène
                </Link>
              </li>
                <Link className="nav-link" id="button" to="/login" >
                Me Connecter
                </Link>
                <Link className="nav-link" id="button" to="/submit" >
                M'inscrire
                </Link>
            </ul>
        </div>
      </nav>
    </>
);

export default Navbar;
