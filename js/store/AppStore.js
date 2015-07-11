(function() {


  var AppStore = {

    // PRIVATE

    _username: '',
    _logged: false,
    _numUsers: null,
    _chat: [],
    _listeners: [],

    pushChat: function(message){
      this._chat.push(message);
      this.storeChanges();
    },

    storeChanges: function(){
      this._listeners.forEach(function(callback){
        callback();
      });
    },

    //PRIVATE


    // API
    getUserName: function(){
      return this._username;
    },

    getNumUsers: function(){
      return this._numUsers;
    },

    getLogged: function(){
      return this._logged;
    },

    isLogged: function(){
      return this._logged;
    },

    getChat: function(){
      return this._chat;
    },

    connectWith: function(callback){
      this._listeners.push(callback);
    },





    // API

    // FOR DISPATCHER
    newMessage: function(username, message){
      this.pushChat(username + "> " + message);

    },

    joinedUser: function(name){
      this.pushChat("User '" + name + "' has joined");
    },

    leftUser: function(name){
      this.pushChat("User '" + name + "' has left");
    },

    setUserName: function(name){
      this._username = name;
    },

    setNumUsers: function(numUsers){
      this._numUsers = numUsers;
    },

    setLogged: function(logged){
      this._logged = logged;

    }

    // FOR DISPATCHER




  };


  dispatcher.register(function(event){
    switch (event.name){


      case "USERS_NEW_MESSAGE":
        AppStore.newMessage(event.username,event.message);
        break;

      case "USER_JOINED":
        AppStore.joinedUser(event.username);
        break;
      case "USER_LEFT":
        AppStore.leftUser(event.username);
        break;

      case "LOGIN":
        AppStore.setUserName(event.value);
        AppStore.storeChanges();
        break;
      case "LOGGED":
        AppStore.setNumUsers(event.value);
        AppStore.setLogged(true);
        AppStore.storeChanges();

        break;
    }
  });


  window.AppStore = AppStore;
})();