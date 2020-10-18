import axios from 'axios';

const api = axios.create({
  // Na maquina com emulador
  // baseURL: 'http://localhost:3333',
  // digitar o comando abaixo no terminal em caso de emulador android
  // adb reverse tcp:3333 tcp:3333
  // No aparelho via Expo
  baseURL: 'http://192.168.43.9:3333'
});

export default api;