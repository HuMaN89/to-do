import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [
      { id: "1", text: "Сделать  to-do лист", status: true },
      { id: "2", text: "Пройти урок", status: false },
      { id: "3", text: "Выпить кофе", status: true },
    ],
    activeFilter: "All",
  };

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        activeFilterChanged: (state, action) => {
            state.activeFilter = action.payload;
            },
        statusChange: (state, action) => {
                    state.items = state.items.map((item) => {
                    if(item.id !== action.payload) {
                        return item;
                    }else{
                        item.status = !item.status
                        return item
                    }
                    });
                },
        itemAdd: (state, action) => {
                    state.items.push(action.payload);
                },
        itemDeleted: (state) => {
                    state.items = state.items.filter((item) => item.status !== true);
                }
            }
});


const {actions, reducer} = itemsSlice;

export default reducer;
export const {
    activeFilterChanged,
    statusChange,
    itemAdd,
    itemDeleted
} = actions;
