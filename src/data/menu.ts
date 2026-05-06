import burger from "@/assets/burger.jpg";
import pizza from "@/assets/pizza.jpg";
import momos from "@/assets/momos.jpg";
import pasta from "@/assets/pasta.jpg";
import drinks from "@/assets/drinks.jpg";
import fries from "@/assets/fries.jpg";

export type MenuItem = {
  id: string;
  name: string;
  price: string;
  category: string;
  veg: boolean;
  image: string;
  label?: string;
  description: string;
  ingredients: string[];
};

export const categories = ["Burgers", "Pizzas", "Momos", "Pasta", "Drinks"] as const;

export const menu: MenuItem[] = [
  // Burgers
  { id: "aloo-peri", name: "Aloo Peri Burger", price: "₹78", category: "Burgers", veg: true, image: burger, label: "Bestseller", description: "Crispy spiced potato patty tossed with our signature peri-peri seasoning, layered with fresh lettuce and creamy mayo inside a soft toasted bun.", ingredients: ["Soft Bun","Aloo Patty","Peri Peri Spice","Lettuce","Onion","Mayo"] },
  { id: "paneer-burger", name: "Paneer Burger", price: "₹95", category: "Burgers", veg: true, image: burger, description: "Golden-fried paneer patty stacked with melty cheese, crisp veggies and tangy sauces.", ingredients: ["Bun","Paneer Patty","Cheese","Lettuce","Tomato","Mayo","Mint Sauce"] },
  { id: "crispy-chicken", name: "Crispy Chicken Burger", price: "₹108", category: "Burgers", veg: false, image: burger, label: "Popular", description: "Juicy crispy chicken layered with fresh lettuce and creamy mayo inside a toasted sesame bun.", ingredients: ["Sesame Bun","Crispy Chicken","Cheese","Lettuce","Pickles","Mayo"] },
  { id: "bbq-chicken", name: "BBQ Chicken Burger", price: "₹108", category: "Burgers", veg: false, image: burger, description: "Smoky grilled chicken glazed with house BBQ sauce, caramelized onions and melted cheese.", ingredients: ["Bun","Grilled Chicken","BBQ Sauce","Cheese","Onion","Lettuce"] },

  // Pizzas
  { id: "margherita", name: "Margherita", price: "₹146", category: "Pizzas", veg: true, image: pizza, description: "Classic hand-tossed pizza topped with rich tomato sauce, mozzarella and fresh basil.", ingredients: ["Pizza Base","Tomato Sauce","Mozzarella","Basil","Olive Oil"] },
  { id: "peri-paneer", name: "Peri Peri Paneer Pizza", price: "₹158", category: "Pizzas", veg: true, image: pizza, description: "Fiery peri-peri paneer cubes with bell peppers and onions on a cheesy base.", ingredients: ["Pizza Base","Tomato Sauce","Paneer","Peri Peri","Capsicum","Onion","Cheese"] },
  { id: "bbq-chicken-pizza", name: "BBQ Chicken Pizza", price: "₹226", category: "Pizzas", veg: false, image: pizza, label: "Chef's Pick", description: "Tender BBQ chicken, smoky sauce, mozzarella and onions on a wood-fired style crust.", ingredients: ["Pizza Base","BBQ Sauce","Chicken","Mozzarella","Onion","Coriander"] },
  { id: "tandoori-chicken-pizza", name: "Tandoori Chicken Pizza", price: "₹170", category: "Pizzas", veg: false, image: pizza, description: "Spiced tandoori chicken with bell peppers, onions and a creamy cheese blend.", ingredients: ["Pizza Base","Tandoori Chicken","Capsicum","Onion","Cheese","Mint Mayo"] },

  // Momos
  { id: "veg-momo", name: "Veg Momo", price: "₹78", category: "Momos", veg: true, image: momos, description: "Steamed dumplings stuffed with finely chopped veggies, served with spicy schezwan chutney.", ingredients: ["Flour Wrap","Cabbage","Carrot","Onion","Garlic","Schezwan"] },
  { id: "paneer-momo", name: "Paneer Momo", price: "₹158", category: "Momos", veg: true, image: momos, description: "Soft dumplings filled with seasoned paneer & herbs, paired with spicy red chutney.", ingredients: ["Flour Wrap","Paneer","Herbs","Garlic","Chili Sauce"] },
  { id: "chicken-momo", name: "Chicken Momo", price: "₹170", category: "Momos", veg: false, image: momos, description: "Juicy minced chicken dumplings, steamed to perfection with our fiery dip.", ingredients: ["Flour Wrap","Minced Chicken","Onion","Garlic","Soy","Chili Dip"] },
  { id: "cheese-corn-momo", name: "Cheese Corn Momo", price: "₹145", category: "Momos", veg: true, image: momos, description: "Sweet corn and gooey cheese stuffed momos — kid-favorite, party-perfect.", ingredients: ["Flour Wrap","Corn","Mozzarella","Pepper","Herbs"] },

  // Pasta
  { id: "white-pasta", name: "White Sauce Pasta", price: "₹220", category: "Pasta", veg: true, image: pasta, description: "Silky alfredo-style white sauce tossed with al dente penne, herbs and parmesan.", ingredients: ["Penne","Cream","Butter","Garlic","Parmesan","Herbs"] },
  { id: "red-pasta", name: "Red Sauce Pasta", price: "₹208", category: "Pasta", veg: true, image: pasta, description: "Tangy tomato-basil arrabbiata with a hint of chili and fresh herbs.", ingredients: ["Penne","Tomato","Basil","Chili","Garlic","Olive Oil"] },
  { id: "chicken-white-pasta", name: "Chicken White Sauce Pasta", price: "₹220", category: "Pasta", veg: false, image: pasta, description: "Creamy alfredo pasta loaded with grilled chicken chunks and fresh herbs.", ingredients: ["Penne","Chicken","Cream","Garlic","Parmesan","Herbs"] },

  // Drinks
  { id: "mojito", name: "Mojitos", price: "₹78–₹115", category: "Drinks", veg: true, image: drinks, label: "Refreshing", description: "Bubbly mint-lime mojitos in classic, blue, watermelon & strawberry flavors.", ingredients: ["Mint","Lime","Soda","Sugar","Ice"] },
  { id: "cold-coffee", name: "Cold Coffee", price: "₹78", category: "Drinks", veg: true, image: drinks, description: "Thick, frothy, ice-cold coffee blended with milk and a hint of chocolate.", ingredients: ["Coffee","Milk","Sugar","Ice","Chocolate"] },
];

export const popular = ["bbq-chicken-pizza","crispy-chicken","fries-popular","chicken-wings-popular"];

export { fries };
