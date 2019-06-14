const initialState = {
  name: 'tung',
  age: 23
};

const myReducer = (state = initialState,  action) => {
  if(action.type === 'status'){
    const {name, age} = action.student;

    return {
        name,
        age
      }

  }
  return state;
};
export default myReducer
