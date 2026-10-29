import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Tour {
  id: string;
  title: string;
  country: string;
  price: number;
  rating: number;
}

interface ToursState {
  items: Tour[];
  searchQuery: string;
}

const initialState: ToursState = {
  items: [
    {
      id: "1",
      title: "Альпійська казка",
      country: "Швейцарія",
      price: 1200,
      rating: 4.9,
    },
    {
      id: "2",
      title: "Пляжі Балі та Убуд",
      country: "Індонезія",
      price: 1500,
      rating: 4.8,
    },
    {
      id: "3",
      title: "Вічне місто та Ватикан",
      country: "Італія",
      price: 650,
      rating: 4.7,
    },
  ],
  searchQuery: "",
};

const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = toursSlice.actions;
export default toursSlice.reducer;
