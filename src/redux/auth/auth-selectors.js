const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;
const getIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRefreshing,
};
export default authSelectors;
