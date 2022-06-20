import { createAction } from "@reduxjs/toolkit";
export const itemDeleted = createAction('ITEM_DELETE')
// export const itemDeleted = (id) => {
//   return {
//     type: "ITEM_DELETE",
//     payload: id,
//   };
// };

export const itemAdd = createAction('ITEM_ADD')
// export const itemAdd = (item) => {
//   return {
//     type: "ITEM_ADD",
//     payload: item,
//   };
// };

export const activeFilterChanged = createAction('ITEMS_FILTER_CHANGED')
//   export const activeFilterChanged = (filter) => {
//   return {
//     type: "ITEMS_FILTER_CHANGED",
//     payload: filter,
//   };
// };

export const statusChange = createAction('ITEM_STATUS_CHANGED')
//   export const statusChange = (id) => {
//   return {
//     type: "ITEM_STATUS_CHANGED",
//     payload: id,
//   };
// };
