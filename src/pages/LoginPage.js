import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => (
  <>
    <form>
      <div className="titre"> <h1>Connectez-vous</h1></div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email <span className="redstar">*</span></label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">MOT DE PASSE <span className="redstar">*</span></label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" htmlFor="exampleCheck1">SE SOUVENIR DE MOI</label>
      </div>
      <button type="submit" className="btn btn-primary">Se Connecter</button>
      <Link to="/forgottenpassword"> <p className="forgottenpassword">Mot de passe oublié ?</p></Link>
      <hr></hr>
      <Link to="/submit">
      <button type="submit" className="btn btn-primary">Créer un compte </button>
      </Link>
    </form>
  </>
);

export default LoginPage;
