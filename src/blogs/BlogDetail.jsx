import { useParams , useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {

    const {id} = useParams();

    const url = "http://localhost:3099/blogs/" + id;
    const {data, loading, error} = useFetch(url);

    const navigate = useNavigate();

    function handleDelete(){
        fetch(url,{
            'method' : "DELETE",
        })
        .then((res)=>{
            navigate('/blogs');
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

    return ( 
        <section>
            {loading && <p>The page is Loading...</p> }
            {error && <p>{error.message}</p>}
            {data && <div>
                <h2>Blog Detail Page with id {id}</h2>
                <h4>{data.title}</h4>
                <em>Written by: {data.author}</em>
                <p>{data.content}</p>
                <p>{data.summery}</p>
                <button onClick={handleDelete}>Delete</button>
            </div>}
        </section>
     );
}
 
export default BlogDetail;