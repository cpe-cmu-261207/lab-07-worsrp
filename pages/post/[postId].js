import {useRouter} from "next/router";
import {useEffect,useState} from 'react'
import axios from 'axios'
import Link from "next/link";
const baseURL = 'https://dummyapi.io/data/api'
const password = '6017a20633428c8991afe7b2'
const Post = () => {
    const router = useRouter()
    const {postId} = router.query
    const [post,setPost] = useState(null)
    const [comment,setComment] = useState([])

    useEffect(() => {
        if(!postId){
            return 
        }
        axios.get(baseURL+"/post/"+postId, { headers: { "app-id": password }}).then((respond)=>{
            console.log(respond)
            setPost(respond.data)
        })
        axios.get(baseURL+"/post/"+postId+"/comment", { headers: { "app-id": password }}).then((respond)=>{
            console.log(respond)
            setComment(respond.data.data)
        })
    },[postId] )

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
            <table style = {{width: "50%"}} align = "center">
            {post&&<div>
                <h1 className="bg-red-500 text-center text-4xl p-3 tracking-widest" >{"Post : "+post.text}</h1>
                <p>
                    {"tags : "+post.tags}
                </p>
                    <p>
                        <img className="imgflame" src={post.image}></img>
                        <p>{post.owner.firstName+" "+post.owner.lastName}</p>
                        <p>{"Likes : "+post.likes}</p>                       
                        {comment.map((item)=>{
                            return <div key={item.id}>
                            <p>
                                {item.owner.firstName+" "+item.owner.lastName+" : "}
                                {item.message}
                            </p>
                        </div>
                        })}
                    </p>
                
                </div>}
                <div>
                    <Link href={"/post"}><button className = "bg-red-500 rounded-3xl p-1  hover:bg-red-200">Go back</button></Link>                  
                </div>
                </table>
            </div>
        </>
    )
}

export  default  Post