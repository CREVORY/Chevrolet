import React from 'react';
import './Detail.css';
import camaroImg from '../images/camaro.jpg';
import corvetteImg from '../images/corvette.jpg';
import silveradoImg from '../images/silverado.jpg';

const items = [
  { id: 1, name: 'Camaro', img: camaroImg, description: 'A sporty car with excellent performance.' },
  { id: 2, name: 'Corvette', img: corvetteImg, description: 'A classic American sports car.' },
  { id: 3, name: 'Silverado', img: silveradoImg, description: 'A powerful and reliable truck.' },
];

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const item = items.find(i => i.id === parseInt(id, 10));
    this.setState({ item });
  }

  render() {
    const { item } = this.state;
    if (!item) return <div>Loading...</div>;

    return (
      <div className="detail">
        <h1>{item.name}</h1>
        <img src={item.img} alt={item.name} />
        <p>{item.description}</p>
      </div>
    );
  }
}

export default Detail;