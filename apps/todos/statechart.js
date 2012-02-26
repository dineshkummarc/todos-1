// ==========================================================================
// Project:   Todos
// Copyright: @201X My Company, Inc.
// ==========================================================================
/*globals Todos */
 
Todos.statechart = SC.Statechart.create({
 
  rootState: SC.State.design({
    initialSubstate: "STARTING",
 
    STARTING: SC.State.plugin('Todos.STARTING'),
      
    // The LOGGING_IN state is not used in todos. It is here for future reference.
    LOGGING_IN: SC.State.plugin('Todos.LOGGING_IN'),
      
    LOADING_DATA: SC.State.plugin('Todos.LOADING_DATA'),
      
    SHOWING_APP: SC.State.plugin('Todos.SHOWING_APP')

    // More states would go here in a bigger app.
  })
});
