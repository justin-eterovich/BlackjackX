import React from 'react';

class Card extends React.Component {
    render() {
        const backImg = this.props.hidden
            ? 'url(img/hidden.png)'
            : `url(img/${this.props.face}.png)`;
        const cardStyle = { backgroundImage: backImg };

        return (
            <div className='card' style={cardStyle} />
        );
    }
}

export default Card;
