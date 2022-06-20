import { createReducer } from "@reduxjs/toolkit";
import {
  itemAdd,
  itemDeleted,
  activeFilterChanged,
  statusChange,
} from "../actions";


const initialState = {
  items: [
    { id: "1", text: "Сделать  to-do лист", status: true },
    { id: "2", text: "Пройти урок", status: false },
    { id: "3", text: "Выпить кофе", status: true },
  ],
  activeFilter: "All",
};


const state = createReducer(initialState, {
  [activeFilterChanged]: (state, action) => {
                        state.activeFilter = action.payload;
                      },
  [statusChange]: (state, action) => {
                        state.items = state.items.map((item) => {
                          if(item.id !== action.payload) {
                            return item;
                          }else{
                            item.status = !item.status
                            return item
                          }
                        });
                      },
  [itemAdd]: (state, action) => {
                        state.items.push(action.payload);
                      },
  [itemDeleted]: (state) => {
                        state.items = state.items.filter((item) => item.status !== true);
                      }
})
  

// const state = createReducer(initialState, (builder) => {
//   builder
//     .addCase(activeFilterChanged, (state, action) => {
//       state.activeFilter = action.payload;
//     })
//     .addCase(statusChange, (state, action) => {
//       state.items = state.items.map((item) => {
//         if(item.id !== action.payload) {
//           return item;
//         }else{
//           item.status = !item.status
//           return item
//         }
//       });
//     })
//     .addCase(itemAdd, (state, action) => {
//       state.items.push(action.payload);
//     })
//     .addCase(itemDeleted, (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     })
//     .addDefaultCase(() => {});
// });

// const items = (state = initialState, action) => {
//   switch (action.type) {
//     case "ITEM_ADD":
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     case "ITEM_DELETE":
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload),
//       };
//     case "ITEMS_FILTER_CHANGED":
//       return {
//         ...state,
//         activeFilter: action.payload,
//       };
//     case "ITEM_STATUS_CHANGED":
//       return {
//         ...state,
//         items: state.items.map((item) => {
//           if (item.id !== action.payload) {
//             return item;
//           } else {
//             item.status = !item.status;
//             return item;
//           }
//         }),
//         // (state.items[action.payload - 1].status =
//         //   !state.items[action.payload - 1].status)
//       };
//     default:
//       return state;
//   }
// };
export default state;
