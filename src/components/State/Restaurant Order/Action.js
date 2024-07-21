import {
  GET_RESTAURANTS_ORDER_FAILURE,
  GET_RESTAURANTS_ORDER_REQUEST,
  GET_RESTAURANTS_ORDER_SUCCESS,
  UPDATE_ORDER_STATUS_FAILURE,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
} from "./ActionType";

import { api } from "../../../components/config/api.js";

export const updateOrderStatus = ({ orderId, orderStatus, jwt }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });
      const response = await api.put(
        `/api/admin/orders/${orderId}/${orderStatus}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      const updatedOrder = response.data;
      console.log("updated Order ", updatedOrder);
      dispatch({
        type: UPDATE_ORDER_STATUS_SUCCESS,
        payload: updatedOrder,
      });
    } catch (error) {
      console.log("catch error", error);
      dispatch({
        type: UPDATE_ORDER_STATUS_FAILURE,
        error,
      });
    }
  };
};



export const fetchRestaurantOrder = ({ restaurantId, orderStatus, jwt }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_RESTAURANTS_ORDER_REQUEST });
      const {data} = await api.get(
        `/api/admin/orders/restaurant/${restaurantId}`,
        {params:{ order_status:orderStatus},
        
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      const orders = data;
      console.log("restaurant Order--- ", orders);
      dispatch({
        type: GET_RESTAURANTS_ORDER_SUCCESS,
        payload: orders,
      });
    } catch (error) {
      console.log("catch error", error);
      dispatch({
        type: GET_RESTAURANTS_ORDER_FAILURE,
        error,
      });
    }
  };
};
