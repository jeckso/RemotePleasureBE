const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const users = require('../controllers/user');

router.use(bodyParser.json());

router.post("/", (req, res) => {
    users.createUser(req.body, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send({"message": "Not found"});
        }
    })
});

router.delete("/:id", (req, res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(400).send({"message": "Delete could not work without id"});
    }
    users.deleteUserById(id, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send({"message": "Not found"});
        }
    })
});

router.get("/:id", (req, res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(400).send({"message": "Delete could not work without id"});
    }
    users.findUserById(id, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send({"message": "Not found"});
        }
    })
});

module.exports = router;
