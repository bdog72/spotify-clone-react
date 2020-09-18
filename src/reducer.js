//
//

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: null,
  token:
    'CLNG6uoB7Wl4gLKAiGMHH5Ok5C0NrxxmB3epx2ZbRrhRKLehlpqhbUTxu4E2OLZLtQMQGnI7rFOajPLzVBb2DYFhaqZ_wFb1pJD4zbalFQdhz8TwqoXSXYQF8wciqzxBWuiL-ARF5l2FkEPiPHe4oKiYJUDBkOuhfLh0AAcl__zjcT',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
