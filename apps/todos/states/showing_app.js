// ==========================================================================
// Project:   Todos
// Copyright: @201X My Company, Inc.
// ==========================================================================
/*globals Todos */
 
Todos.SHOWING_APP = SC.State.design({
  enterState: function() {
    // Show the mainPage view by appending it.
    //
    Todos.getPath('mainPage.mainPane').append();

    // Put keyboard focus on the new todos item.
    //
    Todos.mainPage.getPath('mainPane.newTodoField.field').becomeFirstResponder();
  },

  exitState: function() {
    // In a larger app, we would do tear-down tasks here.
  },

  // Functions like addTodo are called actions. Their names are used to set the
  // action property of user interface elements such as buttons. In this case,
  // the mainPage view has a newTodoField view that contains a text field and
  // a submit button. The action property of the submit button is set to 'addTodo'.
  // When clicked, this addTodo function will be called.
  //
  // If the user entered some text, which is grabbed from the value property of
  // the associated view of the caller (a text field), addTodo uses this and the
  // current time in a call to store.createRecord() to add a new todo.
  //
  // As the last step, the associated view's value is set to '', so the text
  // field is blank and ready for the next todo.
  //
  addTodo: function (view) {
    var todo = (view.get('value') || '').trim();
    if (todo !== '') {
      Todos.store.createRecord(Todos.Todo, {
        title: todo,
        timestamp: SC.DateTime.create()
      });
      view.set('value', '');
    }
  },

  // Destroys all todo items that are completed.
  //
  // This action method is tied to a button in the mainPage view's bottom
  // toolbar. This button has its action property set to 'clearCompletedTodos',
  // so when the user clicks it, this function is called.
  //
  clearCompletedTodos: function () {
    Todos.completedTodosController.invoke('destroy');
  }
});
