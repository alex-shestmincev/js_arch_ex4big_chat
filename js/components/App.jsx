var App = React.createClass({

  getInitialState: function(){
    return {
      username: '',
      logged: false,
      numUsers: null
    }
  },

  componentWillMount: function(){
    var self = this;
    dispatcher.register(function(event){
      switch (event.name){
        case "LOGIN":
          self.setState({
            username: event.value
          });
          break;
        case "LOGGED":
          self.setState({
            logged: true,
            numUsers: event.value
          });
          break;
      }
    });
  },

  logIn: function(username){
    this.setState({
      username: username
    });
      console.log("Log in app " + login);
  },

  render: function() {

    console.log(this.state);

    if (this.state.username && this.state.logged){
      return ( <ChatPage name={this.state.username} numUsers={this.state.numUsers} /> );
    }else{
      return ( <LoginPage /> );
    }


  }
});

React.render(
  <App />,
  document.getElementById('content')
);
