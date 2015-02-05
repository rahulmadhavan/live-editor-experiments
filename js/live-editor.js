// live editor
// this live editor implementation is for inter window/tab communication
// it has to be used with the appropriate implementation of live-editor-client.js
//
// implementation depends on postMessage
var liveEditor = (function(){
  //object reference to live editor client listener function
  liveEditorClientListener = null;
  //object reference to live editor sender function
  liveEditorSender = null;

  executor = function(event){
    console.log(event.data + " via live editor executor");
    liveEditorClientListener(event);
    liveEditorSender(event);
  }

  addClientListener = function(listener){
    liveEditorClientListener = listener;
    window.addEventListener("message", executor, false);
  }

  addSender = function(sender){
    liveEditorSender = sender;
  }

  return self;
})();
