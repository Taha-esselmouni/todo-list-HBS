import axios from 'axios'
import {
  TODO_LIST_FAIL,
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
} from '../constants/todosConstants'

export const listTodos = () => async (dispatch) => {
  try {
    dispatch({ type: TODO_LIST_REQUEST })

    const { data } = await axios.get('/todos/all')

    dispatch({
      type: TODO_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TODO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
