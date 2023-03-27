import { Component } from 'react'
// Component è il componente a classe più originario e generico possibile,
// definito nella libreria di React

class ImageComponent extends Component {
  // questa classe è un componente React
  render() {
    // senza render() il componente a classe non funziona!
    return <img src={this.props.src} alt={this.props.alt}/>
  }
}

export default ImageComponent;