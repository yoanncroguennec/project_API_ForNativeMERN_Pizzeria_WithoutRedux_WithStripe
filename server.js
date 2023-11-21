const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
  // res.json("Bienvenue sur l'API");
  res.status(300).json({ message: "Bienvenue sur l'API" });
});

app.get("/", (req, res) => {
  return res.json({
    products: [
      // CATEGORY - CHEESE
      {
        name: "Margherita",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586549/React%20native/Pizzeria%20without%20Redux/cheese/jlsewbrgfjgvlnome3t6.png",
        category: "Fromages",
        desc: "Sauce tomate, mozzarella.",
        price: 7,
        allergens: "Gluten, Lait",
      },
      {
        name: "Authentique raclette",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586555/React%20native/Pizzeria%20without%20Redux/cheese/ktaqlmxc8dtainmq1vz4.png",
        category: "Fromages",
        desc: "Crème fraîche légère française, mozzarella, bacon, pommes de terre françaises sautées, oignons, raclette française.",
        price: 10,
        allergens: "Gluten, Lait",
      },
      {
        name: "4 fromages",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586554/React%20native/Pizzeria%20without%20Redux/cheese/yxewuaw3erpxly4k1wdp.png",
        category: "Fromages",
        desc: "Sauce tomate, mozzarella, chèvre, emmental, Fourme d’Ambert AOP.",
        price: 12,
        allergens: "Gluten, Lait",
      },
      {
        name: "Chèvre miel",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586551/React%20native/Pizzeria%20without%20Redux/cheese/s1oe302zumsq55ways1n.png",
        category: "Fromages",
        desc: "Crème fraîche légère française, mozzarella, chèvre, miel français.",
        price: 11.5,
        allergens: "Gluten, Lait",
      },
      {
        name: "Bacon chèvre miel",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586553/React%20native/Pizzeria%20without%20Redux/cheese/kgp7imvnqvyytyqaciiu.png",
        category: "Fromages",
        desc: "Crème fraîche légère française, mozzarella, bacon, chèvre, miel français, origan.",
        price: 13,
        allergens: "Gluten, Lait",
      },
      {
        name: "Savoyarde",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586548/React%20native/Pizzeria%20without%20Redux/cheese/ozqhbkydwzi6elyu7kko.png",
        category: "Fromages",
        desc: "Crème fraîche légère française, mozzarella, lardons fumés, pommes de terre françaises sautées, Reblochon de Savoie AOP, origan.",
        price: 11,
        allergens: "Gluten, Lait",
      },
      // CATEGORY - BBQ / VIANDES
      {
        name: "Pepperoni",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586513/React%20native/Pizzeria%20without%20Redux/bbq_meet/pkngiplucqdf8nfvv8ye.png",
        category: "",
        desc: "Sauce tomate, mozzarella, pepperoni.",
        price: 14.5,
        allergens: "Céleri, Gluten, Lait, Moutarde",
      },
      {
        name: "Cannibale",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586527/React%20native/Pizzeria%20without%20Redux/bbq_meet/whcknypxzdysjx1h9nkk.png",
        category: "",
        desc: "Sauce barbecue, mozzarella, poulet rôti, merguez, haché au bœuf assaisonné.",
        price: 10.5,
        allergens: "Gluten, Lait",
      },
      {
        name: "Bacon groovy",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586526/React%20native/Pizzeria%20without%20Redux/bbq_meet/qio0ficg8nzbiqo9ganx.png",
        category: "",
        desc: "Crème fraîche légère française, mozzarella, poulet rôti, oignons, bacon, sauce barbecue.",
        price: 10,
        allergens: "Gluten, Lait",
      },
      {
        name: "Poulet BBQ",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586514/React%20native/Pizzeria%20without%20Redux/bbq_meet/puupacxo6s6f1dqkzn5g.png",
        category: "",
        desc: "Sauce barbecue, mozzarella, poulet rôti, duo de poivrons, oignons frits croustillants.",
        price: 11,
        allergens: "Gluten, Lait",
      },
      {
        name: "Barbecue Lovers",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586526/React%20native/Pizzeria%20without%20Redux/bbq_meet/xdhtzh98sy0ufdkln38f.png",
        category: "",
        desc: "Sauce barbecue, mozzarella, poulet rôti, pepperoni, bacon.",
        price: 13.5,
        allergens: "Céleri, Gluten, Lait, Moutarde",
      },
      {
        name: "Kebab",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586512/React%20native/Pizzeria%20without%20Redux/bbq_meet/mwqbsktf7ejkdcxqcr2y.png",
        category: "",
        desc: "Sauce tomate, mozzarella, viande kebab, tomates fraîches françaises, oignons, sauce blanche kebab.",
        price: 13.5,
        allergens: "Oeufs, Gluten, Lait, Moutarde",
      },
      {
        name: "Orientale",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586514/React%20native/Pizzeria%20without%20Redux/bbq_meet/pof7ssd3b3vlly0sgtmd.png",
        category: "",
        desc: "Sauce tomate, mozzarella, oignons, merguez, duo de poivrons.",
        price: 9,
        allergens: "Gluten, Lait",
      },
      {
        name: "Classique jambon",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586522/React%20native/Pizzeria%20without%20Redux/bbq_meet/fiwkk7d7deonk9ob22s7.png",
        category: "",
        desc: "Sauce tomate, mozzarella, jambon.",
        price: 6.5,
        allergens: "Gluten, Lait",
      },
      {
        name: "Hawaënne",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586521/React%20native/Pizzeria%20without%20Redux/bbq_meet/ljlibmvssrglk9hkkwwf.png",
        category: "",
        desc: "Sauce tomate, mozzarella, poulet rôti, ananas.",
        price: 8.5,
        allergens: "Gluten, Lait",
      },
      {
        name: "Hot & spicy",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586520/React%20native/Pizzeria%20without%20Redux/bbq_meet/gwlegck0uvlwcmbltwf3.png",
        category: "",
        desc: "Sauce tomate, mozzarella, oignons, merguez, duo de poivrons, piments jalapeños.",
        price: 10,
        allergens: "Gluten, Lait",
      },
      {
        name: "Sublim' curry",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586509/React%20native/Pizzeria%20without%20Redux/bbq_meet/z0dhzaqmqezqxfjrysw2.png",
        category: "",
        desc: "Crème fraîche légère française, mozzarella, oignons, poulet rôti, duo de poivrons, sauce au curry.",
        price: 8,
        allergens: "Gluten, Lait, Moutarde",
      },
      {
        name: "Tropicale",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586505/React%20native/Pizzeria%20without%20Redux/bbq_meet/xhyqszzv2uzd7dlhigal.png",
        category: "",
        desc: "Sauce barbecue, mozzarella, pepperoni, ananas.",
        price: 9,
        allergens: "Céleri, Gluten, Lait, Moutarde",
      },
      {
        name: "Reine",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586512/React%20native/Pizzeria%20without%20Redux/bbq_meet/ooszirsjtnxpcujfotn9.png",
        category: "",
        desc: "Sauce tomate, mozzarella, jambon, champignons de Paris.",
        price: 6.5,
        allergens: "Gluten, Lait",
      },
      {
        name: "Forestière",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586523/React%20native/Pizzeria%20without%20Redux/bbq_meet/xsw9cdclvhgshvmshvar.png",
        category: "",
        desc: "Crème fraîche légère française, mozzarella, lardons fumés, oignons, jambon, champignons de Paris, origan.",
        price: "",
        allergens: "Gluten, Lait",
      },
      {
        name: "Indienne",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586519/React%20native/Pizzeria%20without%20Redux/bbq_meet/kys0cfpyckx1pygoeogm.png",
        category: "",
        desc: "Crème fraîche légère française, mozzarella, oignons, poulet rôti, champignons de Paris, emmental.",
        price: "",
        allergens: "Gluten, Lait",
      },
      // VEGAN
      {
        name: "Vegan champignons",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586610/React%20native/Pizzeria%20without%20Redux/vegans/b5nf4fbx961fgy1drtul.png",
        category: "",
        desc: "Sauce tomate, râpé vegan, champignons de Paris, origan.",
        price: "7",
        allergens: "Gluten",
      },
      {
        name: "Vegan peppina",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586609/React%20native/Pizzeria%20without%20Redux/vegans/k6fevonjkpq6bs4d3ahl.png",
        category: "",
        desc: "Sauce tomate, râpé vegan, champignons, oignons, duo de poivrons, olives Kalamata Bio, tomates fraîches, origan.",
        price: 6.5,
        allergens: "Gluten",
      },
      // FISH
      {
        name: "Nordique",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586580/React%20native/Pizzeria%20without%20Redux/fish/xfhcg0hlcocxurzxulsb.png",
        category: "",
        desc: "Crème fraîche légère française, mozzarella, saumon fumé au bois de hêtre.",
        price: 16,
        allergens: "Poisson, Gluten, Lait",
      },
      {
        name: "Océane",
        img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586578/React%20native/Pizzeria%20without%20Redux/fish/oxjne0o6ykwgzwcx7sb4.png",
        category: "",
        desc: "Crème fraîche légère française, mozzarella, oignons, thon, olives Kalamata bio.",
        price: 15.5,
        allergens: "Poisson, Gluten, Lait",
      },
    ],
  });
});

// ROUTES UNDEFINED
app.all("*", (req, res) => {
  res.status(404).json({ message: "Cette route n'existe pas" });
});

app.listen(process.env.PORT || 3200, () => {
  console.log("Server started");
});
