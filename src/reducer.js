
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: "BQDB6gklhIynaGTnATLvKnW61Rly3yi2NQVXRwH-0gklYFtvKRddEbhP6uxOkiD1LNgFGNLV_hlIXgR-R9lG_buBVTHVZ1_DGqGCuPf0cf3vcyssNHka-ZiRaxngbMdGQmVRVCOFIYaaasy71ezXULWVWauNBX-qJ06uZsfaNnYR9Hov",
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

      default:
        return state;
    }
  };
  
  export default reducer;