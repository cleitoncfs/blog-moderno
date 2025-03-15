import React from "react";

function Post({ image, title, description, author }) {
    return (
        <article className="post">
            <img src={image} alt={title} />
            <h3 className="title">
                <a href="#">{title}</a>
            </h3>
            <p className="description">{description}</p>
            <p className="author">Por: {author}</p>
            <a href="#" className="read-more">
                Ler mais
            </a>
        </article>
    );
}

export default Post;
