// import our model so we can talk to the database and performs
// our CRUD operations
const WineModel = require('../models/wine')

module.exports = {
    index,
    new: newWine,
    create,
	delete: deleteOne,
    edit
}

async function edit(req, res) {
	try {
		const wineToEdit = await WineModel.findById(req.params.id);
		res.render('wines/edit', { wine: wineToEdit });
	} catch (err) {
		console.log(err);
		res.redirect('/wines');
	}
}


async function deleteOne(req, res) {
	try {
		await WineModel.findByIdAndDelete(req.params.id);
		res.redirect('/wines');
	} catch (err) {
		console.log(err);
		res.redirect('/wines');
	}
}


async function create(req, res) {
	try {
	  const createdWinesFromDB = await WineModel.create(req.body); // the await is waiting for the MovieModel to go to MongoDB ATLAS (our db) a
	  //and put the contents form in the db, and come back to the express server
  
	  // if you want to see what you put in the database on your server
	  console.log(createdWinesFromDB);
  
	  // Always redirect after CUDing data
	  // We'll refactor to redirect to the movies index after we implement it
	  res.redirect('/wines'); // Update this line
	} catch (err) {
	  // Typically some sort of validation error
	  console.log(err);
	  res.render('wine/new');
	}
  }


function newWine(req, res){

	// res.render looks in our 
	// views folder for the ejs page
	res.render('wines/new')
}

async function index(req, res){
	
	// then we want to send a ejs page with all the movies to the browser
	try {
		// We want our model to go to the database and get all the movies
		// .find({}) is mongoose model query method
		const winesFromTheDB = await WineModel.find({})
		console.log(winesFromTheDB)
		res.render('wines/index', {wineDocs: winesFromTheDB})
		// wine docs can now be accessed within wine/index
	} catch(err){
		console.log(err)
		res.redirect('/')
	}
}