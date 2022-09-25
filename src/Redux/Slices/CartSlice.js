import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const ProductFind = state.find(
        (product) => product.id === action.payload.id
      );

      if (ProductFind) {
        ProductFind.quantity++;
      } else {
        const deepCopyProduct = { ...action.payload, quantity: 1 };
        state.push(deepCopyProduct);
        const notify = () => {
          toast.success(`Product Add To Cart`, {
            position: "bottom-left",
          });
        };
        notify();
      }
    },
    removeFromCart: (state, action) => {
      const notify = () => {
        toast.error(`${action.payload.title} Removed From Cart`, {
          position: "bottom-left",
        });
      };
      notify();
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearAll: (state, action) => {
      const notify = () => {
        toast.success(`Clear All Product`, {
          position: "bottom-left",
        });
      };
      notify();
      return [];
    },
    Increse: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );

      findProduct.quantity += 1;

      const notify = () => {
        toast.info(`Increase Product Quantity`, {
          position: "bottom-left",
        });
      };
      notify();
    },
    Decrese: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );

      findProduct.quantity -= 1;

      if (findProduct.quantity !== 0) {
        const notify = () => {
          toast.info(`Decrease Product Quantity`, {
            position: "bottom-left",
          });
        };
        notify();
      }
    },
  },
});

export const { addToCart, removeFromCart, clearAll, Increse, Decrese } =
  CartSlice.actions;
export default CartSlice.reducer;
