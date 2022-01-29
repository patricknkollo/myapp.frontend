import axios from "axios";

const SAVE_USER_URL = "http://localhost:8081/api/user/save/user";
const HAVE_USER__WITH_NAME_URL = "http://localhost:8081/api/user/select/user/";
const HAVE_USERS_URL = "http://localhost:8081/api/user/select/users/";
const HAVE_USER_WITH_ID_URL = "http://localhost:8081/api/user/select/user/";

class FrontendBackendComponent {
  postUser(user) {
    return axios.post(SAVE_USER_URL, user);
  }
  getUserWithId(id) {
    return axios.post(HAVE_USER_WITH_ID_URL + id);
  }
  getUsers() {
    return axios.get(HAVE_USERS_URL);
  }
  gettUserWithName(name) {
    return axios.get(HAVE_USER__WITH_NAME_URL, name);
  }
}

export default new FrontendBackendComponent();
