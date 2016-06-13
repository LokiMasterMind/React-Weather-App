var React=require('react');

//ES5
var WeatherForm=React.createClass({
  onSubmitForm:function(e){
    e.preventDefault();
    var cityName= this.refs.cityName.value;
    if(cityName.length > 0){
      this.refs.cityName.value="";
      this.props.submitForm(cityName);
    }
  },
  render:function(){
    return(
      <div className="col-md-12">
          <form onSubmit={this.onSubmitForm}>
            <div className="form-group">
              <input type="text" ref="cityName" className="form-control" placeholder="City" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-default">Submit</button>
            </div>
          </form>
      </div>
    );
  }
});


module.exports=WeatherForm;
