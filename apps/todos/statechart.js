// ==========================================================================
// Project:   Todos
// Copyright: @201X My Company, Inc.
// ==========================================================================
/*globals Todos */
 
Todos.statechart = SC.Statechart.create({
 
  rootState: SC.State.design({
    initialSubstate: "STARTING",
 
    // For the Todos app, control will immediately go to the LOADING_APP state.
    //
    STARTING: SC.State.plugin('Todos.STARTING'),
      
    // The LOGGING_IN state is not used in todos. It is here for future reference.
    //
    LOGGING_IN: SC.State.plugin('Todos.LOGGING_IN'),
      
    // For SproutCore apps, any manner of loading tasks or manipulation of initial 
    // system settings can be done in a LOADING_APP state. For the Todos app, there 
    // data is set into controllers and the mainPage view is shown.
    //
    LOADING_APP: SC.State.plugin('Todos.LOADING_APP'),
      
    // The mainPage view is now showing, after being appended in the LOADING_APP state.
    // So now we are in the SHOWING_APP state, waiting for and responding to user actions.
    //
    SHOWING_APP: SC.State.plugin('Todos.SHOWING_APP')

    // More states would go here in a bigger app.
  })
});
