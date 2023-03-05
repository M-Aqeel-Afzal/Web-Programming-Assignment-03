let directionSchema = require( "../Models/Directions");

let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();
// Route Model

// Create
router.route('/create-direction').post((req, res, next) => {
  directionSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ
router.route('/display-all').get((req, res) => {
  directionSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get Single direction by ID
router.route('/display-by-id/:id').get((req, res) => {
  directionSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


// Get Single direction by direction name
router.route('/display-by-directionname/:dir').get((req, res) => {
  directionSchema.find({dir:req.params.dir}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});



// Update Direction
router.route('/update-direction/:id').put((req, res, next) => {
  directionSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Direction updated successfully !')
    }
  })
})

// Delete Direction
router.route('/delete-direction/:id').delete((req, res, next) => {
  directionSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;