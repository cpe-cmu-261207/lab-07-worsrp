import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const password = '6017a20633428c8991afe7b2'
const Posts = () => {
    const [posts,setPosts] = useState([])
    useEffect(() => {
        axios.get(baseURL+"/post", { headers: { "app-id": password }}).then((respond)=>{
            console.log(respond)
            setPosts(respond.data.data)
        })
    },[] )
    return (
        <>
        <div style = {{fontFamily: "Helvetica"}}>
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
            <h1 className="bg-red-500 text-center text-4xl p-3 tracking-widest">All Posts</h1>
            {posts.map((item)=>{
                return <div key={item.id}>
                    <table style = {{width: "50%"}} align = "center">
                    <h4>{"Post : "+item.text}</h4>
                    <div>
                        <img className="imgflame" src={item.image}></img>
                    </div>
                    <div>
                        <Link href={"/post/"+item.id}>
                        <button className = "bg-red-500 rounded-3xl p-1  hover:bg-red-200">Go to this post</button>
                        </Link>
                        <p>{"Likes : "+item.likes}</p>  
                    </div>
                    </table>
                </div>
            })}
            </div>
        </>
    )
}

export default  Posts