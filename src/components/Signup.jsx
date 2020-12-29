import React ,{useState} from "react"
import "./Sign.css"
import react from "react"
import firebase from "../config/Firebase"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
function SignUp (props){
       const [name,setName]= useState("")
         const [email,setEmail]= useState("")
       const [password,setPassword]= useState("")
     
  const submit=()=>{

  if(name != "" && email != "" && password != "" ){




    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user)
     
      setName=""
      setPassword=""
      setPassword=""
      
      // Signed in 
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });
    props.history.push("/Login")
  }
else{
      alert("please put your basic information")
}


}



  

    return(
          <div  className="main"> 
                      <h1>SIGN UP</h1>
                     <form>
         <label>Name : </label><br/>
         <TextField id="standard-basic" className="input" value={name}  label="Name"  onChange={(e)=> setName(e.target.value)} /><br/>
         <label>Email : </label> <br/>
         <TextField id="standard-basic" className="input" value={email}  label="email" type="email"  onChange={(e)=> setEmail(e.target.value)} /><br/>
          <label>Password : </label> <br/>
          <TextField id="standard-basic" className="input"  value={password} label="Password" type="password"  onChange={(e)=> setPassword(e.target.value)} /><br/> <br/>       
          <Button variant="contained" color="primary" onClick={submit}>Sign Up</Button>
        


                     </form>
           
                
               </div>
    )   

}

export default SignUp;