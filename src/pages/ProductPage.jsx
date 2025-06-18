import PlantCard from "../components/PlantCard";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 10,
    image: "images (1).jfif",
    category: "Air Purifying",
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    price: 20,
    image: "images (2).jfif",
    category: "Large Plants",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 8,
    image: "images.jfif",
    category: "Air Purifying",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 6,
    image: "Img1.jpg",
    category: "Succulents",
  },
  {
    id: 5,
    name: "Peace Lily",
    price: 15,
    image: "Img2.jpg",
    category: "Flowering",
  },
  {
    id: 6,
    name: "Pothos",
    price: 9,
    image: "plant-food2.jpg",
    category: "Hanging Plants",
  },

  {
    id: 7,
    name: "Peace Lily",
    price: 15,
    image: "Img2.jpg",
    category: "Flowering",
  },

  {
    id: 8,
    name: "Aloe Vera",
    price: 6,
    image: "Img1.jpg",
    category: "Succulents",
  },
  {
    id: 9,
    name: "Snake Plant",
    price: 10,
    image: "images (1).jfif",
    category: "Air Purifying",
  },
  {
    id: 10,
    name: "Fiddle Leaf Fig",
    price: 20,
    image: "images (2).jfif",
    category: "Large Plants",
  },
  {
    id: 11,
    name: "Pothos",
    price: 9,
    image: "plant-food2.jpg",
    category: "Hanging Plants",
  },
  {
    id: 12,
    name: "Spider Plant",
    price: 8,
    image: "images.jfif",
    category: "Air Purifying",
  },
];

function ProductPage() {
  return (
    <div>
      <h2>Our Plants</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
