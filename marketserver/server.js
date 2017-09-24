const express = require('express');
const app = express();

var bodyParser = require('body-parser');  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));

var port = process.env.PORT || 8080;
var router = express.Router();

var sheetsu = require('sheetsu-node');
// create a config file
var config = {
  	address: '9c7cd5bc5e0e',
  	//address: 'ab4c5625cd5d',
};
// Create new client
var client = sheetsu(config);

var length = 0;
client.read().then((data) => {
	console.log(JSON.parse(data).length - 1);
	length = JSON.parse(data).length - 1; 
}, (err) => {
	console.log(err);
});


router.get('/', (req, res)  => {
  	res.json({Welcome: "Welcome to website!"});
});
router.get('/listings', (req, res) => {
	client.read().then((data) => {
		res.json(data);
	}, (err) => {
		console.log(err);
	});
});


router.get('/listings/:id', (req, res) => {
	client.read({ search: {'id':req.params.id}}).then((data) => {
		//console.log(req.params.id);
		res.json(data);
	}, (err) => {
		console.log(err);
	});
})

router.post('/listings', function(req, res) {
	var listDate = req.body.List_Date;
	var email = req.body.Email_Address;
	var name = req.body.Your_Name;
	var itemName = req.body.Item_Name;
	var brand = req.body.Brand;
	var quantity = req.body.Quantity;
	var category = req.body.Category;
	var description = req.body.Description;
	var condition = req.body.Condition;
	var desiredPrice = req.body.Desired_Price;
	var picture = req.body.Picture;
	var imageID = req.body.Image_ID;
	var image = req.body.Image;
	var book = req.body.Books;
	var search = req.body.Search;
	var id = ++length;
	var time = req.body.Time;
	var days = req.body.Days;
	console.log("input complete");
	
	console.log({'List Date':listDate, 'Email Address':email,
				'Your Name (First & Last)':name, 'Item Name':itemName,
				'Brand':brand, 	'Quantity':quantity,
    			'Category':category, 'Description':description,
    			'Condition (rating)':condition, 'Desired Price ($)':desiredPrice,
    			'Picture(s)!':picture, 'Image ID':imageID, 'Image(s)!':image,
    			'Books':book, 'Search':search, 'id':id, 'Time':time,
    			'Days':days});
	client.create({'List Date':listDate, 'Email Address':email,
				'Your Name (First & Last)':name, 'Item Name':itemName,
				'Brand':brand, 	'Quantity':quantity,
    			'Category':category, 'Description':description,
    			'Condition (rating)':condition, 'Desired Price ($)':desiredPrice,
    			'Picture(s)!':picture, 'Image ID':imageID, 'Image(s)!':image,
    			'Books':book, 'Search':search, 'id':id, 'Time':time,
    			'Days':days}).then(function(data) {
	  console.log(data);
   	}, function(err){
	  console.log(err);
});	
});

/*client.create({ 'List Date': '9/23/2017 10:32:24'}).then(function(data) {
  console.log(data);
}, function(err){
  console.log(err);
});*/

app.use('/api', router);

const server = app.listen(port, () => {
  	const host = server.address().address;
  	const port = server.address().port;

  	console.log('Example app listening at http://${host}:${port}');
});