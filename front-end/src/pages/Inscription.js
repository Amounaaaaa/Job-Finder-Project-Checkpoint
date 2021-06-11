import React, {useEffect, useRef, useState} from 'react'
import {Container, Row} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {registerUser, registerEmployer} from "../actions/authActions";
import FileBase64 from 'react-file-base64';
import DatePicker from 'react-date-picker';
import moment from 'moment';
import {FormGroup,FormLabel} from 'react-bootstrap'




// Sates declarations :
const Inscription = ({history}) => {

    const [employer, setEmployer ] = useState(false)
    const [candidat, setCandidat] = useState(false)
    const [selectedd,setSelectedd]=useState(true)
    const [info, setInfo] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        datebirth:new Date()
    })
    const [infoemp, setInfoemp] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        companyname:"",
        website:"",
        selectedFile:''
    })
    const [errors, setErrors] = useState(null)
    const auth = useSelector(state => state.auth)
    // Rester a l'ecoute si auth.isAuth est updated or not !
    useEffect(() => {
        if (auth.isAuth) {
            history.push("/")
        }
        if (auth.errors) {
            setErrors(auth.errors)
            // setTimeout(()=>{
            //     setErrors(null)
            // },5000)
        }
    }, [auth.isAuth, auth.errors])
    // const errors=useSelector(state=>state.auth.errors)
    const dispatch = useDispatch()
    const phone=useRef()
    /////// Employer Form Action dispatch
    const registerEmp = (e) => {
        e.preventDefault() //utiliser avec le form et pour eviter le chargement de page
        dispatch(registerEmployer(infoemp))
    }
    const [value, setValue] = useState(new Date());
    //const date=value
    // var dateString = '07-15-2016';
    // //var dateString = 'Thu Jul 15 2016 19:31:44 GMT+0200 (CEST)';
    // var dateObj = new Date(value);
    // var momentObj = moment(dateObj);
    // var momentString = momentObj.format('YYYY-MM-DD'); // 2016-07-15

    /*
Get date from datePicker start
*/
    var momentObj = moment(value, 'MM-DD-YYYY');
    var momentString = momentObj.format('YYYY-MM-DD').split("T00"); // 2016-07-15
    console.log("date",momentString)
    const registerNow = (e) => {
        e.preventDefault() //utiliser avec le form et pour eviter le chargement de page
        dispatch(registerUser(info))
    }
    /*
Get date from datePicker end
*/
    //handlechangeemp
    const handlechangeemp = (e) => {
        setInfoemp({...infoemp, [e.target.name]: e.target.value})

    }
    const handlechange = (e) => {
        if(e.target.name==='phone'){
             (+e.target.value)!== NaN  &&  setInfo({...info, [e.target.name]: e.target.value})
    console.log(+e.target.value)
        }
    else
        setInfo({...info, [e.target.name]: e.target.value,datebirth:momentString})
    }
    const handlechangeSelect =(e)=>{
      //  console.log(e.target.value)
        let role= e.target.value
        console.log("user role is ",role)
        if (role==="Employer")
        {
            // console.log("vous ete demande l'inscrit comme Employer !")
            setEmployer(true)
            setCandidat(false)
            setSelectedd(false)
        }
        else {
            setCandidat(true)
            setEmployer(false)
            setSelectedd(false)

            // console.log("vous ete demande l'inscrit comme Candidat !")

        }
    }
    return (
        <div>
            <Container>
                <Row>
                    {selectedd && <form style={{
                        width: "672px", display: 'block',
                        margin: '0 auto'
                    }} className="form-signin">
                        <h2 className="form-signin-heading">Registration</h2>
                        <div className="form-group">
                            <h5 style={{color: "#0f6674"}}>Registration As long as</h5>
                            <select onChange={handlechangeSelect} className="form-select form-select-lg mb-3"
                                    aria-label=".form-select-lg example">
                                <option selected>Choose the type of account</option>
                                <option value="Employer">Employer</option>
                                <option value="Candidat">Canditat</option>
                            </select>
                        </div>
                    </form>}
                </Row>
            </Container>
                <Container style={{width: '800px', marginTop: '100px', background: '#e8e8e4'}}>
                    {/*Candidat  form Start */}
                    { candidat && <Row>
                        <div className="w3-container">   {/* w3-blue*/}
                            <h2> </h2>
                        </div>
                        <form onSubmit={registerNow} className="w3-container w3-card-4">
                            <br></br><br></br>
                            {/*{errors? errors.map(el=><Alert variant="danger"> {el.msg}</Alert> ) : null}*/}
                            {errors && errors.map(el => <span style={{color: 'red'}}> {el.msg}</span>)}
                            <br></br>
                            <br></br>
                            Enter your information here (Candidat Space) &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span
                            style={{color: 'red'}}> (*) </span> <b>Required</b> <br></br><br></br><br></br>

                            {/*DatePicker Block Start---------------------------------------------------*/}
                            {/*<FormGroup>*/}
                            {/*    <FormLabel>Label</FormLabel>*/}
                            {/*    <DatePicker id="example-datepicker" value={value}  onChange={setValue} />*/}
                            {/*</FormGroup>*/}

                            <label className="w3-text-blue">  Enter your birthday <span
                                style={{color: 'red'}}> * &nbsp; &nbsp;</span> &nbsp; &nbsp;  </label><br></br>
                            <DatePicker  onChange={setValue}   />

                            {/*DatePicker Block End -------------------------------------------------*/}

                            <br></br>
                            <br></br>
                            <label className="w3-text-blue">First Name <span
                                style={{color: 'red'}}> * &nbsp; &nbsp;</span> &nbsp;&nbsp;  </label>
                            <input onFocus={() => setErrors(null)} value={info.firstname} required name="firstname" required type="text"
                                   className="form-control "
                                   id="exampleinput  onFocus={()=>setErrors(null)} Email1" aria-describedby="emailHelp"
                                   placeholder="Enter First name"
                                   onChange={handlechange}/><br></br>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                            <label className="w3-text-blue">Last Name <span
                                style={{color: 'red'}}>*</span>  &nbsp; &nbsp;  </label>
                            <input onFocus={() => setErrors(null)} value={info.lastname} name="lastname" required type="text"
                                   className="form-control" id="exampleinput  onFocus={()=>setErrors(null)} Email"
                                   placeholder="Enter Last name" onChange={handlechange}/> <br></br>
                            <label className="w3-text-blue">Email <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                            </label>
                            <input onFocus={() => setErrors(null)} value={info.email} name="email" required type="email"
                                   className="form-control" id="myH1"
                                   placeholder="Enter your email" onChange={handlechange}/><br></br>
                            <label className="w3-text-blue">Password <span
                                style={{color: 'red'}}>*</span>  &nbsp; &nbsp;  </label>
                            <input onFocus={() => setErrors(null)} value={info.password} name="password" required type="password"
                                   className="form-control"
                                   id="exampleinput  onFocus={()=>setErrors(null)} Email1" placeholder="Enter password"
                                   onChange={handlechange}/><br></br>
                            <label className="w3-text-blue">Phone <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                            </label>
                            <input onFocus={() => setErrors(null)}  ref={phone} name="phone" required type="tel"
                                   className="form-control" id="exampleinput  onFocus={()=>setErrors(null)} Email1"
                                   placeholder="Enter your phone number" value={info.phone} onChange={handlechange}/><br></br>
                            <button className="custom-btn btn-1">Save now</button>
                            <br></br>
                            <br></br>
                            <br></br>
                        </form>


                    </Row>}
                    {/*Candidat  form End */}
                {/*//////////////////////////////////////// Employer Form //////////////////////////////////////////////////////////////////////////*/}



                    {/*Employer form Start */}
                    { employer && <Row>
                        <div className="w3-container">   {/* w3-blue*/}
                            <h2>
                            </h2>
                        </div>
                        <form onSubmit={registerEmp} className="w3-container w3-card-4">
                            <br></br><br></br>
                            {/*{errors? errors.map(el=><Alert variant="danger"> {el.msg}</Alert> ) : null}*/}
                            {errors && errors.map(el => <span style={{color: 'red'}}> {el.msg}</span>)}
                            <br></br>
                            <br></br>
                            Enter your information here (Employer space ) &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span
                            style={{color: 'red'}}> (*) </span> <b>Required</b> <br></br><br></br><br></br>
                            <label className="w3-text-blue">First Name <span
                                style={{color: 'red'}}> * &nbsp; &nbsp;</span> &nbsp; &nbsp;  </label>
                            <input  required name="firstname" required type="text" className="form-control "  aria-describedby="emailHelp"
                                   placeholder="Enter First name" onChange={handlechangeemp}/><br></br>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>

                            <label className="w3-text-blue">Last Name <span
                                style={{color: 'red'}}>*</span>  &nbsp; &nbsp;  </label>
                            <input  name="lastname" required type="text"
                                   className="form-control"  placeholder="Enter Last name" onChange={handlechangeemp}/> <br></br>
                            <label className="w3-text-blue">Email <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                            </label>
                            <input  name="email" required type="email"
                                   className="form-control"
                                   placeholder="Enter your email" onChange={handlechangeemp}/><br></br>
                            <label className="w3-text-blue">Password <span
                                style={{color: 'red'}}>*</span>  &nbsp; &nbsp;  </label>
                            <input  name="password" required type="password"
                                   className="form-control"
                                   placeholder="Enter password"
                                   onChange={handlechangeemp}/><br></br>

                            <label className="w3-text-blue">Phone <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                            </label>
                            <input  name="phone" required type="text"
                                   className="form-control" placeholder="Enter your phone number" onChange={handlechangeemp}/><br></br>
                            <label className="w3-text-blue">Company Name <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                            </label>
                            <input  name="companyname" required type="text"
                                    className="form-control"  placeholder="Enter company name" onChange={handlechangeemp}/><br></br>
                            <label className="w3-text-blue">website <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                            </label>
                            <input  name="website" required type="text"
                                    className="form-control" placeholder="Enter website" onChange={handlechangeemp}/><br></br>
                            <FileBase64 type="file" multiple={false}  onDone={({base64})=>setInfo({...info,selectedFile:base64})}

                            />
                            <button className="custom-btn btn-1">Save now</button>
                            <br></br>
                            <br></br>
                            <br></br>
                        </form>
                    </Row>}
                    {/*Employer form End */}
                </Container>

        </div>
    )
}

export default Inscription
