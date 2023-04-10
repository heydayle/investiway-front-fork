import { createSlice } from '@reduxjs/toolkit';
import type { User } from '../../utils/interfaces';
import request from '../../services/request';
import { setLoading } from '../common';

const ACTION = {
  GET_USER: 'GET_USER',
};
interface UserStore {
  currentUser: User;
  token: string;
}
const userSlice = createSlice({
  name: 'user',
  initialState: {} as UserStore,
  reducers: {
    setUser(state, { payload }) {
      state.currentUser = payload;
    },
    setToken(state, { payload }) {
      state.token = payload;
      localStorage.setItem('token', payload);
    },
    [ACTION.GET_USER]() {
      request
        .post('/')
        .then(() => {
          // setUser(result.data)
        })
        .catch()
        .finally();
    },
    refreshToken() {
      setLoading(true);
      request
        .get('/auth/refresh')
        .then((response) => {
          setToken(response.data);
        })
        .catch()
        .finally(() => {
          setLoading(false);
        });
    },
  },
});

export const { setUser, setToken } = userSlice.actions;
export default userSlice.reducer;
