import type { Tour } from "../store/toursSlice";

const MOCK_TOURS: Tour[] = [
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
  {
    id: "5",
    title: "Сакура та хмарочоси Токіо",
    country: "Японія",
    price: 2100,
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "6",
    title: "Загадки пірамід Гізи",
    country: "Єгипет",
    price: 520,
    rating: 4.6,
    imageUrl:
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80",
  },
];

export const tourService = {
  // Симуляція GET-запиту: повертає проміс із затримкою 800 мс
  async fetchTours(): Promise<Tour[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_TOURS);
      }, 800);
    });
  },
};
