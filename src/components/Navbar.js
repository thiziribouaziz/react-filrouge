import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
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

            <button className="nav-item" id="button" type="submit">
            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33337C10.8 3.33337 3.33334 10.8 3.33334 20C3.33334 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33337 20 3.33337ZM20 8.33337C22.7667 8.33337 25 10.5667 25 13.3334C25 16.1 22.7667 18.3334 20 18.3334C17.2333 18.3334 15 16.1 15 13.3334C15 10.5667 17.2333 8.33337 20 8.33337ZM20 32C15.8333 32 12.15 29.8667 10 26.6334C10.05 23.3167 16.6667 21.5 20 21.5C23.3167 21.5 29.95 23.3167 30 26.6334C27.85 29.8667 24.1667 32 20 32Z" fill="#1D972C"/>
            </svg>
            Se Connecter
            </button>
        </div>
      </nav>
    </>
);

export default Navbar;
