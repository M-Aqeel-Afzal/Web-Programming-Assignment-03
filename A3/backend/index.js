
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors = require('cors');
let fetch = require('node-fetch')
// const recordRoutes = express.Router();
let { MongoClient } = require("mongodb");

async function GetDataFromAPI_Routes() {
  //fetching data
  const response = await fetch('http://ctabustracker.com/bustime/api/v2/getroutes?key=ujAhaYu9dy6TAF2VgMLWK5nnV&format=json');
  const data = await response.json();

   
  // for (let i = 0; i < data["bustime-response"]["routes"].length; i++) {
  //   console.log("{");
  //   console.log("rt : " + data["bustime-response"]["routes"][i]["rt"]);
  //   console.log("rtnm : " + data["bustime-response"]["routes"][i]["rtnm"]);
  //   console.log("rtclr : " + data["bustime-response"]["routes"][i]["rtclr"]);
  //   console.log("rtdd : " + data["bustime-response"]["routes"][i]["rtdd"]);
  //   console.log("}\n value of i = " + i + "\n");
  // }

  // This section will help you create a new record.
// insertion(data); 
  const uri = "mongodb://localhost:27017/recordsdatabase";
  const client = new MongoClient(uri);

  const database = client.db("recordsdatabase");
  const haiku = database.collection("Route");
  console.log("******Route Table created******");
  for (let i = 0; i < data["bustime-response"]["routes"].length; i++) {
    var myobj = {
      rtr: data["bustime-response"]["routes"][i]["rt"],
      rtnm: data["bustime-response"]["routes"][i]["rtnm"],
      rtclr: data["bustime-response"]["routes"][i]["rtclr"],
      rtdd: data["bustime-response"]["routes"][i]["rtdd"],
    };
    const result = haiku.insertOne(myobj);
  }

}


async function GetDataFromAPI_Vehicles() {
  //fetching data
  const response = await fetch('https://ctabustracker.com/bustime/api/v2/getvehicles?key=ujAhaYu9dy6TAF2VgMLWK5nnV&rt=20&format=json');
  const data = await response.json();

   
  // for (let i = 0; i < data["bustime-response"]["vehicle"].length; i++) {
  //   console.log("{");
  //   console.log("vid : " + data["bustime-response"]["vehicle"][i]["vid"]);
  //   console.log("tmstmp : " + data["bustime-response"]["vehicle"][i]["tmstmp"]);
  //   console.log("lat : " + data["bustime-response"]["vehicle"][i]["lat"]);
  //   console.log("lon : " + data["bustime-response"]["vehicle"][i]["lon"]);
  //   console.log("hdg : " + data["bustime-response"]["vehicle"][i]["hdg"]);
  //   console.log("pid : " + data["bustime-response"]["vehicle"][i]["pid"]);
  //   console.log("rt : " + data["bustime-response"]["vehicle"][i]["rt"]);
  //   console.log("des : " + data["bustime-response"]["vehicle"][i]["des"]);
  //   console.log("pdist : " + data["bustime-response"]["vehicle"][i]["pdist"]);
  //   console.log("dly : " + data["bustime-response"]["vehicle"][i]["dly"]);
  //   console.log("tatripid : " + data["bustime-response"]["vehicle"][i]["tatripid"]);
  //   console.log("origtatripno : " + data["bustime-response"]["vehicle"][i]["origtatripno"]);
  //   console.log("tablockid : " + data["bustime-response"]["vehicle"][i]["tablockid"]);
  //   console.log("zone : " + data["bustime-response"]["vehicle"][i]["zone"]);
  //   console.log("}\n value of i = " + i + 1 + "\n");
  // }

  // This section will help you create a new record.
 // insertion(data);
  const uri = "mongodb://localhost:27017/recordsdatabase";
  const client = new MongoClient(uri);
  const database = client.db("recordsdatabase");
  const haiku = database.collection("Vehicle");
  console.log("******Vehicle Table created******");

  for (let i = 0; i < data["bustime-response"]["vehicle"].length; i++) {
    var myobj = {
      vid: data["bustime-response"]["vehicle"][i]["vid"],
      tmstmp: data["bustime-response"]["vehicle"][i]["tmstmp"],
      lat: data["bustime-response"]["vehicle"][i]["lat"],
      lon: data["bustime-response"]["vehicle"][i]["lon"],
      hdg: data["bustime-response"]["vehicle"][i]["hdg"],
      pid: data["bustime-response"]["vehicle"][i]["pid"],
      rt: data["bustime-response"]["vehicle"][i]["rt"],
      des: data["bustime-response"]["vehicle"][i]["des"],
      pdist: data["bustime-response"]["vehicle"][i]["pdist"],
      dly: data["bustime-response"]["vehicle"][i]["dly"],
      tatripid: data["bustime-response"]["vehicle"][i]["tatripid"],
      origtatripno: data["bustime-response"]["vehicle"][i]["origtatripno"],
      tablockid: data["bustime-response"]["vehicle"][i]["tablockid"],
      zone: data["bustime-response"]["vehicle"][i]["zone"],
    };
    // console.log("}\n value of i = " + i + "\n");
    const result = haiku.insertOne(myobj);
  }

}

async function GetDataFromAPI_Directions() {
  //fetching data
  const response = await fetch('http://ctabustracker.com/bustime/api/v2/getdirections?key=ujAhaYu9dy6TAF2VgMLWK5nnV&rt=20&format=json');
  const data = await response.json();

  
  // for (let i = 0; i < data["bustime-response"]["directions"].length; i++) {
  //   console.log("{");
  //   console.log("dir : " + data["bustime-response"]["directions"][i]["dir"]);
  //   console.log("}\n value of i = " + i + "\n");
  // }

  // This section will help you create a new record.
// insertion(data);  
  const uri = "mongodb://localhost:27017/recordsdatabase";
  const client = new MongoClient(uri);
  const database = client.db("recordsdatabase");
  const haiku = database.collection("Directions");
  console.log("******Directions Table created******");

  const filter = { title: "Random Harvest" };
  const options = { upsert: true };
  for (let i = 0; i < data["bustime-response"]["directions"].length; i++) {
    var myobj = {
        dir: data["bustime-response"]["directions"][i]["dir"]
    };
    // console.log("}\n value of i = " + i + "\n");
    const result = haiku.insertOne(myobj);
    // const result = haiku.updateOne(filter, myobj, options);
  }

}

async function GetDataFromAPI_Stops() {
  //fetching data
  const response = await fetch('https://ctabustracker.com/bustime/api/v2/getstops?key=ujAhaYu9dy6TAF2VgMLWK5nnV&rt=7&dir=Eastbound&format=json');
  const data = await response.json();

  // for (let i = 0; i < data["bustime-response"]["stops"].length; i++) {
  //   console.log("{");
  //   console.log("stpid : " + data["bustime-response"]["stops"][i]["stpid"]);
  //   console.log("stpnm : " + data["bustime-response"]["stops"][i]["stpnm"]);
  //   console.log("lat : " + data["bustime-response"]["stops"][i]["lat"]);
  //   console.log("lon : " + data["bustime-response"]["stops"][i]["lon"]);
  //   console.log("}\n value of i = " + i + "\n");
  // }

  // This section will help you create a new record.
  // insertion(data);  

  const uri = "mongodb://localhost:27017/recordsdatabase";
  const client = new MongoClient(uri);
  const database = client.db("recordsdatabase");
  const haiku = database.collection("Stops");
  console.log("******Stops Table created******");

  for (let i = 0; i < data["bustime-response"]["stops"].length; i++) {
    var myobj = {
      stpid: data["bustime-response"]["stops"][i]["stpid"],
      stpnm: data["bustime-response"]["stops"][i]["stpnm"],
      lat: data["bustime-response"]["stops"][i]["lat"],
      lon: data["bustime-response"]["stops"][i]["lon"],
    };
    // console.log("}\n value of i = " + i + "\n");
    const result = haiku.insertOne(myobj);
  }

}


async function GetDataFromAPI_Pattern() {
  //fetching data
  const response = await fetch('https://ctabustracker.com/bustime/api/v2/getpatterns?key=ujAhaYu9dy6TAF2VgMLWK5nnV&rt=20&pid=954&format=json');
  const data = await response.json();

  // for (let i = 0; i < data["bustime-response"]["ptr"].length; i++) {
  //   console.log("{");
  //   console.log("pid : " + data["bustime-response"]["ptr"][i]["pid"]);

  //   for (let j = 0; j < data["bustime-response"]["ptr"][i]["pt"].length; j++) {
  //     console.log("seq : " + data["bustime-response"]["ptr"][i]["pt"][j]["seq"]);
  //   }
  //   console.log("}\n value of i = " + i + "\n");
  // }

  // This section will help you create a new record.
  // insertion(data);  

  const uri = "mongodb://localhost:27017/recordsdatabase";
  const client = new MongoClient(uri);
  const database = client.db("recordsdatabase");
  const haiku = database.collection("Pattern");
  console.log("******Pattern Table created******");


  for (let i = 0; i < data["bustime-response"]["ptr"].length; i++) {
    // console.log("{");
    // console.log("pid : " + data["bustime-response"]["ptr"][i]["pid"]);

    for (let j = 0; j < data["bustime-response"]["ptr"][i]["pt"].length; j++) {
      // console.log("seq : " + data["bustime-response"]["ptr"][i]["pt"][j]["seq"]);
      var myobjPoint = {
        seq: data["bustime-response"]["ptr"][i]["pt"][j]["seq"],
        lat: data["bustime-response"]["ptr"][i]["pt"][j]["lat"],
        lon: data["bustime-response"]["ptr"][i]["pt"][j]["lon"],
        typ: data["bustime-response"]["ptr"][i]["pt"][j]["typ"],
        stpid: data["bustime-response"]["ptr"][i]["pt"][j]["stpid"],
        stpnm: data["bustime-response"]["ptr"][i]["pt"][j]["stpnm"],
        pdist: data["bustime-response"]["ptr"][i]["pt"][j]["pdist"],
      };
      var myobjPattern = {
        pid: data["bustime-response"]["ptr"][i]["pid"],
        ln: data["bustime-response"]["ptr"][i]["ln"],
        rtdir: data["bustime-response"]["ptr"][i]["rtdir"],
        pt: myobjPoint,
      }
    }
    // console.log("}\n value of i = " + i + "\n");
    const result = haiku.insertOne(myobjPattern);
  }
}




// GetDataFromAPI_Routes();
// GetDataFromAPI_Vehicles();
// GetDataFromAPI_Directions();
// GetDataFromAPI_Stops();
// GetDataFromAPI_Pattern();

// Express Route
const recordRoute = require('./routes/routes.route')
const directionRoute = require('./routes/direction.route')
const stopRoute = require('./routes/stops.route')
const vehicleRoute = require('./routes/vehicle.route')
const patternRoute = require('./routes/pattern.route')

// Connecting mongoDB Database
mongoose
  .connect('mongodb://localhost:27017/recordsdatabase')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/routes', recordRoute);
app.use('/direction', directionRoute);
app.use('/stop', stopRoute);
app.use('/vehicle', vehicleRoute);
app.use('/pattern', patternRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});