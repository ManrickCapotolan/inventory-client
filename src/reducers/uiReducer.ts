import * as uiActions from '../actions/uiActions';

export const initialState: UIState = {
  isLoading: false,
};

const reducer = (state: UIState = initialState, action: uiActions.Actions): UIState => {
  switch (action.type) {
    case uiActions.START_LOADING:
      return { ...state, isLoading: true };
    case uiActions.STOP_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export default reducer;
