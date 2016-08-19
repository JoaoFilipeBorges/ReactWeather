var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getDefaultProps: function(){
        return {
            message : ''
        };
    },

    getInitialState: function(){
        return {
            isLoading: false
        };
    },

    handleSearch: function(location){
        var that = this;

this.setState({isLoading: true})

        OpenWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                 temp: temp,
                isLoading: false
        });
        }, function(errorMessage){
            that.setState({
                isLoading: false
            });
            alert(errorMessage);
        });
    },

    render: function(){
        var {isLoading, temp, location} = this.state;

        function renderMessage(){
            if(isLoading){
                console.log('Hi');
                return <h3>Fetching weather...</h3>;
            }else if(temp && location){
                console.log(location+'-----'+temp);
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        return(
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}               
            </div>
        )
    }
});

module.exports = Weather;