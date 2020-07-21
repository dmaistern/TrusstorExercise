const express = require('express');
const fetch = require('node-fetch');
const tvShowsRouter = express.Router();

tvShowsRouter.get('/tvShows/:searchString', getTvShows);


async function getTvShows (req, res) {
  try {
    const {searchString} = req.params
    const response = await fetch(`http://api.tvmaze.com/search/shows?q=${searchString}`);
    const result = await response.json();
    const tvShows = getNamesAndImages(result)
    res.send({tvShows})
  } catch (error) {
    console.error(error.message)
  }
}

function getNamesAndImages (fullData) {
  return fullData.map(show => {
    const image = show.show.image && show.show.image.medium || 'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png';
    const { name, id } = show.show;
    return { id, name, image }
  })
}

module.exports = tvShowsRouter;