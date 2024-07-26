import React ,{useState , useEffect} from "react";
import ReactDOM from "react-dom";


function Post(){
    const [error,seterror]=useState(null);
    const [isLoaded,setLoaded]=useState(false);
    const [postList,setPostList]=useState([]);

    useEffect(()=>{
        fetch("/posts")
        .then(res=>res.json())
        .then(
            (result)=>{
                setLoaded(true);
                setPostList(result)
            },
            (error)=>{
                setLoaded(true);
                seterror(error);
            }
        )
    },[])

    if(error){
        return <div> Error !!!</div>
    }
    else if(!isLoaded){
        return <div>Loading...</div>
    }
    else{
        return(
            <ul>
                {postList.map(post =>(
                    <li>
                        {post.title} {post.text}
                    </li>
                ))}
            </ul>
        );
    }

}
export default Post;