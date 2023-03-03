import { getToken, setToken, removeToken } from '@/utils/auth';
import { login } from '@/api/login';

export default {
  state: {
    token: getToken(),
  },
  getters: {
    token: (state) => state.token,
  },
  mutations: {
    SET_TOKEN(state, token) {
      // console.log(token);
      state.token = token;
    },
  },
  actions: {
    login({ commit }, accountInfo) {
      return new Promise((resolve, reject) => {
        login(accountInfo)
          .then((res) => {
            const { data } = res;
            commit('SET_TOKEN', data.response.token);
            setToken(data.response.token);
            resolve(data);
          })
          .catch((err) => reject(err));
      });
    },
    signOut({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          const empty = {
            token: undefined,
            code: [],
            user: [],
          };
          commit('SET_TOKEN', empty);
          removeToken();
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
  },
};
