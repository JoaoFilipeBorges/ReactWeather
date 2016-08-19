var React = require('react');

var WeatherMessage = React.createClass({
    render: function(){
        var location = this.props.location;
        var temp = this.props.temp;
        return(
            <div>
                <h1>It's {temp} degrees in {location}</h1>
            </div>
        );
    }
});

module.exports = WeatherMessage;