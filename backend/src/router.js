const { createUser,readAllUser, deleteUser, updateUser } = require("./controller/userController");
const router = require("express").Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get a list of all users
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/users", (req, res) => {
  // return a list of all users
  res.send("get all");
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags: [user]
 *     summary: Get a user by ID
 *     
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to retrieve
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 */
router.get("/users/:id", (req, res) => {
  // return a user by ID
  res.send(`get user by ${JSON.stringify(req.query)}`);
});

router.get("/", (req, res) => {
  res.status(200).send("done");
});

/**
 * @swagger
 * /create:
 *   post:
 *     tags: [user]
 *     summary: creating user
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 */

router.post("/create", createUser);

router.get('/getuser', readAllUser);

router.delete('/delete/:id',deleteUser)

router.put('/updateuser/:id',updateUser)
module.exports = router;
