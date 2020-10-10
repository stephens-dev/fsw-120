import React from 'react'
function Superhero(props) {
    return(
        <div>
            <h1 onClick={() => alert(props.catchPhrase)}>Name: {props.name}</h1>
            <img src={props.img} alt="Hero" onClick={() => alert(props.catchPhrase)} />
        </div>
    )
}
export default Superhero