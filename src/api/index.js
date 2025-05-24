// src/api/index.js
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000',  // json-server の URL に合わせる
  timeout: 5000,
})
