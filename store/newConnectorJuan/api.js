import axios from "axios"
const newConnectorJuan = axios.create({
  baseURL: "https://www.google.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
