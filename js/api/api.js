(function(){
  var socket = io(crudURL);

  socket.on('connect', function(){

    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });

  dispatcher.register(function(event){
    switch (event.name){
      case "LOGIN":
        console.log("case event",event);
        socket.emit('add user', event.value);
        break;
      default:
        break;
    }
  });

  socket.on('login', function(data){
    dispatcher.dispatch({name: "LOGGED", value: data.numUsers});
  });

  socket.on('user joined', function(data){
    dispatcher.dispatch({name: "USER_JOINED", value: data.numUsers});
  });

  socket.on('user left', function(data){
    dispatcher.dispatch({name: "LOGGED", value: data.numUsers});
  });








})();