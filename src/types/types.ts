export type TCourse = {
  id: string;
  title: string;
  description: string;
  instructor: string;
  image: string;
  price: number;
  duration: string;
  level: string;
  category: string;
  rating: number;
  ratingCount: number;
};

export type TInstructor = {
  id: string;
  instructorName: string;
  designation: string;
  image: string;
};
