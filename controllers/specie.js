/* eslint-disable no-console */
var { Specie } = require('../models/specie');
var ObjectID = require('mongoose').Types.ObjectId;
exports.index = (req, res) => {
  console.log('get specie');
  Specie.find((err, docs) => {
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
  Specie.findById(id, (err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
}

exports.insert = (req, res) => {
  console.log(req.body);
  const specie = req.body;
  const newSpecie = new Specie(specie);
  newSpecie.save((err, docs) => {
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

  const specie = req.body;

  Specie.findByIdAndUpdate(id, { $set: specie }, { new: true }, (err, docs) => {
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

  Specie.findByIdAndRemove(id, (err, docs) => {
    const result = {
      data: docs,
      message: 'Les espèces ont été retirées avec succès.',
      status: 200,
    }

    if (!err) {
      res.status(200).send(result)
    } else {
      res.status(500).send(err)
    }
  })
}