// ==========================================================================
// Project:   Todos
// Copyright: @201X My Company, Inc.
// ==========================================================================
/*globals Todos */
 
Todos.statechart = SC.Statechart.create({
 
  rootState: SC.State.design({
    initialSubstate: "STARTING",
 
    // For the Todos app, storeType will be 'FromFixtures', so we will
    // go directly to the LOADING_APP state, and simple show the app.
    //
    STARTING: SC.State.plugin('Todos.STARTING'),
 
    // The LOGGING_IN state is not used in todos. It is here for future reference.
    //
    LOGGING_IN: SC.State.plugin('Todos.LOGGING_IN'),
 
    // For the Todos app, simply show the mainPage. In a more complicated app, you might
    // need to do any manner of loading tasks or manipulation of initial system settings.
    //
    LOADING_APP: SC.State.plugin('Todos.LOADING_APP'),
     
    // The mainPage view is now showing, after being appended in the LOADING_APP state.
    // So now we are in the SHOWING_APP state, waiting for and responding to user actions.
    //
    SHOWING_APP: SC.State.plugin('Todos.SHOWING_APP')

    // More states would go here in a bigger app.
  })
});
