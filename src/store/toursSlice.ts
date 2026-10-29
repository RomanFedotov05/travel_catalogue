import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { tourService } from "../services/tourService";

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
  isLoading: boolean;
  error: string | null;
}

const initialState: ToursState = {
  items: [],
  searchQuery: "",
  sortBy: "rating",
  isLoading: false,
  error: null,
};

// Асинхронний action для завантаження турів через API
export const fetchTours = createAsyncThunk<
  Tour[],
  void,
  { rejectValue: string }
>("tours/fetchTours", async (_, { rejectWithValue }) => {
  try {
    const data = await tourService.fetchTours();
    return data;
  } catch (err) {
    return rejectWithValue(
      "Не вдалося завантажити список турів. Спробуйте пізніше.",
    );
  }
});

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTours.fulfilled, (state, action: PayloadAction<Tour[]>) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Помилка мережі при завантаженні даних";
      });
  },
});

export const { setSearchQuery, setSortBy } = toursSlice.actions;
export default toursSlice.reducer;
