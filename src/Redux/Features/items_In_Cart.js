import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  items: [],
};

const item_In_Cart_Slice = createSlice({
  name: "item_In_Cart",
  initialState,
  reducers: {
    incrementItem: (state) => {
      state.value += 1;
    },
    decrementItem: (state) => {
      state.value -= 1;
    },
    incrementItemByAmount: (state, action) => {
      state.value += action.payload;
    },

    decrementItemByAmount: (state, action) => {
      state.value -= action.payload;
    },

    deletItem: (state, action) => {
      const [deleteId, count] = action.payload;
      const index = state.items.findIndex(
        (element) => element.item.id == deleteId.id
      );
      console.log(index);
      state.items.splice(index, 1);
      state.value -= count;
    },

    addItem: (state, action) => {
      const [nItems, payloadItem] = action.payload;

      const itemExists = state.items.some((el) => {
        if (el.item.id == payloadItem.id && nItems > 0) {
          el.counter += nItems;
          return true;
        }
      });

      if (itemExists == false && nItems > 0) {
        state.items.push({ counter: nItems, item: payloadItem });
      }
    },

    updateItem: (state, action) => {
      const [nItems, payloadItem] = action.payload;

      const itemExists = state.items.some((el) => {
        if (el.item.id == payloadItem.id && nItems > 0) {
          el.counter -= nItems;
          return true;
        }
      });
    },
  },
});

export const {
  incrementItem,
  decrementItem,
  incrementItemByAmount,
  addItem,
  decrementItemByAmount,
  deletItem,
  updateItem,
} = item_In_Cart_Slice.actions;
export default item_In_Cart_Slice.reducer;
