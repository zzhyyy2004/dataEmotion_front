import api from "../http/api";

const UserHTTPService = {
  login: async function (email, password) {
    const data = {
      email,
    };

    const user = await api.get(`/users?email=${email}`);
    console.log("---user");
    console.log(user);
    console.log("---user");
    return user;
  },
};

export default UserHTTPService;
