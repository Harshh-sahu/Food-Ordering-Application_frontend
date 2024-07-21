import * as actionTypes from "./ActionType";

const initialState = {
  menuItems: [],
  loading: false,
  error: null,
  search: [],
  message: null,
};

const menuItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_MENU_ITEM_REQUEST:
    case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST:
    case actionTypes.DELETE_MENU_ITEMS_REQUEST:
    case actionTypes.SEARCH_MENU_ITEM_REQUEST:
    case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        message: null,
      };
    case actionTypes.CREATE_MENU_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        menuItems: [...state.menuItem, action.payload],
        message: "Food Created Successfully",
      };
    case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        menuItems: action.payload,
      };
    case actionTypes.DELETE_MENU_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        menuItems: state.menuItems.filter(
          (menuItem) => menuItem.id !== action.payload.id
        ),
      };
    case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS:
      console.log("UPDATED ITEMS ID", action.payload.id);
      return {
        ...state,
        loading: false,
        menuItems: state.menuItems.map(
          (menuItem) => menuItem.id !== action.payload
        ),
      };
    case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS:
      console.log("Updated Items id", action.payload.id);
      return {
        ...state,
        loading: false,
        menuItems: state.menuItems.map((menuItem) =>
          menuItem.id === action.payload.id ? action.payload : menuItem
        ),
      };
    case actionTypes.SEARCH_MENU_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        search: action.payload,
      };
    case actionTypes.CREATE_MENU_ITEM_FAILURE:
    case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE:
    case actionTypes.DELETE_MENU_ITEMS_FAILURE:
    case actionTypes.SEARCH_MENU_ITEM_FAILURE:
    case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: null,
      };
      default:
        return state;
  }
};

export default menuItemReducer;
