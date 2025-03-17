import React from "react";
import Post from "./Post";

function PostList() {
    const posts = [
        {
            image: "img/f1.jpg",
            title: "Passeio de barco",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            author: "Cleiton Santos",
        },
        {
            image: "img/f2.jpg",
            title: "Cachoeira",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            author: "Cleiton Santos",
        },
        {
            image: "img/f3.jpg",
            title: "Balões",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            author: "Cleiton Santos",
        },
    ];

    return (
        <main id="posts-container">
            {posts.map((post, index) => (
                <Post
                    key={index}
                    image={post.image}
                    title={post.title}
                    description={post.description}
                    author={post.author}
                />
            ))}
        </main>
    );
}

export default PostList;
