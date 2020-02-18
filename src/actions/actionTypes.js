export const types = {
  UPLOADED_IMAGE_URL: "UPLOADED_IMAGE",
  CROPPED_IMAGE_URL: "CROPPED_IMAGE_URL",
  REMOVE_LAST_CROPPED_IMAGE_URL: "REMOVE_LAST_CROPPED_IMAGE_URL",
  REMOVE_ALL_CROPPED_IMAGE_URL: "REMOVE_ALL_CROPPED_IMAGE_URL"
};

export function storeUploadedImageURL(url) {
  return {
    type: types.UPLOADED_IMAGE_URL,
    url
  };
}

export function storeCroppedImageURL(url) {
  return {
    type: types.CROPPED_IMAGE_URL,
    url
  };
}

export function removeLastCroppedImageURL(url) {
  return {
    type: types.REMOVE_LAST_CROPPED_IMAGE_URL,
    url
  };
}

export function resetCropURLArray(url) {
  return {
    type: types.REMOVE_ALL_CROPPED_IMAGE_URL,
    url: null
  };
}
