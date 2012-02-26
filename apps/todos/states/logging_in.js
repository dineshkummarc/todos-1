// ==========================================================================
// Project:   Todos
// Copyright: @201X My Company, Inc.
// ==========================================================================
/*globals Todos */
 
// The LOGGING_IN state is not used in todos. It is here for future reference.
//
Todos.LOGGING_IN = SC.State.design({             
  initialSubstate: "SHOWING_LOGIN",
 
  SHOWING_LOGIN: SC.State.design({
 
    enterState: function() {
      // A login panel would be shown now. It would update username and password
      // in a loginController.
    },
 
    exitState: function() {
      // The login panel would be taken down now.
    },
 
    authenticate: function() {
      // The login panel would fire here, and we would call gotoState() to go to
      // another state to do the authentication.
    }
  })
 
  // More states would go here in an app that does authentication.
       
});
