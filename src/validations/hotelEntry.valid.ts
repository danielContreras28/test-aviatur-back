import { HotelEntry } from '../interfaces/hotel.interfaces'
import { isArrayString, isNumber, isString } from './utils.valid'

// handler validate request body for create or update hotel
export const validateHotel = (object: any): HotelEntry => {
  const hotelEntry: HotelEntry = {
    // ...
    name: parseName(object.name),
    stars: parseStars(object.stars),
    price: parsePrice(object.price),
    image: parseImage(object.image),
    amenities: parseAmenities(object.amenities)
  }
  return hotelEntry
}

// handler parse name of hotel
export const parseName = (nameFromRequest: any): string => {
  if (!isString(nameFromRequest)) {
    throw new Error('Name must be a string')
  }
  return nameFromRequest
}

// handler parse price of hotel
const parsePrice = (priceFromRequest: any): number => {
  if (!isNumber(priceFromRequest)) {
    throw new Error('Price must be a number')
  }
  return priceFromRequest
}

// handler parse stars of hotel
const parseStars = (starsFromRequest: any): number => {
  if (!isNumber(starsFromRequest)) {
    throw new Error('Stars must be a number')
  }
  return starsFromRequest
}

// handler parse image of hotel
const parseImage = (imageFromRequest: any): string => {
  if (!isString(imageFromRequest)) {
    throw new Error('Image must be a string')
  }
  return imageFromRequest
}

// handler parse amenities of hotel
const parseAmenities = (amenitiesFromRequest: any): string[] => {
  if (!isArrayString(amenitiesFromRequest)) {
    throw new Error('Amenities must be an array of string')
  }
  return amenitiesFromRequest
}
