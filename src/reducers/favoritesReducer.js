export const favoritesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
      return null;
      
    default:
      return state;
  }
}