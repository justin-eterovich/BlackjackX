var Card = React.createClass({

    render: function() {
        var backImg = this.props.hidden
            ? 'url(img/hidden.png)'
            : 'url(img/' + this.props.face + '.png)';
        var cardStyle = {backgroundImage: backImg};
  
        return (
            <div className='card' style={cardStyle}/>
        );
    }
  
});
  
export default Card;