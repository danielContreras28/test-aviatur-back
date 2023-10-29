// create router for hotels
import express from 'express'
// import services
import * as hotelService from '../services/hotel.service'
import { Hotel, HotelEntry } from '../interfaces/hotel.interfaces'
import { validateHotel } from '../validations/hotelEntry.valid'

const router = express.Router()

// Define routes for hotels
// router list all hotels
router.get('/', (_, res) => {
  // Handle GET request for all hotels
  res.json({
    message: 'Get all hotels',
    data: hotelService.getHotels()
  })
})
// router get specific hotel
router.get('/:id', (req, res) => {
  // Handle GET request for a specific hotel
  const hotel: Hotel | undefined = hotelService.getHotel(req.params.id)
  // hotel is valid
  if (hotel == null) {
    res.status(404).json({
      message: 'Hotel not found'
    })
  } else {
    res.json({
      message: 'Get hotel',
      data: hotel
    })
  }
})
// router create new hotel
router.post('/', (req, res) => {
  // Handle POST request to create a new hotel
  try {
    const hotelEntry: HotelEntry = validateHotel(req.body)
    const hotel: Hotel = hotelService.createHotel(hotelEntry)
    res.json({
      message: 'Success Create new hotel',
      data: hotel
    })
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({
        message: 'Bad Request',
        error: err.message
      })
    }
  }
})
// router update specific hotel
router.put('/:id', (req, res) => {
  // Handle PUT request to update a hotel
  // load data hotel by id
  try {
    const hotel = hotelService.getHotel(req.params.id)
    // hotel is valid
    if (hotel == null) {
      res.status(404).json({
        message: 'Hotel not found'
      })
    } else {
      // update hotel
      const hotelEntryBody: HotelEntry = validateHotel(req.body)
      const hotelEntry: Hotel = hotelService.updateHotel(req.params.id, hotelEntryBody)
      res.json({
        message: 'Success Update hotel',
        data: hotelEntry
      })
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({
        message: 'Bad Request',
        error: err.message
      })
    }
  }
})
// router delete specific hotel
router.delete('/:id', (req, res) => {
  // Handle DELETE request to delete a hotel
  // load data hotel by id
  const hotel = hotelService.getHotel(req.params.id)
  // hotel is valid
  if (hotel == null) {
    res.status(404).json({
      message: 'Hotel not found'
    })
  } else {
    // delete hotel
    hotelService.deleteHotel(req.params.id)
    res.json({
      message: 'Success Delete hotel'
    })
  }
})

export default router
