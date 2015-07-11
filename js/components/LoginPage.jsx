var LoginPage = React.createClass({

  getInitialState: function(){
    return {
      login: ''
    }
  },

  loginChanges: function(e){
    var login = e.target.value;
    this.setState({
      login: login
    });
  },

  logInSubmit: function(e){
    e.preventDefault();
    if (this.state.login){
      dispatcher.dispatch({name:"LOGIN",value:this.state.login});
    }
  },

  render: function() {


    return (
      <div className="loginForm">
        <form onSubmit={this.logInSubmit} >
          <label>What's your nickname?</label><br />
          <input type="text" onChange={this.loginChanges} /><br />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    );
  }
});