import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  menu: [],
  loading: false,
  orders: [],
};

const baseURL = 'https://classwork5-a1e3f-default-rtdb.asia-southeast1.firebasedatabase.app'

export const getMenu = createAsyncThunk(
  'menu/fetchMenu',
  async () => {
    const response = await axios.get(baseURL + '/menu.json');
    return response.data;
  }
);

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    addToCardAction: (state, action) => {
      const isAlreadyIn = state.orders.filter(item => item.title === action.payload.title).length > 0;
      if (isAlreadyIn) {
        const index = state.orders.findIndex(item => item.title === action.payload.title);
        if (index > -1) {
          state.orders[index].amount = state.orders[index].amount + 1;
        }
      } else {
        state.orders.push({
          ...action.payload,
          amount: 1,
        })
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.menu = action.payload;
      });
  },
});

export const { addToCardAction } = menuSlice.actions;

export const selectMenu = (state) => state.menu.menu;

export const selectOrders = (state) => state.menu.orders;


export default menuSlice.reducer;
