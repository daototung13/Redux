const initialState = false;

const myReducer = (state = initialState,  action) => {
  if(action.type === 'toggle'){
    state = !state;
    return state
  }
  return state;
};
export default myReducer
