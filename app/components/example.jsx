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
          <h2 className="page-title">Examples</h2>
            Pune:<br/>
            <p>It's it 29.21 in Pune</p><br/>
            Napgur:<br/>
            <p>It's it 37.51 in Nagpur</p><br/>
            sdfhgasfjgskaghlushadg:<br/>
            <p>Error: Error: Not found city!</p><br/>
        </div>
    </div>
    );
};
module.exports=Example;
