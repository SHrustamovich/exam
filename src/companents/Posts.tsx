import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { shortText } from "../utils/helpers";
import Comments from "./Comments";
import { createPortal } from "react-dom";

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IComments {
    body: string;
    email: string;
    id: number;
    name: string;
    postId: number;
}

const Posts = () => {
    const { pathname } = useLocation();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [comments, setComments] = useState<IComments[]>([]);
    const [postId, setPostId] = useState<number | null>(null);
    const [openComment,setOpenComment] = useState<boolean>(false)

    useEffect(() => {
        fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${pathname.slice(
                1
            )}`
        )
            .then((response) => response.json())
            .then((result) => setPosts(result));
    }, [pathname]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then((response) => response.json())
            .then((result) => setComments(result));
    }, [postId]);

    const onMouseFunc = (item: number) => {
        setPostId(item);
        setOpenComment(true)
    };
    return (
        <div className='p-2'>
            <h1 className='font-bold text-xl'>Posts list</h1>
            <div className='flex flex-col gap-4 pt-4'>
                {posts.map((item, index) => (
                    <div key={item.id}>
                        <button onMouseOver={() => onMouseFunc(item.id)}>
                            {index + 1}.{shortText(item.title)}
                        </button>
                    </div>
                ))}
            </div>
            <div>{openComment && createPortal(<Comments comments={comments} />,document.body)}</div>
        </div>
    );
};

export default Posts;
