import axios from "axios";

export const imagesAPI = {
  getImagesData() {
    return axios.get(`https://tzfrontend.herokuapp.com/images`).then(response => response.data);
  },
  getLargeImage(imageId) {
    return axios.get(`https://tzfrontend.herokuapp.com/images/${imageId}`).then(response => response.data.src);
  },
  getImageComments(image_id) {
    return axios.get(`https://tzfrontend.herokuapp.com/comments/${image_id}`).then(response => response.data);
  },
  submitComment(image_id, name, description ) {
    return axios.post(`https://tzfrontend.herokuapp.com/comments/add`, {name, description, image_id})
  }

};
