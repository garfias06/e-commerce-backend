const router = require('express').Router();
const { where } = require('sequelize/types');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({ include: Product });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, { include: Product });

    if (!categoryData) {
      // The server has not found anything matching the Request-URI
      res.status(404).json({ message: 'Not Found' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    // Internal server error
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    // request succeeded
    res.status(200).json(categoryData);
  } catch (err) {
    // bad request
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: { id: req.params.id }
      }
    );

    res.status(200).json(categoryData);
  } catch (err) {
    // if the data sent was invalid.
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: { id: req.params.id }
    });
    res.status(200).json(categoryData);
  } catch (err) {
    // the server can't find the resource
    res.status(404).json(err);
  }
});

module.exports = router;
