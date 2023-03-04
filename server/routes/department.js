const { Router } = require("express");
const {
  create,
  list,
  read,
  remove,
  update,
} = require("../controllers/department");
const router = Router();

router.post("/department", create);
router.get("/department", list);
router.get("/department/:id", read);
router.delete("/department/:id", remove);
router.put("/department/:id", update);
module.exports = router;
