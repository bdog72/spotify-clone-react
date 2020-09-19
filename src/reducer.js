//
//

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  // token:
  //   'CLNG6uoB7Wl4gLKAiGMHH5Ok5C0NrxxmB3epx2ZbRrhRKLehlpqhbUTxu4E2OLZLtQMQGnI7rFOajPLzVBb2DYFhaqZ_wFb1pJD4zbalFQdhz8TwqoXSXYQF8wciqzxBWuiL-ARF5l2FkEPiPHe4oKiYJUDBkOuhfLh0AAcl__zjcT',
  // token:
  //   'BQDkYZQRZ3R4gBMSo_uKcf0vbzN0u6cAz_KjIvAOX2s8d7NFbDMzKib8wDLfiD2atlMLjwUI9tO-TykCXrtbGOQxUYtbyHF1-EvL0uihbGIhf_FCoxCjXon1qDn1ac7vO1VJawKbyJi7lkRq26OsE1XUhD1HcH-_VXgGfiFGRB5xlgPn',
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
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'MELODIC_TECHNO':
      return {
        ...state,
        melodicTechno: action.melodicTechno,
      };
    default:
      return state;
  }
};

export default reducer;
