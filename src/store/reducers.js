const initialState = {
    profile: {
      name: '',
      bio: '',
      website: ''
    }
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_PROFILE':
        return {
          ...state,
          profile: {
            ...state.profile,
            ...action.payload
          }
        };
      default:
        return state;
    }
  };