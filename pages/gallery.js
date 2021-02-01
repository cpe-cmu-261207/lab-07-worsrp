import {useEffect} from 'react';
import axios from 'axios'
import Link from "next/link";
const baseURL = 'https://dummyapi.io/data/api'
const gallery = () => {
  return (
    <div id="gallery" style = {{fontFamily: "Helvetica"}}>
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
    <h1 style = {{textAlign: "center"}}>Gallery</h1>
    <table style = {{ width: "100%"}}>
        <tr>
            <td>
                <img src="cat1.jpg" alt = "cat 1" style = {{ width: "420px", height: "420px"}} ></img>
            </td>
            <td>
                <img src="cat2.jpeg" alt = "cat 2" style = {{ width: "420px", height: "420px"}}></img>
            </td>
            <td>
                <img src="cat3.jpeg" alt = "cat 3" style = {{ width: "420px", height: "420px"}}></img>
            </td>
        </tr>
        <tr>
            <td>
                <p style = {{textAlign: "center"}}> A cat. </p>
            </td>
            <td>
                <p style = {{textAlign: "center"}}> A cat with milk. </p>
            </td>
            <td>
                <p style = {{textAlign: "center"}}> A cat with strawberry.</p>
            </td>
        </tr>
        <tr>
            <td>
                <img src="cat4.jpeg" alt = "cat 4" style = {{ width: "420px", height: "420px"}}></img>
            </td>
            <td>
                <img src="cat5.jpeg" alt = "cat 5" style = {{ width: "420px", height: "420px"}}></img>
            </td>
            <td>
                <img src="cat6.jpeg" alt = "cat 6" style = {{ width: "420px", height: "420px"}}></img>
            </td>
        </tr>
        <tr>
            <td>
                <p style = {{textAlign: "center"}}>A cat with orange juice.</p> 
            </td>
            <td>
                <p style = {{textAlign: "center"}}>A cat with doso.</p>
            </td>
            <td>
                <p style = {{textAlign: "center"}}>A cat with a snack. </p>
            </td>
        </tr>
        <tr>
            <td>
                <img src="cat7.jpeg" alt = "cat 7" style = {{ width: "420px", height: "420px"}}></img>
            </td>
            <td>
                <img src="cat8.jpeg" alt = "cat 8" style = {{ width: "420px", height: "420px"}}></img>
            </td>
            <td>
                <img src="cat9.jpeg" alt = "cat 9" style = {{ width: "420px", height: "420px"}}></img>
            </td>
        </tr>
        <tr>
            <td>
                <p style = {{textAlign: "center"}}>A cat with soda.</p>
            </td>
            <td>
                <p style = {{textAlign: "center"}}>A cat with an apron.</p>
            </td>
            <td>
                <p style = {{textAlign: "center"}}> A cat with yakult. </p>
            </td>
        </tr>
    </table>
    </div>
  )
}

export default gallery
