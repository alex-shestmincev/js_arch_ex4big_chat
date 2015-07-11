var ChatPage = React.createClass({

  getInitialState: function(){
    return {
      name: '',
      numUsers: '',
      chat: [],
      message: ''
    }
  },

  componentWillMount: function(){
    this.setState({
      name: this.props.name,
      numUsers: this.props.numUsers,
    });

    AppStore.connectWith(this.listenStore);
  },

  listenStore: function(){
    this.setState({
      name: AppStore.getUserName(),
      chat: AppStore.getChat(),
      numUsers: AppStore.getNumUsers()
    });
  },

  sendMessage: function(e){
    e.preventDefault();
    dispatcher.dispatch({name:"MY_NEW_MESSAGE", message: this.state.message});
    this.clearMessageAndPrint()
  },

  messageChanges: function(e){
    var message = e.target.value;
    this.setState({
      message: message
    });
  },

  clearMessageAndPrint: function(){
    AppStore.newMessage("я", this.state.message);
    this.setState({message: ""});
  },

  render: function() {

    var list = [];

    for (var i=0; i<this.state.chat.length;i++){
      list.push(<p>{this.state.chat[i]}</p>);
    }

    return (
      <div>
        Name: {this.state.name},
        NumUsers: {this.state.numUsers},

        Chat: {list}

        <form onSubmit={this.sendMessage}>
          <input type="text" ref="message" onChange={this.messageChanges} value={this.state.message} />
        </form>

      </div>
    );
  }
});