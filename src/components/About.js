import react from "react"
// import {Link} from "react-router-dom"
import React ,{useEffect,useState} from "react"
import firebase from "../config/Firebase"
import "./Login.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const Navi=(props)=>{
 
        const db=firebase.database();
        const  [allData,setAlldata]=useState([])


        useEffect(()=>{
     firebase.auth().onAuthStateChanged((user)=>{
     if(user){
               props.history.push("/About")
     } else{
              alert("user is not signed in")
              props.history.push("/Login")
     }
        
     });

      db.ref("student").on("value", (data)=>{
          const arr =[]
          const dt=data.val();
          for(let id in dt){
                    arr.push({id,...dt[id]})
          }
         setAlldata(arr)
    
      })

        },[]);
   
        const logout=()=>{
                   firebase.auth().signOut()
        }

  const [name,setName]=useState('')
  const [fname,setFname]=useState('')
  const [cls,setClassnum]=useState('')
  const [address,setAddress]=useState('')

 const submit=()=>{
         if(name != "" &&  fname != "" && cls  != "" && address !=""){
       let  form ={
               name,
               fname,
               cls,
               address,
          }
                 db.ref("student").push(form).then(()=>{
                       
                 })

         


        }
               else{
                        alert("please filled all the field")
               }  
 }



        return(  

                <div>
              
                <div main>
                         <h1>Dars Gahe kursheed Sec School</h1>
                          <h1>Admessionn form</h1>
  
                          <form action="">
                  <label> Name   :</label>   <TextField id="standard-basic" className="input" value={name}  label="Name"  onChange={(e)=> setName(e.target.value)} />  <br/>
                  <label> F.Name :</label>   <TextField id="standard-basic" className="input" value={fname}  label="fname"  onChange={(e)=> setFname(e.target.value)} />  <br/>
                  <label> Class  :</label>   <TextField id="standard-basic" className="input" value={cls}  label="class"  onChange={(e)=> setClassnum(e.target.value)} />  <br/>
                  <label> Address :</label>  <TextField id="standard-basic" className="input" value={address}  label="address"  onChange={(e)=> setAddress(e.target.value)} /> <br/> <br />
                  <Button variant="contained" color="secomdary" onClick={submit}>submit</Button>
                  <Button variant="contained" color="primary" onClick={logout}>logout</Button>
                      </form>
                     </div>  
                   
                       <div className="data">
                             <table>
                                     <tr>
                                     <th>Name </th>        <br />
                                     <th>f.Name </th><br />
                                     <th>Class </th><br />
                                     <th> Address </th><br />
                                      </tr>

                                      {allData && allData.map((d,i)=>{
                                              return(
                                                      <tr>
                                                              <td>{ name} </td>
                                                              <td> {fname} </td>
                                                              <td> {cls} </td>
                                                               <td> {address}  </td>
                                                              </tr>
                                              )
                                      })}
                                      </table>  
                                                            
                               
                                </div>





                  
                 </div>


        



                
        
        )
}

export default Navi;