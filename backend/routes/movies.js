"use strict";

const express = require("express");

const { BadRequestError } = require("../expressError");
const axios = require("axios");

const router = new express.Router();

const BASE_URL = `http://www.omdbapi.com/?s=matrix&apikey=28189a38`

router.get("/", async (req, res, next) => {
  try {
    const movies = await axios(BASE_URL).then((res) => res.data);
    return res.json({ movies });
  } catch (err) {
    return next(err);
  }
});

router.get("/movie", async (req, res, next) => {
  try {
    const searchId = req.query.id
    const movie = await axios(
      `http://www.omdbapi.com/?i=${searchId}&apikey=28189a38`
      )
      .then((res) => res.data)
    return res.json({ movie });
  } catch (err) {
    return next(err);
  }
});

router.get("/search", async (req, res, next) => {
  try {
    const term = req.query.searchTerm
    const search = await axios(
      `http://www.omdbapi.com/?s=${term}&apikey=28189a38`
      )
      .then((res) => res.data)
    return res.json({ search });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
