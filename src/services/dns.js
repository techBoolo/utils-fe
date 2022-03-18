import axios from 'axios'
const backend_url = process.env.REACT_APP_BACKEND_ROOT_URL

export const resolvedns = async (hostname) => {
  const { data } = await axios.post(`${backend_url}/dns/resolve`, {hostname})
  return data;
}
export const reversedns = async (ip) => {
  const { data } = await axios.post(`${backend_url}/dns/reverse`, {ip})
  return data;
}
