// reducer.js
const initialState = {
    value: "", // Initial state for the value
};
  
const reducer = (state = initialState, action) => {
switch (action.type) {
    case 'UPDATE_VALUE':
    return {
        ...state,
        value: action.value
    };
    default:
    return state;
}
};

export default reducer;
  