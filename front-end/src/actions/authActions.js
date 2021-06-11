import {
    REGISTER_SUCCESS,
    REGISTER_FAIl,
    LOGIN_SUCCESS,
    LOGIN_FAIl,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIl,
    LOGOUT,
    REGISTER_Emp_SUCCESS,
    REGISTER_Emp_FAIl,
    LOAD_EMPLOYER_SUCCESS,
    LOAD_EMPLOYER_FAIL,
    GET_CATEGORIE_SUCCESS, GET_CATEGORIE_FAIL, GET_CATEGORIE_LOADING
} from './types'
import axios from "axios";
import setTocken from "../setTocken";
// import {setTocken} from '../setTocken'


export const registerUser=(info)=>dispatch=>{
    axios.post('/register',info)
        .then(res=>dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        }))
        .catch(err=>dispatch({
            type:REGISTER_FAIl,
            payload:err.response.data.errors,
        }))
}
export const registerEmployer=(infoemp)=>dispatch=>{
    axios.post('/registeremployer',infoemp)
        .then(res=>dispatch({
            type:REGISTER_Emp_SUCCESS,
            payload:res.data
        }))
        .catch(err=>dispatch({
            type:REGISTER_Emp_FAIl,
            payload:err.response.data.errors,
        }))
}
export const getcategories=()=>dispatch=>{

    dispatch({
        type:GET_CATEGORIE_LOADING
    })


    axios.get('/categorie')
        .then(res=>dispatch({
            type:GET_CATEGORIE_SUCCESS,
            payload:res.data
            }))
            .catch(err=>dispatch({
                type:GET_CATEGORIE_FAIL,
                payload:err.response.data.errors
            }))


}
///////LOAD USER:
export const loadUser=()=>dispatch=>{
    setTocken()
    axios.get('/login')
        .then(res=>dispatch({
            type:LOAD_USER_SUCCESS,
            payload:res.data
        }))
        .catch(err=>dispatch({
            type:LOAD_USER_FAIl,
            payload:err.response.data.errors
        }))
}
//Load employer:
export const loadEmployer=()=>dispatch=>{
    setTocken()
    axios.get('/loginemp')
        .then(res=>dispatch({
            type:LOAD_EMPLOYER_SUCCESS,
            payload:res.data
        }))
        .catch(err=>dispatch({
            type:LOAD_EMPLOYER_FAIL,
            payload:err.response.data.errors
        }))
}

export const loginUser=data=>dispatch=>{
    console.log("data====>",data)
    axios.post('/login',data)
        .then(res=>
            dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data

        }))
        .catch(err=>dispatch({
            type:LOGIN_FAIl,
            payload:err.response.data.errors
        }))
}
export const logoutUser=()=>dispatch=>{
    dispatch({
        type:LOGOUT
    })
}



