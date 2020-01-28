const INITIAL_STATE = { data: [
  
] };
  
  export default function messages(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'SUCCESS_SAVE_MESSAGE':
        return { data: [...state.data, action.payload.data] };
      case 'SUCCESS_DELETE_MESSAGE':
        return { data: state.data.filter(message => message.id !== action.payload.data ? message : null) };
      default:
        return state;
    }
  }