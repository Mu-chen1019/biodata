const initialState = {
  sidebarShow: true,
  theme: 'light',
}

export default function changeState (state = initialState, action) {
  switch (action.type) {
    case 'sidebarShow':
      console.log(action,{ ...state, sidebarShow: action.value });
      return { ...state, sidebarShow: action.value };
    default:
      return state
  }
}

