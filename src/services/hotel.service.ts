// import data hotels
import { hotels, setHotels } from '../data/hotel.data'
import { Hotel, HotelEntry } from '../interfaces/hotel.interfaces'

// handler get all hotels
export const getHotels = (): Hotel[] => hotels

// handler get specific hotel
export const getHotel = (id: string): Hotel | undefined => hotels.find((hotel) => hotel.id === id)

// handler create new hotel
export const createHotel = (hotel: HotelEntry): Hotel => {
  const newHotel = {
    id: Date.now().toString(),
    ...hotel
  }
  setHotels([...hotels, newHotel])
  return newHotel
}

// handler update specific hotel
export const updateHotel = (id: string, updatedHotel: HotelEntry): Hotel => {
  const index = hotels.findIndex((hotel) => hotel.id === id)
  if (index !== -1) {
    const updatedHotels = [...hotels]
    updatedHotels[index] = { id, ...updatedHotel }
    setHotels(updatedHotels)
  }
  return { id, ...updatedHotel }
}

// handler delete specific hotel
export const deleteHotel = (id: string): void => {
  const index = hotels.findIndex((hotel) => hotel.id === id)
  if (index !== -1) {
    const updatedHotels = [...hotels]
    updatedHotels.splice(index, 1)
    setHotels(updatedHotels)
  }
}
