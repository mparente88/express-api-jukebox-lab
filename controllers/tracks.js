const Track = require("../models/track.js")
const express = require("express")
const router = express.Router()

router.post("/", async (req, res) => {
  try {
    const track = await Track.create(req.body)
    res.status(201).json(track)
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
})

router.get("/", async (req, res) => {
  try {
    const tracks = await Track.find()
    res.status(200).json(tracks)
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const track = await Track.findById(req.params.id)
    if (!track) {
      return res.status(404).json({ error: "Track not found" })
    }
    res.status(200).json(track)
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
})

router.put("/:id", async (req, res) => {
  try {
    const track = await Track.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!track) {
      return res.status(404).json({ error: "Track not found" })
    }
    res.status(200).json(track)
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const track = await Track.findByIdAndDelete(req.params.id)
    if (!track) {
      return res.status(404).json({ error: "Track not found" })
    }
    res.status(200).json(track)
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
})

module.exports = router
