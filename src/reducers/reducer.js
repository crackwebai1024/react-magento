import { combineReducers } from "redux";

import { types } from "../actions/actionTypes";

import initialState from "./initialState";

//make uploadedImageURL reducer

const uploadedImageURL = (state = initialState.uploadedImageURL, action) => {
  switch (action.type) {
    case types.UPLOADED_IMAGE_URL:
      return [action.url];
    default:
      return state;
  }
};

const croppedImageURL = (state = initialState.croppedImageURL, action) => {
  switch (action.type) {
    case types.CROPPED_IMAGE_URL:
      return [action.url, ...state];
    case types.REMOVE_LAST_CROPPED_IMAGE_URL:
      var croppedImageArray = [...state];
      croppedImageArray.shift();
      return croppedImageArray;
    case types.REMOVE_ALL_CROPPED_IMAGE_URL:
      return [];
    default:
      return state;
  }
};

export default combineReducers({ uploadedImageURL, croppedImageURL });
