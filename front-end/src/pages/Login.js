import React, {useEffect, useState} from 'react'
import {Alert, Button, Form} from 'react-bootstrap';
import '../css/login.css'
import {Container, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {loginUser} from "../actions/authActions";
import {useDispatch, useSelector} from "react-redux";

const Login = ({history}) => {
   const dispatch= useDispatch()
    const [info, setInfo] = useState({
        email:"",
        password:"",

    })
    const [errors, setErrors] = useState(null)

    const auth=useSelector(state=>state.auth)
    //const errors=useSelector(state=>state.auth.errors)

    useEffect(()=>{
        if (auth.isAuth){
            history.push("/")
        }
        if (auth.errors){
            setErrors(auth.errors)
            // setTimeout(()=>{
            //     setErrors(null)
            // },5000)
        }

    },[auth.isAuth,auth.errors])
    const Login=e=>{
         e.preventDefault()
        dispatch(loginUser(info))
    }
    const  handlechange=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }
    return (

        <div>
            <div>
                <Container  style={{width:'800px',marginTop:'80px',xmarginTop:'100px',background:'#e8e8e4'}}>
                    <Row>
                        <form  onSubmit={Login}>
                            <br></br><br></br>
                            {/*{errors? errors.map(el=><Alert variant="danger"> {el.msg}</Alert> ) : null}*/}
                            {errors && errors.map(el=> <span  style={{color:'red'}}      > {el.msg}</span>)}
                            <br></br>
                            <br></br>
                           {/*<div className="valid-feedback">Valid.</div>*/}
                           {/* <div className="invalid-feedback">Please fill out this field.</div>*/}
                             <label>Email <span style={{color:'red'}}>*</span> </label>
                            <input   onFocus={()=>setErrors(null)}     name="email" required type="email" className="form-control" id="exampleInputEmail1"           onChange={handlechange}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <br></br>
                            <label>Password <span style={{color:'red'}}>*</span> </label>
                            <input  onFocus={()=>setErrors(null)}  name="password" required type="password" className="form-control" id="exampleInputEmail1"     onChange={handlechange}/><br></br>
                             <button type="submit" className="custom-btn btn-1">Save now</button> <br></br> <br></br> <br></br>
                            Not a member?
                            <Link style={{textDecoration: 'none'}}to="/register">
                                <button className="custom-btn btn-4">
                                    &nbsp;&nbsp;Register now</button></Link>
                            <br></br>
                            <br></br>
                            <br></br>
                        </form>
                        {/*<form className="was-validated">*/}
                        {/*    <div className="form-group">*/}
                        {/*        <label htmlFor="uname">Nom d'utilisateur:</label>*/}
                        {/*        <input type="text" className="form-control" id="uname" placeholder="Entre le nom d'utilisateur" name="uname" required/>*/}
                        {/*            <div className="valid-feedback">Valid.</div>*/}
                        {/*            <div className="invalid-feedback">S'il vous plaît remplir ce champ.</div>*/}
                        {/*    </div>*/}
                        {/*    <div className="form-group">*/}
                        {/*        <label htmlFor="pwd">Mot de passe:</label>*/}
                        {/*        <input type="password" className="form-control" id="pwd" placeholder="Entrer le mot de passe" name="pswd" required/>*/}
                        {/*            <div className="valid-feedback">Valid.</div>*/}
                        {/*            <div className="invalid-feedback">S'il vous plaît remplir ce champ.</div>*/}
                        {/*    </div>*/}
                        {/*    <div className="form-group form-check">*/}
                        {/*        <label className="form-check-label">*/}
                        {/*            <input className="form-check-input" type="checkbox" name="remember" required/> Je suis d'accord.*/}
                        {/*                <div className="valid-feedback">Valid.</div>*/}
                        {/*                <div className="invalid-feedback">Cochez cette case pour continuer.</div>*/}
                        {/*        </label>*/}
                        {/*    </div>*/}
                        {/*    <button type="submit" className="btn btn-primary">Soumettre</button>*/}
                        {/*</form>*/}
                    </Row >

                </Container>

            </div>

        </div>
    )
}
export default Login
