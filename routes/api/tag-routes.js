const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags including its associated Product data
  Tag.findAll({
    include: {
      model: Product,
      attributes: ["product_name", "price", "stock", "category_id"],
    },
  })
  .then((data) => {
    if (!data) {
      res.status(404).json({ message: "No tags found!" });
      return;
    }
    res.json(data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id` including its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      attributes: ["id","product_name", "price", "stock", "category_id"],
    },
  }).then((data) => {
    if (!data) {
      res.status(404).json({ message: "No tags found with this id." });
    }
    res.json(data);
  });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((data) => {
    if (!data) {
      res.status(404).json({ message: "No tag was found with this id" });
      return;
    }
    res.json(data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((data) => {
    if (!data) {
      res
        .status(404)
        .json({ message: "No tag has been found with that id." });
      return;
    }
    res.json(data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;