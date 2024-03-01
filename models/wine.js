// THE PURPOSE OF THIS FILE
// is to create and export our object Model (which we use in our controllers)
// The model performs cruds operations on the movies collection in our movies database!
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    // One to many relationship on the belongs to side
    user: {
      type: Schema.Types.ObjectId, // this is from mongoose
      ref: 'User' // this references this line mongoose.model('User', userSchema);
    },
    userName: String,
  }, {
    timestamps: true
  })

// when we use embedding we define the schemas of the relationship in the same file
// Referencing (each data entity) gets its own model file
// Enforces the shape of the documents (Think of objects)
// in our mongodb movies collection
const wineSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    vintage: Number,
    varietal: String,
    wineType: {type: String,
        enum:['red', 'white', 'sparkling', 'dessert','rose', 'fortified']
    },
    country:{type: String,
        enum: ['France', 'Italy', 'spain', 'USA', 'Chile', 'Austalia', 'South Africa', 'Germany', 'Argentina', 'Portugal','New Zealand', 'Other']
    },
    quantity: {
        type: Number,
        default: 1
    },
    reviews: [reviewSchema]
   
  });
      
  // Compile the schema into a model and export it
  // Movie, creates a movies collection in our movies database
  module.exports = mongoose.model('Wine', wineSchema);
  