import Blogs from "./Blogs";
import useFetch from "./useFetch";

const AllBlogs = () => {

    console.log("MyComponent rendered");
    const url = "http://localhost:3099/blogs";

    const { data, loading, error } = useFetch(url);

    return (
        <div>
            {loading && <section>The page is loading...</section>}
            {error && <section>{error.message}</section>}
            {data && <Blogs blogs={data} title={"Blogs from AllBlogs (via fetch api)"} />}
        </div>
    );
}

export default AllBlogs;