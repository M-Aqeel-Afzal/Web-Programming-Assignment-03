let routeSchema = require( "../Models/Route");

let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();
// Route Model

// Create
router.route('/create-route').post((req, res, next) => {
  routeSchema.create(req.body, (error, data) => {
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
  routeSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get Single Route by ID
router.route('/display-by-id/:id').get((req, res) => {
  routeSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


// Get Single Route by route name
router.route('/display-by-routename/:rtnm').get((req, res) => {
  routeSchema.find({rtnm:req.params.rtnm}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});



// Update Route
router.route('/update-route/:id').put((req, res, next) => {
  routeSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Route updated successfully !')
    }
  })
})

// Delete Route
router.route('/delete-route/:id').delete((req, res, next) => {
  routeSchema.findByIdAndRemove(req.params.id, (error, data) => {
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