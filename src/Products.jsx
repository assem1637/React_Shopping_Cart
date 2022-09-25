import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Redux/Slices/CartSlice";

export default function Products() {
  const Products = useSelector((state) => state.ProductSlice);
  const dispatch = useDispatch();
  console.log(Products);

  return (
    <>
      <div className="container my-5">
        <div className="row gy-4 d-flex justify-content-center align-items-center">
          {Products.length > 0 ? (
            Products.map((product, i) => {
              return (
                <div
                  className="col d-flex justify-content-center align-items-center"
                  key={i}
                >
                  <div
                    className="card bg-transparent"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={product.images[0]}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <h6 className="card-title opacity-75">
                        {product.price}$
                      </h6>
                      <p className="card-text text-muted">
                        {product.description}
                      </p>
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(addToCart(product))}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            }).slice(0, 30)
          ) : (
            <span className="w-100 h-100 d-flex justify-content-center align-items-center ">
              <i className="fa-solid fa-spinner fa-spin-pulse fs-1"></i>
            </span>
          )}
        </div>
      </div>
    </>
  );
}
