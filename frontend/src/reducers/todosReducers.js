import {
  TODO_LIST_FAIL,
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
} from '../constants/todosConstants'

export const todosReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case TODO_LIST_REQUEST:
      return { loading: true, todos: [] }
    case TODO_LIST_SUCCESS:
      return { loading: false, todos: action.payload }
    case TODO_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
