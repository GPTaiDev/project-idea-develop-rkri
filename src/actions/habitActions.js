export const addHabit = (habit) => ({
  type: 'ADD_HABIT',
  payload: habit
});

export const deleteHabit = (id) => ({
  type: 'DELETE_HABIT',
  payload: id
});

export const toggleHabit = (id) => ({
  type: 'TOGGLE_HABIT',
  payload: id
});