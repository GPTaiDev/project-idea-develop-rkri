const initialState = [];

const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HABIT':
      return [...state, action.payload];
    case 'DELETE_HABIT':
      return state.filter(habit => habit.id !== action.payload);
    case 'TOGGLE_HABIT':
      return state.map(habit => habit.id === action.payload ? { ...habit, completed: !habit.completed } : habit);
    default:
      return state;
  }
};

export default habitReducer;