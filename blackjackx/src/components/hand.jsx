import React from 'react';
import Card from './card';

class Hand extends React.Component {
    static defaultProps = {
        hand: [],
    };

    render() {
        return (
            <div className='hand'>
                {this.props.showDeck ? <Card hidden={true} /> : ''}

                {this.props.hand.map((card, i) => (
                    <Card face={card.f} value={card.v} key={i} />
                ))}
            </div>
        );
    }
}

export default Hand;