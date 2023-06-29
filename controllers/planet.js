/* eslint-disable no-console */
var { Planet } = require('../models/planet');
var ObjectID = require('mongoose').Types.ObjectId;
exports.index = (req, res) => {
  console.log('Obtenir des planètes');
  Planet.find((err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
};

exports.searchById = (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(400).send(`Pas d'enregistrement avec l'id: ${id}`)
  }
  Planet.findById(id, (err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
}

exports.insert = (req, res) => {
  console.log(req.body);
  const planet = req.body;
  const newPlanet = new Planet(planet);
  newPlanet.save((err, docs) => {
    if (!err) {
      res.status(201).send(docs)
    } else {
      res.status(500).send(err)
    }
  });
}

exports.update = (req, res) => {
  const id = req.params.id;
  console.log(`mise à jour avec les données de l'id: ${id}`);

  if (!ObjectID.isValid(id)) {
    return res.status(400).send(`Pas d'enregistrement avec l'id: ${id}`)
  }

  const planet = req.body;

  Planet.findByIdAndUpdate(id, { $set: planet }, { new: true }, (err, docs) => {
    if (!err) {
      res.status(200).send(docs)
    } else {
      console.log('Erreur lors de la mise à jour des données' + JSON.stringify(err, undefined, 2))
    }
  })
}

exports.delete = (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.send(400).send(`Pas d'enregistrement avec l'id: ${id}`)
  }

  Planet.findByIdAndRemove(id, (err, docs) => {
    const result = {
      data: docs,
      message: 'Planet has been removed successfully.',
      status: 200,
    }

    if (!err) {
      res.status(200).send(result)
    } else {
      res.status(500).send(err)
    }
  })
}