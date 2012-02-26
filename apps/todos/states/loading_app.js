// ==========================================================================
// Project:   Todos
// Copyright: @201X My Company, Inc.
// ==========================================================================
/*globals Todos */
 
// For the Todos app, simply show the mainPage. In a more complicated app, you might
// need to do any manner of loading tasks or manipulation of initial system settings.
//
Todos.LOADING_APP = SC.State.design({
  enterState: function() {
    // Step 1: Instantiate Views
    //
    // The default code here will make the mainPane for your application visible
    // on screen.  If your app gets any level of complexity, you will probably 
    // create multiple pages and panes, but the main page usually will show first.  
    //
    Todos.getPath('mainPage.mainPane').append() ;

    // Step 2. Set the content property on your primary controller.
    //
    Todos.todosController.set('content',
      Todos.store.find(SC.Query.local(Todos.Todo, { orderBy: 'timestamp DESC' })));
 
    Todos.completedTodosController.set('content',
      Todos.store.find(SC.Query.local(Todos.Todo, 'isCompleted = true')));
 
    // Step 3. Once the page comes up, put keyboard focus on the new todos item.
    //
    Todos.mainPage.getPath('mainPane.newTodoField.field').becomeFirstResponder();

    // Done with loading and initialization steps. Move to SHOWING_APP.
    this.gotoState('SHOWING_APP');
  },
 
  exitState: function() {
    // Nothing to worry about in this context.
  }
});
