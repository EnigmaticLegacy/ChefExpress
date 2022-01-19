import React, {Component} from 'react'
import Data from '../JSON/data.json'

class IndividualItem extends React.Component {
    constructor (props) {
    super()
    this.state = {
    imageSrc: `./Assets/Image/Menu/${props.id}.png`,
    showDetails: false
    }
    this.handleOpenDetails = this.handleOpenDetails.bind(this)
    this.handleCloseDetails = this.handleCloseDetails.bind(this)
    this.detailsStayOpened = this.detailsStayOpened.bind(this)

}
render () {
    return (
    <div className="card">
        <img className="card-img-top" src={this.state.imageSrc}/>
        <h5 className="card-title">{this.props.dish}</h5>
        <a onClick={this.handleOpenDetails}>Read More</a>
        {
        this.state.showDetails && 
        <div className="overlay" onClick={this.handleCloseDetails}>
            <div className ="details-container row" onClick={this.detailsStayOpened}>
                <img className="imageZoomed col-md-6" src={this.state.imageSrc}/>
                <div className="col-md-6">{this.props.desc}</div>
            </div>
        </div>
        }
    </div>
    )
}
handleOpenDetails () {
    this.setState({
    isZooming: true
    })
}
handleCloseDetails () {
    this.setState({
    isZooming: false
    })
}
detailsStayOpened(e){
    e.stopPropagation()
}
}

class TheList extends React.Component {
constructor (props) {
    super()
    this.state = {
    daftarMenu: []
    }
}

componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then(res => {
    this.setState({
        daftarAnjing: Object.keys(res.data.message)
    })
    })
}

render () {
    return (
    <div className="dog-list">
        {
        this.state.daftarAnjing.map((item) => {
            return (
            <Dog key={item} nama={item}/>
            )
        })
        }
    </div>   
    )
}
}

ReactDOM.render(<TheList />, document.getElementById('app'))