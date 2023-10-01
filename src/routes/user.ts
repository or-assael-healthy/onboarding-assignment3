import express from "express";

const router = express.Router();
// export const t = "";

router.get("/", (req, res) => {
  res.send("All users");
});

router.get("/:id", (req, res) => {
  res.send(`User with id: ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("Create user");
});

router.put("/:id", (req, res) => {
  res.send(`Update user with id: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Delete user with id: ${req.params.id}`);
});

export { router as userRoutes };
