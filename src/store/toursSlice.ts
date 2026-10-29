import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Tour {
  id: string;
  title: string;
  country: string;
  price: number;
  rating: number;
  imageUrl: string;
}

interface ToursState {
  items: Tour[];
  searchQuery: string;
  sortBy: "price" | "rating";
}

const initialState: ToursState = {
  items: [
    {
      id: "1",
      title: "Альпійська казка",
      country: "Швейцарія",
      price: 1200,
      rating: 4.9,
      imageUrl:
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "2",
      title: "Пляжі Балі та Убуд",
      country: "Індонезія",
      price: 1500,
      rating: 4.8,
      imageUrl:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "3",
      title: "Вічне місто та Ватикан",
      country: "Італія",
      price: 650,
      rating: 4.7,
      imageUrl:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "4",
      title: "Фіорди та північне сяйво",
      country: "Норвегія",
      price: 1850,
      rating: 5.0,
      imageUrl:
        "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80",
    },
  ],
  searchQuery: "",
  sortBy: "rating",
};

const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setSortBy(state, action: PayloadAction<"price" | "rating">) {
      state.sortBy = action.payload;
    },
  },
});

export const { setSearchQuery, setSortBy } = toursSlice.actions;
export default toursSlice.reducer;
