import React from 'react';
import { Link } from 'react-router-dom';
import myicon from '../img/myicon.svg';

const Navbar = () => (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img alt="logo" src={myicon} />
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/" >
                  Accueil
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/recette" >
                  Recettes
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/conseils" >
                  Conseils
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/recette" >
                  Hygiène
                </Link>
              </li>
            </ul>

                <Link className="nav-item" id="button" to="/submit" >
                Me Connecter
                </Link>
                <Link className="nav-item" id="button" to="/login" >
                M'inscrire
                </Link>

        </div>
      </nav>
    </>
);

export default Navbar;
