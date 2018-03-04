const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

console.log('inswapi router');

const FavoriteSchema = new mongoose.Schema(
  {
    name: {type: String},
    homeworld: {type: String},
    species: {type: String},
    films: {type: String},
    title: {type: String},
    opening_crawl: {type: String},
    release_date: {type: String},
    director: {type: String},
    climate: {type: String},
    terrain: {type: String},
    classification: {type: String},
    birth_year: {type: String},
    skin_colors: {type: String},
    skin_color: {type: String},
    hair_colors: {type: String},
    hair_color: {type: String},
    hair_color: {type: String},
    eye_color: {type: String},
    average_height: {type: String},
    average_lifespan: {type: String},
    model: {type: String},
    crew: {type: String},
    passengers: {type: String},
    length: {type: String},
    cargo_capacity: {type: String},
    hyperdrive_rating: {type: String},
    max_atmosphering_speed: {type: String},
    manufacturer: {type: String},
  }
);//end FavoriteSchema

const Favorite = mongoose.model('Favorite', FavoriteSchema, 'favorites')


router.post('/', (request, response)=> {
    let newFavorite = new Favorite (request.body);
    console.log('favorite added', newFavorite);
    newFavorite.save((error, addedFavorite ) => {
        if(error){
            console.log('error in posting favorite', error);
            response.sendStatus(500);
        }else {
            response.sendStatus(201);
        }
    })
});

router.get('/', (request, response) => {
  Favorite.find({}, (error, foundFavorites) => {
    if (error){
      console.log('error on find favorites:', error);
      response.sendStatus(500);
    } else {
      response.send(foundFavorites);
    }
  })
});

router.delete('/:id', (request, response) => {
  let id = request.params.id;
  Favorite.findByIdAndRemove(
    {"_id": id},
    (error, deletedFavorite) => {
      if (error){
        console.log('error in delete');
        response.sendStatus(500);
      }else{
        response.sendStatus(200);
      }
    }
  )
});

module.exports = router;
