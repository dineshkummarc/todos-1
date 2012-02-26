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
    STARTING: SC.State.design({
      enterState: function() {
        if (Todos.get('storeType') === 'SomeBackendDatasource') {
          this.gotoState('LOGGING_IN');
        } else if (Todos.get('storeType') === 'FromFixtures') {
          this.gotoState('LOADING_APP');
        }
      },
 
      exitState: function() {
        // Nothing to worry about here.
      }
    }),
 
    // The LOGGING_IN state is not used in todos. It is here for future reference.
    //
    LOGGING_IN: SC.State.design({             
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
       
    }),
 
    // For the Todos app, simply show the mainPage. In a more complicated app, you might
    // need to do any manner of loading tasks or manipulation of initial system settings.
    //
    LOADING_APP: SC.State.design({
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

        // Done with loading and initialization steps. Move to READY_APP.
        this.gotoState('READY_APP');
      },
 
      exitState: function() {
        // Nothing to worry about in this context.
      }
    }),
     
    // The mainPage view is now showing, after being appended in the LOADING_APP state.
    // So now we are in the READY state, waiting for and responding to user actions.
    //
    READY_APP: SC.State.design({
      enterState: function() {
        // There could be a user interface update for ready status after loading,
        // such as a status indicator that turns from a yellow to green light, but
        // we don't have anything fancy like that. So, nothing to worry about. Just
        // stand at the ready.
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
      }
    })

    // More states would go here in a bigger app.
  })
});
