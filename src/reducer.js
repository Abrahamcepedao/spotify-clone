export const initialState = {
  user: null,
  //token: "BQAR0oF8-MTRpx4lnSvtjnfraSbOoxlPFyhlL2gUUKwUpVNdYHXQrZmr8e15C0uFRxg_82krg1gGugyx7s7SguFdNZ6k49KPRci7CqGy2ApDDqKEWMmZImozfmjSc6OeaQJfgJU4iFc4hSyzDTLP6No9Q6DB6g",
  playlists: [],
  playlist: null,
  playing: false,
  item: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      case "SET_PLAYLIST":
        return {
          ...state,
          playlist: action.playlist,
        };
      default:
        return state;
    }
}

export default reducer;