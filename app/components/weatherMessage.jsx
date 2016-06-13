var React=require('react');

//ES5
  // var WeatherMessage=React.createClass({
  //   render:function(){
  //     //var temp=this.props.temp;
  //     //var location=this.props.location;
  //     var {temp, location}=this.props;
  //     return(
  //       <div className="col-md-12">
  //         <div className="alert alert-success" >
  //           <p>It's it <b>{temp}</b> in {location}</p>
  //         </div>
  //       </div>
  //     );
  //   }
  // });

//ES6
  // var WeatherMessage=(props) => {
  //   var {temp, location}=this.props;
  //       <div className="col-md-12">
  //         <div className="alert alert-success" >
  //           <p>It's it <b>{temp}</b> in {location}</p>
  //         </div>
  //       </div>
  // };

//or
  var WeatherMessage=({temp, location}) =>
        <div className="col-md-12">
          <div className="alert alert-success" >
            <p>It's it <b>{temp}</b> in {location}</p>
          </div>
        </div>
  ;
  module.exports=WeatherMessage;
