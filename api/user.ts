import axios from "axios";
import wrapper from "./wrapper";

const domain = "http://127.0.0.1:8000";

const getUser = wrapper((token: string) => {
  return axios.get(`${domain}/user`, {
    headers: { Authorization: "Bearer " + token },
  });
});

const loginUser = (email: string, password: string) => {
  return axios.get(`${domain}/login`, { params: { email, password } });
};

interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  entityType?: string;
}

const postUser = async (body: User) => {
  return await axios.post(`${domain}/user`, body);
};

export { getUser, postUser, loginUser };
