import React from "react"

function Blog(props) {
    return (
        <div className="build" style={{backgroundColor: props.color}}>
            
    <h1>{props.title}</h1>
    <h3>{props.subtitle}</h3>
    <p>{props.paragraph}</p>
        </div>
    )
}

export default Blog