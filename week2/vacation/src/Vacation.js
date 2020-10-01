import React from 'react'

function Vacation(props) {
    return (
        <div className="box">
            <h1>Place: {props.place}</h1>
            <h3 className="item1">Price: {props.price}</h3>
            <h3 className="item2">When to go: {props.timeToGo}</h3>
        </div>
    )
}

export default Vacation