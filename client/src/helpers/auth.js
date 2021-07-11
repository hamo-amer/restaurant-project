import { setCookie } from "./cookies"
import { setLocalStorage } from "./localStorage";


export const setAuthentification=(token,user)=>{
    setCookie('token',token);
    setLocalStorage('user',user);
}