// ==========================================================================
// Project:   Todos
// Copyright: @201X My Company, Inc.
// ==========================================================================
/*globals Todos */
 
Todos.LOADING_DATA = SC.State.design({
  enterState: function() {
    // Set the content property on controllers.
    //
    Todos.todosController.set('content',
      Todos.store.find(SC.Query.local(Todos.Todo, { orderBy: 'timestamp DESC' })));
 
    Todos.completedTodosController.set('content',
      Todos.store.find(SC.Query.local(Todos.Todo, 'isCompleted = true')));
 
    // Done with loading and initialization steps. Move to SHOWING_APP.
    this.gotoState('SHOWING_APP');
  },
 
  exitState: function() {
    // Nothing to worry about in this context.
  }
});
