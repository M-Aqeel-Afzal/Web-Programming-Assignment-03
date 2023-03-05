let vehicleSchema = require( "../Models/Vehicle");

let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();
// Route Model

// Create
router.route('/create-vehicle').post((req, res, next) => {
  vehicleSchema.create(req.body, (error, data) => {
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
  vehicleSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get Single vehicle by ID
router.route('/display-by-id/:id').get((req, res) => {
  vehicleSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


// Get Single vehicle by destination name
router.route('/display-by-destinationname/:des').get((req, res) => {
  vehicleSchema.find({des:req.params.des}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});



// Update vehicle
router.route('/update-vehicle/:id').put((req, res, next) => {
  vehicleSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data)
      console.log('vehicle updated successfully !')
    }
  })
})

// Delete vehicle
router.route('/delete-vehicle/:id').delete((req, res, next) => {
  vehicleSchema.findByIdAndRemove(req.params.id, (error, data) => {
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