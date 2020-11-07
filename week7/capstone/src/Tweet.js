import React from 'react'


function Tweet(props) {
    return(
        <div>
            <h1>Title: {props.title}</h1>
            <h3>Content: {props.content} </h3>
            <h3>name: {props.name}</h3>
            <button onClick={() => props.Delete(props.id)}>Delete:</button>
        </div>
    )
}

export default Tweet