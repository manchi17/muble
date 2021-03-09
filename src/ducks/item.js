// Actions
const GET_ITEM_START = "ducks/item/GET_ITEM_START";
const GET_ITEM_SUCCESS = "ducks/item/GET_ITEM_SUCCESS";
const GET_ITEM_FAIL = "ducks/item/GET_ITEM_FAIL";

// Reducer
export default function reducer(
  state = { loading: false, tokens: null, error: null, information: [] },
  action = {}
) {
  switch (action.type) {
    case GET_ITEM_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        information: action.payload,
      };

    case GET_ITEM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

// Action Creators
export function getItemStart() {
  return { type: GET_ITEM_START };
}

export function getItemSuccess(data) {
  return { type: GET_ITEM_SUCCESS, payload: data };
}

export function getItemFail(error) {
  return { type: GET_ITEM_FAIL, payload: error };
}

export function getItem() {
  return async (dispatch) => {
    dispatch(getItemStart());
    try {
      let response = await fetch(`https://ctp.ltd/api.json`);
      let json = await response.json();
      dispatch(getItemSuccess(json));
    } catch (error) {
      dispatch(getItemFail());
    }
  };
}