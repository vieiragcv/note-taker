const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


/*                 CREATES ROUTE FOR DATA LOCATION                    */

const { tasks } = require('./db/db');

/*             ROUTE IN WHICH IT MUST BE FETCHED FROM                 */

app.get('/api/tasks', (req, res) => {
  let results = tasks;
  res.json(results);
});


/*-------------------------------------------------------------------------
 
-          activeNote is used to keep track of the note in the textarea

-------------------------------------------------------------------------*/
app.listen(PORT, () => {
  console.log(`API server now on port localhost:${PORT}!`)
});
