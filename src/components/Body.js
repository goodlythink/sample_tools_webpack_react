import React from 'react'

class Body extends React.Component{
    render() {
        const bodyStyle = {
            color: 'blue',
            fontSize: 20
        }

        return (
            <div style={bodyStyle}>{this.props.children}</div>
        )
    }
}

export default Body