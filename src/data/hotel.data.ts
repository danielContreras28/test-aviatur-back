// create variable for data hotels
import data from './data.json'
import { Hotel } from '../interfaces/hotel.interfaces'

export let hotels: Hotel[] = data as Hotel[]
// create function to set data hotels
export const setHotels = (data: Hotel[]): void => {
  hotels = data
}
