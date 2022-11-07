import { NavLink } from "react-router-dom";

function Navbar() {


    const NavStyles = ({isActive}) =>{
        return{
            color: isActive ? '#1f1f1f' : '#505050',
            borderBottom : isActive ? '1px solid orange' : ''
        }
    }

    
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-light">
        <div className="container-fluid mx-5">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://raw.githubusercontent.com/nyxsr/galeri-jabar-bootstrap/master/assets/img/logo.png"
              alt=""
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav"
              style={{ flex: 2, display: "flex", justifyContent: "center" }}
            >
              <li className="nav-item">
                <NavLink
                style={NavStyles}
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                style={NavStyles}
                  className="nav-link"
                  to="/galeri"
                >
                  Galeri
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                style={NavStyles}
                  className="nav-link"
                  to="/events"
                >
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                style={NavStyles}
                  className="nav-link"
                  to="/karya"
                >
                  Karya Seni
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                style={NavStyles}
                  className="nav-link"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                style={NavStyles}
                  className="nav-link"
                  to="/daftar"
                >
                  Daftar
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    </>
  );
}

export default Navbar;
