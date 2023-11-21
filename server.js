const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.json({
    restaurant: {
      path: "Le Pain Quotidien",
      name: "Le Pain Quotidien - Montorgueil",
      categories: ["Petit Déjeuner", "Salade", "Brunch", "Boulangerie"],
      price: "€€",
      phone: "+33144780895",
      percentage: 87,
      ratings: "50+",
      address: "8 Rue de Bretagne, 75003 Paris",
      delay: "10 - 20 Mins (Au plus tôt)",
      description:
        "Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien propose des ingrédients simples et sains, du bon pain, des fruits et des légumes frais et de saison issus de l’agriculture biologique.",
      picture: "https://f.roocdn.com/images/menus/17697/header-image.jpg",
      client_address: {
        coordinates: [2.36051359999999, 48.8737157],
        locality: "Paris",
        country: "FR",
        formatted_address: "25 Passage Dubail, 75010 Paris, France",
        post_code: "75010",
        route: "Passage Dubail",
        street_number: "25",
        city: "Paris",
      },
    },
    categories: [
      {
        name: "Brunchs",
        meals: [
          {
            id: "1519055545-88",
            title: "Brunch authentique 1 personne",
            description:
              "Assiette de jambon cuit, jambon fumeì, terrine, comté bio & camembert bio, salade jeunes pousses, oeuf poché bio, pain bio & confiture, 1 viennoiserie bio au choix, granola parfait bio, jus de fruits 33cl au choix",
            price: "25.00",
            picture:
              "https://f.roocdn.com/images/menu_items/1583350/item-image.jpg",
            popular: true,
          },
          {
            id: "1519055545-89",
            title: "Brunch vegan",
            description:
              "Falafels bio, houmous bio, avocat aux super graines bio, lentilles au paprika, herbes fraîches, houmous de carotte et légumes de saison, soupe du jour bio, pain bio & confiture, crunola parfait aux fruits de saison, flûte aux raisins et noisettes, jus de fruits 33cl au choix",
            price: "25.00",
            picture:
              "https://f.roocdn.com/images/menu_items/3905693/item-image.jpg",
          },
        ],
      },
      {
        name: "Petit déjeuner",
        meals: [
          {
            id: "1519055545-90",
            title: "Petit-déjeuner 1 personne",
            description:
              "Assortiment de pains bio, beurre & confitures bio + 1 viennoiserie bio au choix + 1 boisson fraîche au choix",
            price: "10.40",
          },
          {
            id: "1519055545-91",
            title: "Fromage blanc bio au miel",
            description: "",
            price: "10.40",
          },
          {
            id: "1519055545-92",
            title: "Granola parfait bio",
            description: "Yaourt, granola, et fruits frais de saison",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323271/item-image.jpg",
            popular: true,
          },
          {
            id: "1519055545-93",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Crunola parfait bio (100% végétalien)",
            description:
              "100% végétalien - granola cru, banane, lait de coco et beurre de noix de cajou",
            price: "6.60",
          },
          {
            id: "1519055545-137",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Salade de fruits bio de saison",
            description: "Pomme, ananas, kiwi, orange, grenade, myrtilles",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/2549378/item-image.jpg",
          },
          {
            id: "1519055545-95",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Omelette au four de saison",
            description:
              "Courge butternut, chèvre & thym, avec une salade de jeunes pousses",
            price: "6.60",
          },
          {
            id: "1519055545-96",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Chia bowl",
            description:
              "Graines de chia bio, myrtilles, grenades, crunola bio",
            price: "6.60",
            popular: true,
          },
          {
            id: "1519055545-97",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Bircher Muesli",
            description:
              "Muesli maison bio, boisson à l’amande bio, fruits de saison et super graines bio (VEGAN)",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/5250391/item-image.jpg",
          },
        ],
      },
      {
        name: "Viennoiseries et pains",
        meals: [
          {
            id: "1519055545-98",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Croissant bio",
            description: "",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323282/item-image.jpg",
          },
          {
            id: "1519055545-99",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pain au chocolat bio",
            description: "",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323287/item-image.jpg",
            popular: true,
          },
          {
            id: "1519055545-100",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pain au raisins bio",
            description: "",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/3637782/item-image.jpg",
          },
          {
            id: "1519055545-101",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Baguette à l'ancienne bio",
            description: "300g",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1583350/item-image.jpg",
          },
          {
            id: "1519055545-102",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Grande brioche",
            description: "",
            price: "6.60",
          },
          {
            id: "1519055545-103",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Muffin bio myrtilles (100% végétalien)",
            description: "Vegan",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/2020235/item-image.jpg",
            popular: true,
          },
          {
            id: "1519055545-104",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Muffin bio pomme cannelle",
            description: "",
            price: "6.60",
          },
          {
            id: "1519055545-105",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Muffin banane chocolat bio",
            description: "",
            price: "6.60",
          },
          {
            id: "1519055545-106",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pain multi-céréales sans gluten",
            description: "350g",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323275/item-image.jpg",
          },
          {
            id: "1519055545-107",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pain multi-céréales raisins bio",
            description: "700g",
            price: "6.60",
          },
          {
            id: "1519055545-108",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Flûte raisins et noisettes bio",
            description: "",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/2549462/item-image.jpg",
          },
          {
            id: "1519055545-109",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Baguette Graines de Potiron & Tournesol",
            description: "300g",
            price: "6.60",
          },
        ],
      },
      {
        name: "Salades",
        meals: [
          {
            id: "1519055545-110",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "César BLT",
            description:
              "Poulet, parmesan, avocat, croûtons, bacon, chips de légumes, jeunes pousses, kale et tomates cerises",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/2018213/item-image.jpg",
            popular: true,
          },
          {
            id: "1519055545-111",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Buddha bowl",
            description:
              "Saumon fumé, avocat, super graines bio, lentilles au parika, chou rouge, concombre, jeunes pousses",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323292/item-image.jpg",
          },
          {
            id: "1519055545-112",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Veggie Bowl",
            description:
              "Sarrasin bio, quinoa bio, houmous de carottes, lentilles au paprika, courge butternut, grenade, avocat, caviar d'algues, chips de légumes bio",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/2549941/item-image.jpg",
          },
          {
            id: "1519055545-113",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Falafel Bowl",
            description:
              "Quinoa bio, houmous bio, carottes, chou rouge, pousses d’épinard, sauce tahini et pain de saison (VEGAN)",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/5250423/item-image.jpg",
            popular: true,
          },
          {
            id: "1519055545-114",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Bol lentilles ou quinoa (100% végétalien)",
            description: "",
            price: "3.90",
          },
          {
            id: "1519055545-125",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Quiche Lorraine",
            description: "Servie avec une salade de jeunes pousses bio",
            price: "6.90",
          },
          {
            id: "1519055545-116",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Mini salade lentilles (100% végétarien)",
            description: "Lentilles au paprika, carottes bio et oeuf poché bio",
            price: "3.90",
          },
        ],
      },
      {
        name: "Tartines froides",
        meals: [
          {
            id: "1519055545-117",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Toast avocat bio (100% végétalien)",
            description: "Purée d'avocat bio et gomasio bio",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/1323299/item-image.jpg",
          },
          {
            id: "1519055545-118",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Tartine poulet fumé & avocat",
            description: "Concombre bio et cébettes",
            price: "6.90",
          },
          {
            id: "1519055545-119",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Jambon fumé & mozzarella di bufala bio tomates séchées",
            description: "Mozzarella di bufala bio",
            price: "6.90",
            popular: true,
          },
          {
            id: "1519055545-120",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Tartine Jambon Blanc & Comté Bio",
            description: "",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/4607227/item-image.jpg",
          },
          {
            id: "1519055545-121",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Tartine Houmous de Carotte & Féta",
            description:
              "Super graines bio, grenade, concombre et roquette (Végétarien)",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/5250426/item-image.jpg",
          },
        ],
      },
      {
        name: "Soupe & plats chauds",
        meals: [
          {
            id: "1519055545-122",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Le déjeuner du boulanger",
            description:
              "Demi-tartine du jour & soupe du jour aux légumes bio, servi avec du pain bio et une salade de jeunes pousses bio",
            price: "6.90",
          },
          {
            id: "1519055545-123",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Soupe du jour aux légumes bio (100% végétalien)",
            description: "",
            price: "6.90",
          },
          {
            id: "1519055545-126",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pot-au-feu de légumes bio, curry bio et poulet grillé",
            description: "",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/1493250/item-image.jpg",
          },
          {
            id: "1519055545-124",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title:
              "Pot-au-feu de légumes bio, quinoa bio & harissa bio (100% végétalien)",
            description: "",
            price: "6.90",
            popular: true,
          },
          {
            id: "1519055545-127",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Chili sin carne (vegan)",
            description:
              "3 haricots, purée avocat, spécialité au soja bio & cebettes",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/4607228/item-image.jpg",
          },
          {
            id: "1519055545-128",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Curry de Coco aux Légumes",
            description:
              "Servi avec sarrasin bio et chutney de cassis au gingembre (VEGAN)",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/5250429/item-image.jpg",
            popular: true,
          },
        ],
      },
      { name: "Sandwichs baguette", meals: [] },
      { name: "Desserts", meals: [] },
      { name: "Boissons fraîches", meals: [] },
      { name: "Epicerie bio", meals: [] },
      { name: "Repas corporate", meals: [] },
      { name: "Couverts", meals: [] },
    ],
  });
});

// Northflank va nous fournir une variable process.env.PORT
// if (process.env.PORT) {
//   app.listen(process.env.PORT, () => {
//     console.log("Server started");
//   });
// } else {
//   app.listen(3200, () => {
//     console.log("Server started");
//   });
// }

app.listen(process.env.PORT || 3200, () => {
  console.log("Server started");
});

// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // const express = require("express");
// // const cors = require("cors");

// // const app = express();
// // app.use(cors());

// app.get("/", (req, res) => {
//   // res.json("Bienvenue sur l'API");
//   res.status(300).json({ message: "Bienvenue sur l'API" });
// });

// app.get("/products", (req, res) => {
//   return res.json({
//     products: [
//       // CATEGORY - CHEESE
//       {
//         name: "Margherita",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586549/React%20native/Pizzeria%20without%20Redux/cheese/jlsewbrgfjgvlnome3t6.png",
//         category: "Fromages",
//         desc: "Sauce tomate, mozzarella.",
//         price: 7,
//         allergens: "Gluten, Lait",
//       },
//       {
//         name: "Authentique raclette",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586555/React%20native/Pizzeria%20without%20Redux/cheese/ktaqlmxc8dtainmq1vz4.png",
//         category: "Fromages",
//         desc: "Crème fraîche légère française, mozzarella, bacon, pommes de terre françaises sautées, oignons, raclette française.",
//         price: 10,
//         allergens: "Gluten, Lait",
//       },
//       {
//         name: "4 fromages",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586554/React%20native/Pizzeria%20without%20Redux/cheese/yxewuaw3erpxly4k1wdp.png",
//         category: "Fromages",
//         desc: "Sauce tomate, mozzarella, chèvre, emmental, Fourme d’Ambert AOP.",
//         price: 12,
//         allergens: "Gluten, Lait",
//       },
//       {
//         name: "Chèvre miel",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586551/React%20native/Pizzeria%20without%20Redux/cheese/s1oe302zumsq55ways1n.png",
//         category: "Fromages",
//         desc: "Crème fraîche légère française, mozzarella, chèvre, miel français.",
//         price: 11.5,
//         allergens: "Gluten, Lait",
//       },
//       {
//         name: "Bacon chèvre miel",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586553/React%20native/Pizzeria%20without%20Redux/cheese/kgp7imvnqvyytyqaciiu.png",
//         category: "Fromages",
//         desc: "Crème fraîche légère française, mozzarella, bacon, chèvre, miel français, origan.",
//         price: 13,
//         allergens: "Gluten, Lait",
//       },
//       {
//         name: "Savoyarde",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586548/React%20native/Pizzeria%20without%20Redux/cheese/ozqhbkydwzi6elyu7kko.png",
//         category: "Fromages",
//         desc: "Crème fraîche légère française, mozzarella, lardons fumés, pommes de terre françaises sautées, Reblochon de Savoie AOP, origan.",
//         price: 11,
//         allergens: "Gluten, Lait",
//       },
//       // CATEGORY - BBQ / VIANDES
//       {
//         name: "Pepperoni",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586513/React%20native/Pizzeria%20without%20Redux/bbq_meet/pkngiplucqdf8nfvv8ye.png",
//         category: "",
//         desc: "Sauce tomate, mozzarella, pepperoni.",
//         price: 14.5,
//         allergens: "Céleri, Gluten, Lait, Moutarde",
//       },
//       {
//         name: "Cannibale",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586527/React%20native/Pizzeria%20without%20Redux/bbq_meet/whcknypxzdysjx1h9nkk.png",
//         category: "",
//         desc: "Sauce barbecue, mozzarella, poulet rôti, merguez, haché au bœuf assaisonné.",
//         price: 10.5,
//         allergens: "Gluten, Lait",
//       },
//       {
//         name: "Bacon groovy",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586526/React%20native/Pizzeria%20without%20Redux/bbq_meet/qio0ficg8nzbiqo9ganx.png",
//         category: "",
//         desc: "Crème fraîche légère française, mozzarella, poulet rôti, oignons, bacon, sauce barbecue.",
//         price: 10,
//         allergens: "Gluten, Lait",
//       },
//       {
//         name: "Poulet BBQ",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586514/React%20native/Pizzeria%20without%20Redux/bbq_meet/puupacxo6s6f1dqkzn5g.png",
//         category: "",
//         desc: "Sauce barbecue, mozzarella, poulet rôti, duo de poivrons, oignons frits croustillants.",
//         price: 11,
//         allergens: "Gluten, Lait",
//       },
//       {
//         name: "Barbecue Lovers",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586526/React%20native/Pizzeria%20without%20Redux/bbq_meet/xdhtzh98sy0ufdkln38f.png",
//         category: "",
//         desc: "Sauce barbecue, mozzarella, poulet rôti, pepperoni, bacon.",
//         price: 13.5,
//         allergens: "Céleri, Gluten, Lait, Moutarde",
//       },
//       {
//         name: "Kebab",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586512/React%20native/Pizzeria%20without%20Redux/bbq_meet/mwqbsktf7ejkdcxqcr2y.png",
//         category: "",
//         desc: "Sauce tomate, mozzarella, viande kebab, tomates fraîches françaises, oignons, sauce blanche kebab.",
//         price: 13.5,
//         allergens: "Oeufs, Gluten, Lait, Moutarde",
//       },
//       {
//         name: "Orientale",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586514/React%20native/Pizzeria%20without%20Redux/bbq_meet/pof7ssd3b3vlly0sgtmd.png",
//         category: "",
//         desc: "Sauce tomate, mozzarella, oignons, merguez, duo de poivrons.",
//         price: 9,
//         allergens: "Gluten, Lait",
//       },
//       {
//         name: "Classique jambon",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586522/React%20native/Pizzeria%20without%20Redux/bbq_meet/fiwkk7d7deonk9ob22s7.png",
//         category: "",
//         desc: "Sauce tomate, mozzarella, jambon.",
//         price: 6.5,
//         allergens: "Gluten, Lait",
//       },
//       {
//         name: "Hawaënne",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586521/React%20native/Pizzeria%20without%20Redux/bbq_meet/ljlibmvssrglk9hkkwwf.png",
//         category: "",
//         desc: "Sauce tomate, mozzarella, poulet rôti, ananas.",
//         price: 8.5,
//         allergens: "Gluten, Lait",
//       },
//       {
//         name: "Hot & spicy",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586520/React%20native/Pizzeria%20without%20Redux/bbq_meet/gwlegck0uvlwcmbltwf3.png",
//         category: "",
//         desc: "Sauce tomate, mozzarella, oignons, merguez, duo de poivrons, piments jalapeños.",
//         price: 10,
//         allergens: "Gluten, Lait",
//       },
//       {
//         name: "Sublim' curry",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586509/React%20native/Pizzeria%20without%20Redux/bbq_meet/z0dhzaqmqezqxfjrysw2.png",
//         category: "",
//         desc: "Crème fraîche légère française, mozzarella, oignons, poulet rôti, duo de poivrons, sauce au curry.",
//         price: 8,
//         allergens: "Gluten, Lait, Moutarde",
//       },
//       {
//         name: "Tropicale",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586505/React%20native/Pizzeria%20without%20Redux/bbq_meet/xhyqszzv2uzd7dlhigal.png",
//         category: "",
//         desc: "Sauce barbecue, mozzarella, pepperoni, ananas.",
//         price: 9,
//         allergens: "Céleri, Gluten, Lait, Moutarde",
//       },
//       {
//         name: "Reine",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586512/React%20native/Pizzeria%20without%20Redux/bbq_meet/ooszirsjtnxpcujfotn9.png",
//         category: "",
//         desc: "Sauce tomate, mozzarella, jambon, champignons de Paris.",
//         price: 6.5,
//         allergens: "Gluten, Lait",
//       },
//       {
//         name: "Forestière",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586523/React%20native/Pizzeria%20without%20Redux/bbq_meet/xsw9cdclvhgshvmshvar.png",
//         category: "",
//         desc: "Crème fraîche légère française, mozzarella, lardons fumés, oignons, jambon, champignons de Paris, origan.",
//         price: "",
//         allergens: "Gluten, Lait",
//       },
//       {
//         name: "Indienne",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586519/React%20native/Pizzeria%20without%20Redux/bbq_meet/kys0cfpyckx1pygoeogm.png",
//         category: "",
//         desc: "Crème fraîche légère française, mozzarella, oignons, poulet rôti, champignons de Paris, emmental.",
//         price: "",
//         allergens: "Gluten, Lait",
//       },
//       // VEGAN
//       {
//         name: "Vegan champignons",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586610/React%20native/Pizzeria%20without%20Redux/vegans/b5nf4fbx961fgy1drtul.png",
//         category: "",
//         desc: "Sauce tomate, râpé vegan, champignons de Paris, origan.",
//         price: "7",
//         allergens: "Gluten",
//       },
//       {
//         name: "Vegan peppina",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586609/React%20native/Pizzeria%20without%20Redux/vegans/k6fevonjkpq6bs4d3ahl.png",
//         category: "",
//         desc: "Sauce tomate, râpé vegan, champignons, oignons, duo de poivrons, olives Kalamata Bio, tomates fraîches, origan.",
//         price: 6.5,
//         allergens: "Gluten",
//       },
//       // FISH
//       {
//         name: "Nordique",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586580/React%20native/Pizzeria%20without%20Redux/fish/xfhcg0hlcocxurzxulsb.png",
//         category: "",
//         desc: "Crème fraîche légère française, mozzarella, saumon fumé au bois de hêtre.",
//         price: 16,
//         allergens: "Poisson, Gluten, Lait",
//       },
//       {
//         name: "Océane",
//         img: "https://res.cloudinary.com/ddxjrmujw/image/upload/v1700586578/React%20native/Pizzeria%20without%20Redux/fish/oxjne0o6ykwgzwcx7sb4.png",
//         category: "",
//         desc: "Crème fraîche légère française, mozzarella, oignons, thon, olives Kalamata bio.",
//         price: 15.5,
//         allergens: "Poisson, Gluten, Lait",
//       },
//     ],
//   });
// });

// // app.listen(process.env.PORT || 3200, () => {
// //   console.log("Server started");
// // });

// // ROUTES UNDEFINED
// app.all("*", (req, res) => {
//   res.status(404).json({ message: "Cette route n'existe pas" });
// });

// app.listen(process.env.PORT || 3200, () => {
//   console.log("Server started");
// });
