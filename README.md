
### This project demonstrates how the live editor
###   communication channel would work using postMessage.

## Prerequisites:
  you must have the following installed on your system.

    python >= 2.6
    [flask](flask.pocoo.org) >= 0.10

## To run the demo:
  follow the steps

  1. run the following commands in the given sequence
    1. cd /path/to/live-editor-experiments
    2. python server1.py
    3. python server2.py

  * Open http://localhost:3001/static1/live_editor_client.html

  * Press the Open Live Editor button.
      Note: On doing step c), if you were asked to enable popup
      refresh the live_editor_client page after enabling popups

  * enter any text in the given text box and press send.
      on pressing send the client sends the textbox contents message
      to the live editor. The live editor modifies the received message by
      appending "received" to it, then it sends the modified message back to
      the client which is diplayed on the client screen

## Context

In production,
  server1 would be the Appinventor appengine.
  server2 would be running on the users machine.
    server2 would be responsible for storing the users web app,
    thus server2 would be serving the users webapp to the live editor.
