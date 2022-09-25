import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const Products = useSelector((state) => state.CartSlice);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent navbar-dark">
        <div className="container">
          <Link className="navbar-brand text-danger fs-1" to="/">
            CLOTH
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i className="fa-solid fa-cart-shopping me-2"></i>
                  Cart
                  {Products.length > 0 ? (
                    <span className="number-cart bg-danger ms-2 text-light d-inline-flex justify-content-center align-items-center">
                      {Products.length}
                    </span>
                  ) : (
                    ""
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
