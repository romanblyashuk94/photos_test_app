import axios from "axios";

export const imagesAPI = {
  getImagesData() {
    return axios.get(`https://tzfrontend.herokuapp.com/images`).then(response => response.data);
  },
};
