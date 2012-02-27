// ==========================================================================
// Project:   Todos
// Copyright: @201X My Company, Inc.
// ==========================================================================
/*globals Todos */
 
Todos.main = function main() {
  var statechart = Todos.statechart;
  SC.RootResponder.responder.set('defaultResponder', statechart); 
  statechart.initStatechart();
};
 
function main() { Todos.main(); }
