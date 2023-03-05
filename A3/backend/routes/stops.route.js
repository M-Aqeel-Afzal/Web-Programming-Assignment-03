let stopsSchema = require( "../Models/Stops");

let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();
// Route Model

// Create
router.route('/create-stop').post((req, res, next) => {
  stopsSchema.create(req.body, (error, data) => {
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
  stopsSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get Single stop by ID
router.route('/display-by-id/:id').get((req, res) => {
  stopsSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


// Get Single stop by stop name
router.route('/display-by-stopname/:stpnm').get((req, res) => {
  stopsSchema.find({stpnm:req.params.stpnm}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});



// Update stop
router.route('/update-stop/:id').put((req, res, next) => {
  stopsSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data)
      console.log('stop updated successfully !')
    }
  })
})

// Delete stop
router.route('/delete-stop/:id').delete((req, res, next) => {
  stopsSchema.findByIdAndRemove(req.params.id, (error, data) => {
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