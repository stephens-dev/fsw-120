import React from 'react'

function BlogPost(props) {
    return (
        <div className="blogPost">
            <h1 className="one">{props.title}</h1>
            <h3 className="two">{props.subTitle}</h3>
            <h6 className="three">Posted by {props.author}</h6>
            <date className="four">{props.date}</date>

        </div>
    )
}

export default BlogPost