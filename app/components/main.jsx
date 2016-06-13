var React=require('react');

var Nav= require('Nav');

//ES5
// var Main=React.createClass({
//   render:function(){
//     return(
//       <div>
//           <Nav/>
//           {this.props.children}
//       </div>
//     );
//   }
// });

//ES6
var Main=(props) =>
      <div>
          <Nav/>
          {props.children}
      </div>
;


module.exports=Main;
