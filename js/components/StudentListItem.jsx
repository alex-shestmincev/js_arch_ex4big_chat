var StudentListItem = React.createClass({

  redcard: function(){
    this.props.changeStatus(this.props.user, 'redcard');
  },

  remove: function(){
    this.props.changeStatus(this.props.user, 'removed');
  },

  statusChange: function(event){
    this.props.changeStatus(this.props.user,event.target.value);
  },

  render: function() {

    var classValue ='StudentListItem';
    if (this.props.user.status === 'redcard'){
      classValue  += ' redcard';
    }else if(this.props.user.status === 'removed'){
      classValue  += ' removed';
    }

    return (
      <ul className={classValue}>
        <li><label>Name:</label> {this.props.user.name}</li>
        <li><label>Phone:</label> {this.props.user.phone}</li>
        <select value={this.props.user.status} onChange={this.statusChange}>
          <option value="redcard">redcard</option>
          <option value="removed">removed</option>
          <option value="active">active</option>
        </select>
      </ul>
    );
  }
});
