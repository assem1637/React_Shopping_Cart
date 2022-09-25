import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearAll,
  Decrese,
  Increse,
  removeFromCart,
} from "./Redux/Slices/CartSlice";

export default function Cart() {
  const Products = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();
  const TotalPrice = Products.reduce((acc, current) => {
    return acc + current.price * current.quantity;
  }, 0);

  const Decreses = (product) => {
    dispatch(Decrese(product));

    if (product.quantity === 1) {
      dispatch(removeFromCart(product));
    }
  };

  return (
    <>
      {Products.length > 0 ? (
        <>
          <p className="text-center fs-3 text-light">Shopping Cart</p>
          <div className="container my-5">
            <table className="table text-center text-light border">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {Products.map((product, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{product.id}</th>
                      <td className="fw-bold">{product.title}</td>
                      <td>
                        <img
                          src={product.images[0]}
                          alt={product.title}
                          style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "5px",
                          }}
                        />
                      </td>
                      <td className="fw-bold opacity-75">{product.price}$</td>
                      <td>
                        <button
                          className="btn btn-danger btns"
                          onClick={() => Decreses(product)}
                        >
                          -
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          className="btn btn-info btns"
                          onClick={() => dispatch(Increse(product))}
                        >
                          +
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => dispatch(removeFromCart(product))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="d-flex justify-content-between align-items-start mt-4">
              <button
                className="btn btn-info text-light mb-3"
                onClick={() => dispatch(clearAll())}
              >
                Clear All
              </button>
              <div className="w-25">
                <h5 className="d-flex justify-content-between align-items-center">
                  <span>Subtotal</span>
                  <span>${TotalPrice}</span>
                </h5>
                <span style={{ fontSize: "14px" }}>
                  Taxes and shipping calculated at checkout
                </span>
                <button className="btn btn-dark w-100 border border-success my-3">
                  Checkout
                </button>
                <Link
                  to="/"
                  className="text-decoration-none fw-bold opacity-75 text-light"
                >
                  <span className="me-1">
                    <i className="fa-solid fa-arrow-left-long"></i>
                  </span>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container d-flex flex-column align-items-center">
            <p className="text-center my-5 fs-3 text-light">
              Your Cart Is Currently Empty
            </p>
            <Link
              to="/"
              className="text-decoration-none fw-bold opacity-75 text-light fs-5"
            >
              <span className="me-1">
                <i className="fa-solid fa-arrow-left-long"></i>
              </span>
              Start Shopping
            </Link>
          </div>
        </>
      )}
    </>
  );
}
