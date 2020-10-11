import React from 'react'

class Dicebox extends React.Component {
    constructor(props) {
        super(props)
    
    this.state = {
        thing: this.props.dice
    }}
    render(){

        return(
            <div>
                <div>
                    {this.props.dice}
                </div>
            </div>
        )
}
}
export default Dicebox