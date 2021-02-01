import {useEffect} from 'react';
import axios from 'axios'
import Link from "next/link";
const baseURL = 'https://dummyapi.io/data/api'
const home = () => {
  return (
    <div id="index" style = {{fontFamily: "Helvetica"}}>
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

     <table style= {{width: "50%", padding: "20px"}} align="center">
        <tr>
            <td>
                <section>
                <nav>
                        <h3>Profile</h3> 
                </nav>
                <article>
                    <p>A random computer engineering student, who's trying to graduate in 4 years.</p>
                </article>
                </section>
                <section>
                    <nav>
                            <h3>Skill</h3> 
                    </nav>
                    <article>
                        <p>Game Design and Art Work</p>
                    </article>
                </section>
                <section>
                    <nav>
                            <h3>Technical</h3> 
                    </nav>
                    <article>
                        <p>C++ Java Photoshop illustrator</p>
                    </article>
                </section>
                <section>
                    <nav>
                            <h3>Education</h3> 
                    </nav>
                    <article>
                        <p><b>now</b> - Bachelor of Computer engineering, CMU</p>
                    </article>
                </section>
            </td>
        </tr>
     </table>
    </div>
  )
}

export default home
