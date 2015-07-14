var ChatItem = React.createClass({

  getInitialState: function(){
    return {
      message: this.props.message,
      url: ""
    }
  },

  componentWillMount: function(){
    var re = /https?:\/\/[\S]+/g;
    var self = this;
    var res = this.props.message.match(re);
    console.log(res);
    if (res){
      res.forEach(function(url){
        console.log("chatitem url",url);
        AppStore.connectWith(function(){
          console.log("AppStore.getImage(url)", AppStore.getImage(url));
          self.setState({
            url: AppStore.getImage(url)
          });
        });
        dispatcher.dispatch({name:"CHECK_IMAGE", src:url});
      });
    }


  },

  render: function() {

    var url;
    if (this.state.url){
      url = <p><img src={this.state.url} className="chatImg" /></p>
    }

    return (
      <li> {this.state.message} {url}</li>
    );
  }
});