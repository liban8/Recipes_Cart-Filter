import { createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";

const initialState = {
  carItems : [],
  amount: 0,
  total: 0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add:(state, action)=>{
      state.amount = state.amount + 1;
      const cartitem = state.carItems.find((cartitem) => (cartitem.id === action.payload.id));
      cartitem ?  (cartitem.amount = cartitem.amount + 1) : state.carItems.push({...action.payload, amount : 1})
    },
    increase : (state, action)=>{
      state.amount = state.amount  + 1;
      const itemIndex = state.carItems.findIndex((cartitem)=>(cartitem.id === action.payload.id));
      state.carItems[itemIndex].amount +=1;
    },
    decrease :(state, action) =>{
      const itemIndex = state.carItems.findIndex((carItem)=> carItem.id  === action.payload.id);
      state.carItems[itemIndex].amount > 1 && state.carItems[itemIndex].amount-- && state.amount --;
    },
    remove:(state, action)=>{
      state.carItems.map((carItem) =>{
        if(carItem.id === action.payload.id){
          state.carItems = state.carItems.filter((item) => item.id  !== carItem.id);
          state.amount = state.amount -carItem.amount;
        }
      })
    },
    total : (state)=>{
      let total= 0;
      state.carItems.forEach((carItem)=>{
        total += carItem.amount * carItem.price
      })
      state.total = total
    },
    clean :(state, action) =>{
      state.carItems = [],
      state.amount=  0
    }
    // total:(state)=>{
    //   let total = 0;
    //   state.carItems.forEach((item)=>{
    //     total +=item.amount *  item.price
    //   })
    //   state.total = total;
    // }
  }
})
export const {add , increase, decrease, remove, total, clean} = cartSlice.actions;
export default cartSlice.reducer;





















// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   carItems: [],
//   amount: 0,
//   total: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     add: (state, actions) => {
//       state.amount = state.amount + 1;
//       const cartitem = state.carItems.find(
//         (item) => item.id === actions.payload.id
//       );
//       cartitem
//         ? (cartitem.amount = cartitem.amount + 1)
//         : state.carItems.push({ ...actions.payload, amount: 1 });
//     },

//     increase: (state, action) => {
//       state.amount + state.amount + 1;
//       const itemIndex = state.carItems.findIndex(
//         (cartitem) => (cartitem.id = action.payload.id)
//       );
//       state.carItems[itemIndex].amount+=1;
    
//     },
//     decrease: (state, action) => {
//       const itemIndex = state.carItems.findIndex(
//         (item) => item.id = action.payload.id
//       );
//       state.carItems[itemIndex].amount > 0 &&
//         state.carItems[itemIndex].amount-- &&
//         state.carItems[itemIndex].amount --;
//     },

   
//   },
// });
// export const { add, increase, decrease } = cartSlice.actions;
// export default cartSlice.reducer;
