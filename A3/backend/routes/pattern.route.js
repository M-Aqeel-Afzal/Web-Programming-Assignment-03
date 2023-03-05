let patternSchema = require( "../Models/Pattern");

let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();
// Route Model

// Create
router.route('/create-pattern').post((req, res, next) => {
  patternSchema.create(req.body, (error, data) => {
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
  patternSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get Single pattern by ID
router.route('/display-by-id/:id').get((req, res) => {
  patternSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


// Get Single pattern by stop name
router.route('/display-by-stopname/:stpnm').get((req, res) => {
  patternSchema.find({stpnm:req.params.stpnm}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});



// Update pattern
router.route('/update-pattern/:id').put((req, res, next) => {
  patternSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data)
      console.log('pattern updated successfully !')
    }
  })
});

// Delete pattern
router.route('/delete-pattern/:id').delete((req, res, next) => {
  patternSchema.findByIdAndRemove(req.params.id, (error, data) => {
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