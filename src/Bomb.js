import React from 'react'

class Bomb extends React.Component {
    state = {
        count: 0,
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    renderDisplay() {
        if (this.state.count % 2 === 0 && this.state.count < 8) {
            return 'tick'
        } else if (this.state.count % 2 !== 0 && this.state.count < 8) {
            return 'tock'
        } else if (this.state.count >= 8) {
            clearInterval(this.interval)
            return 'BOOM!!!';
        }
    }

    render() {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
            </div>
        )

    }
}



export default Bomb;