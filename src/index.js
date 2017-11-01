import React from 'react'
import ReactDOM from 'react-dom'
import Body from './components/Body'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>Hello</div>
                <Body>This is body</Body>
                <Footer footerDes="ท้ายบทความ"/>
            </div>
        )
    }
}

class Footer extends React.Component{
    render() {
        return (
            <div>
                <h1>Footer {this.props.footerDes}</h1>
            </div>
        )
    }
}

function Header() {
    return (
        <div>
            <h1>Header</h1>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)