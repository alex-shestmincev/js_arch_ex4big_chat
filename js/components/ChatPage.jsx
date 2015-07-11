var ChatPage = React.createClass({

  getInitialState: function(){
    return {
      name: '',
      numUsers: ''
    }
  },

  componentWillMount: function(){
    this.setState({
      name: this.props.name,
      numUsers: this.props.numUsers,
    });
  },

  render: function() {


    return (
      <div>
        Name: {this.state.name},
        NumUsers: {this.state.numUsers},

      </div>
    );
  }
});