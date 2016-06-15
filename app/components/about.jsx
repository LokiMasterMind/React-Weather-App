var React=require('react');

//ES5
// var About=React.createClass({
//   render:function(){
//     return(
//       <div className="container">
//       <div  className="jumbotron">
//             <h2>About Component</h2>
//       </div>
//       </div>
//     );
//   }
// });

//ES6
var About= (props) =>
      <div className="container">
        <div  className="jumbotron">
              <h2 className="page-title">About</h2>
              <p>Weather App develop using ReactJs.<br/>
                 Use OpenWeatherMap API to get Temprature of City in Degree.<br/>
                 <br/>
                 Author :Lokesh Chandawar<br/>
               Source :Udemy Tutorials<br/>
              </p>
        </div>
      </div>;

module.exports=About
