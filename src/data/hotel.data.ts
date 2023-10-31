// create variable for data hotels
import data from './data.json'
import amenities from './amenities.json'
import { Hotel, IAmenities } from '../interfaces/hotel.interfaces'

export let hotels: Hotel[] = data as Hotel[]
// create function to set data hotels
export const setHotels = (data: Hotel[]): void => {
  hotels = data
}
export let amenitie: IAmenities = amenities as IAmenities

export const setAmenities = (data: IAmenities): void => {
  amenitie = data
}
