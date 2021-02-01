import {useEffect} from 'react';
import axios from 'axios'
import Link from "next/link";
const baseURL = 'https://dummyapi.io/data/api'
const contact = () => {
  return (
    <div id="contact" style = {{fontFamily: "Helvetica"}}>
   <table style= {{width:" 98%;", padding: "20px", margin:"1% 0px 0px 1%",
     borderStyle: "solid",borderColor: "lightsteelblue", borderRadius: "5px", backgroundColor: "lightsteelblue"}} align = "center">
    <tr align="center">
        <td><Link href={"/home"}><label style = {{color: "white",fontWeight: "bold"}}>Home</label></Link></td>
        <td><Link href={"/gallery"}><label style = {{color: "white",fontWeight: "bold"}}>Gallery</label></Link></td>
        <td><Link href={"/contact"}><label style = {{color: "white",fontWeight: "bold"}}>Contact</label></Link></td>
        <td><Link href={"/calgpa"}><label style = {{color: "white",fontWeight: "bold"}}>GPA Calculator</label></Link></td>
        <td><Link href={"/post"}><label style = {{color: "white",fontWeight: "bold"}}>Post</label></Link></td>
    </tr>
    </table>
    <h1 style = {{textAlign: "center"}}>contact</h1>
    <table style= {{width: "50%",borderStyle: "solid",borderColor: "lightslategray",
     borderRadius: "20px", backgroundColor: "lightslategray", padding: "20px", color: "white", marginTop: "20px"}} align="center">
        <tr>
            <td>
                <h2>Sirapop Para</h2>
                <p>Computer engineering student</p>
                <p>sirapop_p@cmu.ac.th</p>
                <p>(+66)88-5717587</p>
            </td>
                <img style = {{ float: "right;", width: "150px", height: "150px", marginTop:"15px", marginLeft: "300px", borderRadius: "20%"}}
                src="profile.jpg" alt="profile pic"></img>
        </tr>
     </table>

     <table style = {{width: "50%"}} align="center">
        <tr>
            <td><h3>Name :</h3></td>
            <td><p><input type="text" value = ""></input></p></td>
        </tr>   
        <tr>
            <td><h3>Email :</h3></td>
            <td><p><input type="email" value = ""></input></p></td>
        </tr>   
        <tr>
            <td><h3>Phone :</h3></td>
            <td><p><input type="text" value = ""></input></p></td>
        </tr>   
        <tr>
            <td><h3>Message :</h3></td>
            <td><p><input style = {{width: "500px", height: "200px"}} type="text"></input></p></td>
        </tr>    
    </table>
    <p align = "center"><input type="submit" name="submit" value="send"></input></p>
    </div>
  )
}

export default contact
