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
              <h2>About Component</h2>
        </div>
      </div>;

module.exports=About
