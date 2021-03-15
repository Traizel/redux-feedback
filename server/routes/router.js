const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/', async (req, res) => {
    let newFeedback = req.body.feedback;
  console.log(newFeedback);
   const queryText = `INSERT INTO feedback (feeling, understanding, support, comments) 
        VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [ newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments ])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`Error making query ${queryText}`, err);
            res.sendStatus(500);
        });
});

module.exports = router;