import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlogs = () => {

    const [title, setTitle] = useState("");
    const [summery, setSummery] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [pending, setPending] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setPending(true);
        const blog = { title, summery, content, author };
        console.log(blog);

        setTimeout(() => {
            fetch("http://localhost:3099/blogs", {
                'method': 'POST',
                'headers': { 'Content-Type': 'application/json' },
                'body': JSON.stringify(blog)
            })
                .then((response) => {
                    setPending(false);
                    navigate(-1);
                })
                .catch((error) => {
                    console.log(error.message);
                    setPending(false);
                });
        }, 5000);

        setTitle('');
        setSummery('');
        setContent('');
        setAuthor('');
    }

    return (
        <section>
            <h2>Create New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    placeholder="Enter your blog title here"
                    onChange={(e) => { setTitle(e.target.value) }} />

                <label htmlFor="summery">Summery</label>
                <input
                    type="text"
                    id="summery"
                    value={summery}
                    placeholder="Enter your blog title here"
                    onChange={(e) => { setSummery(e.target.value) }} />

                <label htmlFor="content">Content</label>
                <input
                    type="text"
                    id="content"
                    value={content}
                    placeholder="Enter your blog content here"
                    onChange={(e) => { setContent(e.target.value) }} />

                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    id="author"
                    value={author}
                    placeholder="Enter your blog author here"
                    onChange={(e) => { setAuthor(e.target.value) }} />

                <br /><br />

                {!pending && <button>Add Blog</button>}
                {pending && <button disabled >Saving post please wait...</button>}
            </form>
        </section>
    );
}

export default CreateBlogs;