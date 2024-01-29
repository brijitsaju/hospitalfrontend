import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { isAuthTokenContext } from '../contents/ContextShare';


function Header() {
  const { isAuthToken, setIsAuthToken } = useContext(isAuthTokenContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('existingUser');
    setIsAuthToken(false);
    navigate('/');
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">HealthCare</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="./docdetails">
                  Doctors
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./bloodlogin">
                  Blood Donation
                </a>
              </li>

            </ul>
            <form class="d-flex">
              <button
                onClick={handleLogout}
                class="btn btn-secondary my-2 my-sm-0"
                type="submit"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>


    </>
  );
}

export default Header;
