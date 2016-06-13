var React=require('react');

var WeatherForm=require('WeatherForm');
var WeatherMessage=require('WeatherMessage');
var OpenWeatherMap=require('OpenWeatherMap');

//ES5
var Weather=React.createClass({
  getInitialState:function(){
    return{
      isLoading:false
    }
  },
  handleSubmitForm:function(location){
    var that=this;
    this.setState({
      isLoading:true
    })
    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      });
    },function(error){
      that.setState({
        isLoading:false,
        error:`${error}!`
      });
    });
  },
  render:function(){
    //var location=this.state.location;
    //var temp=this.state.temp;
    var {isLoading, error, temp, location}=this.state;

    function rederMessage(){
      if(isLoading){
        return <div className="col-md-12">
          <div className="alert alert-info" >
            <p>Fetching Weather...</p>
          </div>
        </div>;
      }else if(location && temp){
        return <WeatherMessage location={location} temp={temp}/>;
      }else if(error){
        return  <div className="col-md-12">
          <div className="alert alert-danger" >
            <p>{error}</p>
          </div>
        </div>;
      }else {
        return <div className="col-md-12">
          <div className="alert alert-info" >
            <p>Type Your City Name...</p>
          </div>
        </div>;
      }
    };
    return(
      <div className="container">
        <div className="jumbotron">
          <div className="row">
            <WeatherForm submitForm={this.handleSubmitForm}/>
            {rederMessage()}
          </div>
        </div>
      </div>
    );
  }
});


module.exports=Weather;
