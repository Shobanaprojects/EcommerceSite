import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    storeProducts: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload)
    },
    incrementItem: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.quantity == 0) {
          item.quantity = 0
        } else {
          item.quantity -= 1;

        }
      }
    },
  }
})


export const { storeProducts, removeItem, incrementItem, decrementItem } = ProductSlice.actions

export default ProductSlice.reducer