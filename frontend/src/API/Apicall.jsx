import { ApiFetchReq } from "./ApiReq";
import { Backend_url } from "./Beckend_url";

export const registerapi = async (data, header) => {
  return await ApiFetchReq("POST", `${Backend_url}/register`, data, header);
};
export const show = async () => {
  return await ApiFetchReq("GET", `${Backend_url}/show`);
};
export const ViewApi = async (id) => {
  return await ApiFetchReq("GET", `${Backend_url}/user/${id}`);
};
export const UpdateApi = async (id) => {
  return await ApiFetchReq("GET", `${Backend_url}/user/${id}`);
};
export const update = async (id, data, header) => {
  return await ApiFetchReq("PUT", `${Backend_url}/update/${id}`, data, header);
};
export const remove = async (id) => {
  return await ApiFetchReq("DELETE", `${Backend_url}/delete/${id}`, {});
};
// export const delet = async () => {
//   return await ApiFetchReq("DELETE", `${Backend_url}/del/:id`);
// };
