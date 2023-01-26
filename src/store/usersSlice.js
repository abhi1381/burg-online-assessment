import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersRequest: (state) => {
      state.loading = true;
    },
    fetchUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    updateUser: (state, action) => {
      const { id, updates } = action.payload;
      state.users = state.users.map((user) => {
        if (user.id === id) {
          return { ...user, ...updates };
        }
        return user;
      });
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUser,
  updateUser,
  deleteUser,
} = usersSlice.actions;

export default usersSlice.reducer;
