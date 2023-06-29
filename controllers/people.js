/* eslint-disable no-console */
var { People } = require('../models/people');
var ObjectID = require('mongoose').Types.ObjectId;

exports.index = (req, res) => {
  console.log('Obtenir des personnes');
  People.find((err, docs) => {
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
  People.findById(id, (err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
}

exports.insert = (req, res) => {
  console.log(req.body);
  const people = req.body;
  const newPeople = new People(people);
  newPeople.save((err, docs) => {
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

  const people = req.body;

  People.findByIdAndUpdate(id, { $set: people }, { new: true }, (err, docs) => {
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

  People.findByIdAndRemove(id, (err, docs) => {
    const result = {
      data: docs,
      message: 'Erreur lors de la mise à jour des données',
      status: 200,
    }

    if (!err) {
      res.status(200).send(result)
    } else {
      res.status(500).send(err)
    }
  })
}