import { legacy_createStore as createStore } from 'redux'

const initialState = {
  show: true,
  theme: 'light',
}

export default function changeState (state = initialState, action) {
  switch (action.type) {
    case 'show':
      return { ...state, show: action.value }
    default:
      return state
  }
}
