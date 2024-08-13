import { Axios } from "./axios";

export const Signupapi = async (params) =>{
   const res = await Axios.post('/signup',params)
   return res
}
export const Signinapi = async (params) =>{
    const res = await Axios.post('/signin',params)
    return res
 }