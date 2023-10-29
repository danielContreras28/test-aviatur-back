// create interface for hotel
export interface Hotel {
  id: string
  name: string
  stars: number
  price: number
  image: string
  amenities: string[]
}

export type HotelEntry = Omit<Hotel, 'id'>
