var React=require('react');
var {Link, IndexLink}=require('react-router');

//ES5
// var Nav=React.createClass({
//   render:function(){
//     return(
//       <div className="navbar navbar-inverse">
//                 <div className="navbar-header">
//                       <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
//                         <span className="sr-only">Toggle navigation</span>
//                         <span className="icon-bar"></span>
//                         <span className="icon-bar"></span>
//                         <span className="icon-bar"></span>
//                       </button>
//                   <IndexLink to="/" className="navbar-brand" >React Weather App</IndexLink>
//                 </div>
//                 <div className="navbar-collapse collapse">
//                   <ul className="nav navbar-nav">
//                     <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Weather</IndexLink></li>
//                     <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link></li>
//                     <li><Link to="/Example" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Example</Link></li>
//                   </ul>
//                 </div>
//       </div>
//     );
//   }
// });

//ES6
var Nav=(props) =>
      <div className="navbar navbar-inverse">
              <div className="navbar-header">
                <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <IndexLink to="/" className="navbar-brand" >React Weather App</IndexLink>
              </div>
              <div className="navbar-collapse collapse" id="navbar">
                  <ul className="nav navbar-nav">
                    <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Weather</IndexLink></li>
                    <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link></li>
                    <li><Link to="/Example" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Example</Link></li>
                  </ul>
              </div>
      </div>
;
module.exports=Nav;
