import React from 'react'


function Tweet(props) {
    return(
        <div className="post">
            <h1 className="title">Title: {props.title}</h1>
            <h3 className="content">Content: {props.content} </h3>
            <h3 className="name">name: {props.name}</h3>
            <button onClick={() => props.Delete(props.id)}>Delete:</button>
        </div>
    )
}

export default Tweet