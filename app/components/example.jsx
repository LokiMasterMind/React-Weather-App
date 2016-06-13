var React=require('react');

//ES5
// var Example=React.createClass({
//   render:function(){
//     return(
//       <div className="container">
//       <div  className="jumbotron">
//         <h2>Example Component</h2>
//       </div>
//     </div>
//     );
//   }
// });

//ES6
var Example=(props) =>
{    return(
      <div className="container">
        <div  className="jumbotron">
          <h2>Example Component</h2>
        </div>
    </div>
    );
};
module.exports=Example;
