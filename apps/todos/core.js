// ==========================================================================
// Project:   Todos
// Copyright: @201X My Company, Inc.
// ==========================================================================
/*globals Todos */
 
/** @namespace
 
  A little todos app.
   
  @extends SC.Object
*/
Todos = SC.Application.create(
  /** @scope Todos.prototype */ {
 
  NAMESPACE: 'Todos',
  VERSION: '0.1.0',
 
  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(SC.Record.fixtures)
  storeType: 'FromFixtures',
 
  // TODO: Add global constants or singleton objects needed by your app here.
 
});
