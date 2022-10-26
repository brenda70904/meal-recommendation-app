'use strict'

function Recipe(name, fileName, ingredients, ingredientsDetail, direction, serves, time, fileExtension = 'jpeg') {
  this.name = name;
  this.fileName = fileName;
  this.ingredients = ingredients;
  this.ingredientsDetail = ingredientsDetail;
  this.direction = direction;
  this.serves = serves;
  this.time = time;
  this.fileExtension = fileExtension;
  this.src = `./Images/${this.fileName}.${fileExtension}`;
  this.addToArray = function () {
    allRecipes.push(this);
  }
  this.addToArray();
}
let allRecipes = [];

let chickenTikkaMasala = new Recipe(
  'Chicken Tikka Masala',
  'chickenTikkaMasala',
  ['chicken thighs', 'yogurt', 'garlic', 'butter', 'ginger', 'turmeric', 'cumin', 'onion', 'tomato', 'cream', 'brown sugar'],
  ['28 oz boneless & skinless chicken thighs cut into bite-sized pieces', '1 cup plain yogurt', '1 1/2 tbsp minced garlic', '1 tbsp ginger', '2 tsp garam masala', '1 tsp turmeric', '1 tsp ground cumin', '1 tsp Kashmiri chili (or 1/2 tsp ground red chili powder)', '1 tsp of salt', '2 tsp of vegetable/canola oil', '2 tbsp butter', '2 small onions finely diced', '1 1/2 tbsp garlic finely grated', '1 tbsp ginger finely grated', '1 1/2 tsp garam masala', '1 1/2 tsp ground cumin', '1 tsp turmeric powder', '1 tsp ground coriander', '14 oz tomato puree', '1 tsp Kashmiri chili (optional)', '1 tsp ground red chili powder', '1 tsp salt', '1 1/4 cups of heavy cream', '1 tsp brown sugar', '1/4 cup water (if needed)', '4 tbsp fresh cilantro or coriander to garnish'],
  ['In a bowl, combine chicken with all of the ingredients for the chicken marinade; let marinate for 10 minutes to an hour (or overnight if time allows).', 'Heat oil in a large skillet or pot over medium-high heat. When sizzling, add chicken pieces in batches of two or three. Fry until browned for only 3 minutes on each side. Set aside and keep warm.', 'Melt the butter in the same pan. Fry the onions until soft (about 3 minutes) while scraping up any browned bits stuck on the bottom of the pan. ', 'Add garlic and ginger and sauté for 1 minute until fragrant, then add garam masala, cumin, turmeric and coriander. Fry for about 20 seconds until fragrant, while stirring occasionally.', 'Pour in the tomato puree, chili powders and salt. Let simmer for about 10-15 minutes, stirring occasionally until sauce thickens and becomes a deep brown red colour.', 'Stir the cream and sugar through the sauce. Add the chicken and its juices back into the pan and cook for an additional 8-10 minutes until chicken is cooked through and the sauce is thick and bubbling.', 'Garnish with cilantro (coriander) and serve with hot garlic butter rice and fresh homemade Naan bread.'],
  5,
  45
);

let paprikaPorkTenderloin = new Recipe(
  'Paprika Pork Tenderloin',
  'paprikaPorkTenderloin',
  ['potato', 'lemon', 'oregano', 'green beans', 'pork', 'paprika', 'feta cheese', 'basil', 'capers'],
  ['12 oz potatoes', '1 lemon', '1/8 oz oregano', '6 oz green beans', '2 (5 oz) pork tenderloins', '1 tsp paprika', '2 oz feta cheese', '1 1/4 oz lemon-basil caper sauce'],
  ['Preheat oven to 425 degrees. Halve yellow potatoes lengthwise. Lay flat and cut lengthwise into wedges, about ¼ inch thick. Zest whole lemon over large bowl (reserve zested lemon for another use). De-stem oregano; finely chop leaves. Trim stem ends off green beans. Halve widthwise.', 'Place potatoes in bowl with lemon zest. Drizzle with 1 tablespoon cooking oil. Season with about half the oregano (reserve remaining oregano for another use), salt, and pepper. Toss to coat. Spread potatoes out in a single layer on a lightly oiled, foil-lined baking sheet. Roast 14-16 minutes, or until fork-tender, stirring halfway through.', 'Pat pork tenderloins dry with paper towels. Season with paprika and orange spice blend, salt, and pepper. Heat 1 tablespoon cooking oil in a large oven-safe sauté pan over medium-high heat. Add pork to hot pan. Sear 3-5 minutes, or until lightly browned on all sides. Transfer pan to oven. Roast 8-12 minutes, or until fully cooked. Transfer pork to a cutting board. Let rest at least 3 minutes.', 'Heat 1 tablespoon cooking oil in a medium sauté pan over medium-high heat. Add green beans to hot pan. Season with salt and pepper. Cook 4-5 minutes, or until tender, stirring occasionally. Remove pan from heat. Add feta cheese to pan. Toss to combine.', 'Cut pork tenderloins into 6-8 slices each. Divide feta green beans and roasted potatoes between plates. Shingle citrusy paprika-spiced pork alongside. Drizzle lemon-basil caper sauce over pork.'],
  2,
  35,
  'jpg'
);

let mongolianBeef = new Recipe(
  'Mongolian Beef',
  'mongolianBeef',
  ['flank steak', 'cornstarch', 'ginger', 'garlic', 'soy sauce', 'brown sugar', 'green onion'],
  ['1 pound flank steak', '1/4 cup cornstarch', '1/4 cup oil', '2 tsp fresh minced ginger', '1 tbsp minced garlic', '1/3 cup soy sauce', '1/3 cup water', '1/2 cup brown sugar', '4 scallions'],
  ['Slice the flank steak against the grain in 1/4-inch thick pieces and add it to a ziploc bag with the cornstarch.', 'Press the steak around in the bag making sure each piece is fully coated with cornstarch and leave it to sit.', 'Add the oil to a large frying pan and heat on medium high heat.', 'Add the steak, shaking off any excess corn starch, to the pan in a single layer and cook on each side for 1 minute. Remove when done.', 'Add the ginger and garlic to the pan and sauté for 10-15 seconds.', 'Add the soy sauce, water and dark brown sugar to the pan and let it come to a boil.', 'Add the steak back in and let the sauce thicken for 20-30 seconds.', 'The cornstarch we used on the steak should thicken the sauce, if you find it is not thickening enough add 1 tablespoon of cornstarch to 1 tablespoon of cold water and stir to dissolve the cornstarch and add it to the pan.', 'Add the scallions, stir to combine everything, and cook for a final 20-30 seconds.'],
  4,
  25
)

let garlicButterChicken = new Recipe(
  'Garlic Butter Chicken',
  'garlicButterChicken',
  ['chicken breast', 'stock', 'butter', 'garlic'],
  ['3 tbsp oil', '1 1/2 lbs boneless & skinless chicken breasts, pounded to an even thickness (4 average-sized breasts)', '1-2 tsp seasoning', '1 tsp salt', '1 tsp black pepper', '1/2 cup white wine or chicken broth', '3 tbsp unsalted butter', '1 tbsp minced garlic', '2 tsp fresh parsley (optional)'],
  ['To a large skillet, add the oil, pounded chicken, evenly season with seasoning, salt, pepper, and cook over medium-high heat for 5 minutes. After 5 minutes, flip chicken over. It should have a medium golden color.', 'Allow chicken to cook on the second side for about 5 minutes, or until done and cooked through.', 'Remove chicken with a slotted spatula and place it on a plate to rest.', 'Using caution, deglaze your skillet by adding wine (or broth) and allow the liquid to bubble up and steam violently for a few seconds.', 'Add the butter and allow it to melt, about 1 minute; stir continuously until melted.', 'Add the garlic and cook until fragrant, about 1 minutes; stir continuously.', 'Turn the heat off, add the chicken back into the skillet, flip it around in the garlic butter sauce, and spoon the sauce over the chicken.', 'Optionally garnish with parsley and serve immediately.'],
  4,
  20
);

let spaghetti = new Recipe(
  'Spaghetti',
  'spaghetti',
  ['ground beef', 'onion', 'tomato', 'parsley', 'garlic powder', 'peppers', 'spaghetti noodles', 'sugar'],
  ['1 lb ground beef', 'salt and black pepper', '1 medium onion, chopped', '15 oz tomato sauce', '6 oz tomato paste', '1/2 tsp Italian seasoning', '1 tbsp parsley', '1 tsp garlic powder', 'crushed red pepper flakes', '1 tbsp granulated sugar', '1 cup water', '1/4 cup fresh basil leaves (optional)', 'spaghetti noodles'],
  ['Season ground beef with salt and pepper.', 'In a large skillet, add the beef and chopped onion and brown. Drain excess grease.', 'Add tomato sauce, tomato paste, Italian seasoning, parsley, garlic powder, crushed red pepper, and sugar to the skillet.', 'Stir well to combine and bring to a boil. Add water and stir well.', 'Reduce heat and simmer for 30 minutes. Add chopped basil before serving, if desired.'],
  5,
  40
);
let fajitaVeggies = new Recipe(
  'Fajita Veggies',
  'fajitaVeggies',
  ['peppers', 'mushrooms', 'onion', 'garlic', 'chili powder', 'cumin', 'balsamic vinegar', 'lime', 'tortillas'],
  ['3 peppers, sliced into strips', '3 portobello mushrooms', '1 red onion, sliced into wedges', '2 tbsp oil', '2 garlic cloves, chopped', '1/2 tsp chili powder', '1/2 tsp cumin', '1/2 tsp salt', 'Splash of balsamic vinegar', '2 limes', 'Black pepper', '8 tortillas', 'Guacamole or avocado slices squeezed with lime (optional)', 'Jalapeños (optional)', 'Diced tomatoes or Pico de Gallo (optional)', 'Cilantro (optional)', 'Salsa (optional)'],
  ['Heat a grill to medium heat with a 12-inch cast-iron skillet (or grill pan) inside.', 'Arrange the peppers on a tray and the mushrooms and onion wedges on a separate rimmed plate. In a small bowl, whisk together the oil, garlic, chili powder, cumin, salt, and several grinds of pepper. Drizzle 1 scant tablespoon of the mixture over the peppers and toss to coat. Drizzle the remaining marinade over the mushrooms and onions. Drizzle the mushrooms with a splash of balsamic vinegar and use your hands to coat the mushrooms on both sides.', 'Grill the peppers in the cast-iron pan for 8 to 10 minutes, tossing occasionally, until charred and soft. Grill the mushrooms and onion wedges directly on the grill for about 4 minutes about per side. Remove everything from the grill. Squeeze the juice of 1/2 lime over the peppers and season with salt, pepper, and more chili powder, to taste. Slice the mushrooms into strips and place on a serving dish. Transfer the onions and the peppers to a serving skillet or large platter.', 'Serve with the tortillas, and add optinional guacamole, jalapeños, tomatoes, cilantro, salsa, and remaining lime wedges for serving.'],
  4,
  30
);

let porkStirFry = new Recipe(
  'Pork Stir Fry',
  'porkStirFry',
  ['pork', 'oyster sauce', 'cornstarch', 'baking soda', 'soy sauce', 'honey', 'hoisin sauce', 'onion', 'peppers', 'carrot', 'mushrooms', 'cashews', 'red chili flakes', 'garlic', 'ginger', 'peas'],
  ['1 lb pork', '5 tbsp water', '2 tbsp oyster sauce', '2 tsp corn starch', '3 tbsp oil', '1/2 tsp baking soda', '2 tbsp soy sauce', '2 tbsp honey', '1 tbsp hoisin sauce', '1 small onion', '3 bell peppers', '3 carrots', '6 oz mushrooms', '1/3 cup cashews', '1 tsp red chili flakes', '4 garlic cloves', '1 tbsp ginger', '6oz snow peas'],
  ['Slice pork very thinly against the grain, and place in a bowl.', 'In a separate bowl, mix water, oyster sauce and baking soda. Pour over pork and mix together well with hands. Allow the liquids to absorb into meat.', 'Stir in corn starch and 1.5 tablespoons of oil. Allow the meat to marinate while you prep the other ingredients.', 'Heat one tablespoon of oil in a wok over high heat.', 'Once hot, add in the pork in a single layer. Leave it undisturbed for 30 seconds, then give it a stir. Cook just until opaque, them remove to a plate.', 'Reduce heat to medium high. Add remaining tablespoon of oil, then add in onion, peppers, carrots, mushrooms, cashews and red chili flakes. Stir fry about 5 minutes.', 'Add in ginger and garlic. Cook for a minute, then add in sauce.', 'Cook for a few minutes, till the sauce starts simmering. Stir in the snow peas and pork, cook for about another minute, then serve with your favorite rice or noodles.'],
  4,
  25
);

let meatloaf = new Recipe(
  'Meatloaf',
  'meatloaf',
  ['ground beef', 'egg', 'onion', 'milk', 'bread crumbs', 'ketchup', 'brown sugar', 'mustard'],
  ['1.5 lbs ground beef', '1 egg', '1 onion, chopped', '1 cup milk', '1 cup dried bread crumbs', 'salt', 'pepper', '1/3 cup ketchup', '2 tbsp brown sugar', '2 tbsp mustard'],
  ['Preheat the oven to 350 degrees F (175 degrees C). Lightly grease a 9x5-inch loaf pan.', 'Combine ground beef, onion, milk, bread crumbs and egg in a large bowl; season with salt and pepper. Transfer into prepared loaf pan.', 'Mix ketchup, brown sugar, and mustard together in a small bowl until well combined; pour over meatloaf and spread it evenly over the top.', 'Bake in the preheated oven until no longer pink in the center, about 1 hour.'],
  8,
  75
);

let cornedBeefCabbage = new Recipe(
  'Corned Beef & Cabbage',
  'cornedBeefCabbage',
  ['corned beef', 'potato', 'carrot', 'cabbage'],
  ['3 lbs corned beef brisket', '10 small potatoes', '5 carrots', '1 head cabbage'],
  ['Place corned beef in a Dutch oven and cover with water. Add spices, cover, and bring to a boil. Reduce heat and simmer until corned beef is just about fork-tender, about 2 hours.', 'While the corned beef is simmering, cut potatoes in half. Peel carrots and cut into 3-inch pieces. Cut cabbage into small wedges.', 'When corned beef has cooked for 2 hours, add potatoes and carrots; cook until vegetables are almost tender and meat is fork-tender, about 10 minutes. Add cabbage and cook until tender, about 15 more minutes.', 'Remove meat and let rest for 15 minutes. Leave broth and vegetables in the Dutch oven.', 'Slice meat across the grain. Serve with vegetables and broth.'],
  6,
  150
);

let sloppyJoes = new Recipe(
  'Sloppy Joes',
  'sloppyJoes',
  ['ground beef', 'onion', 'peppers', 'ketchup', 'brown sugar', 'mustard', 'garlic powder', 'bread'],
  ['1 lb ground beef', '1/4 cup chopped onion', '1/4 cup chopped bell pepper', '3/4 cup ketchup', '1 tbsp brown sugar', '1 tsp mustard', '1/2 tsp garlic powder', 'salt', 'black pepper', '6 buns'],
  ['Heat a large skillet over medium heat. Cook and stir lean ground beef in the hot skillet until some of the fat starts to render, 3 to 4 minutes. Add onion and bell pepper; continue to cook until vegetables have softened and beef is cooked through, 3 to 5 more minutes.', 'Stir in ketchup, brown sugar, mustard, and garlic powder; season with salt and pepper. Reduce heat to low and simmer for 20 to 30 minutes.', 'Divide meat mixture evenly among hamburger buns.'],
  6,
  35
);

let chowMein = new Recipe(
  'Chow Mein',
  'chowMein',
  ['chicken breast', 'chow mein noodles', 'cabbage', 'carrot', 'green onion', 'garlic', 'oyster sauce', 'soy sauce', 'stock', 'cornstarch', 'sugar', 'sesame oil'],
  ['1 lb chicken breast, boneless, skinless', '3 tbsp oil', '12 oz chow mein noodles, (uncooked noodles)', '2 cups cabbage', '1 large carrot, julienned', '1/2 batch green onions', '2 garlic cloves', '6 tbsp oyster sauce', '3 tbsp soy sauce', '3 tbsp light sesame oil, (not toasted)', '1/2 cup chicken stock', '1 tbsp cornstarch', '1 tbsp granulated sugar'],
  ['In a small mixing bowl, use a whisk to combine oyster sauce, granulated sugar, sesame oil, soy sauce, chicken broth and cornstarch. Set aside. Cook your noodles according to package instructions then drain, rinse with cold water and set aside. Heat a large wok or pan with olive oil over medium-heat. Cut your chicken breasts into bite-sized strips and cook them in the oil until golden brown. Remove strips and set aside. Add carrots, cabbage and pressed garlic and saute for a few minutes until veggies are slightly softened and the cabbage is a bit translucent. Add chicken and noodles back into the pan. Pour sauce over the top and continue cooking all the ingredients together for another 2 minutes. Garnish your chow mein with chopped green onions and serve the noodles straight from the pan and piping hot!'],
  6,
  35
);

let friedRice = new Recipe(
  'Chinese Fried Rice',
  'friedRice',
  ['rice', 'sesame oil', 'onion', 'peas', 'carrot', 'soy sauce', 'egg', 'green onion'],
  ['3 cups cooked rice', ' 2 Tbs sesame oil', '1 small white onion chopped', '1 cup frozen peas and carrots, thawed', '2-3 Tablespoons soy sauce more or less to taste', '2 eggs lightly, beaten', '2 Tbsp chopped green ', 'onions optional'],
  ['Preheat a large skillet or wok to medium heat. Pour sesame oil in the bottom. Add white onion and peas and carrots and fry until tender. Slide the onion, peas and carrots to the side, and pour the beaten eggs onto the other side. Using a spatula, scramble the eggs. Once cooked, mix the eggs with the vegetable mix. Add the rice to the veggie and egg mixture. Pour the soy sauce on top. Stir and fry the rice and veggie mixture until heated through and combined. Add chopped green onions if desired.'],
  4,
  25
);

let bakedSalmon = new Recipe(
  'Lemon Garlic Salmon',
  'bakedSalmon',
  ['salmon', 'garlic', 'lemon', 'butter'],
  ['1.5 pounds salmon fillet', '1 tablespoon olive oil', '3 cloves garlic finely minced', '1/2 lemon juice only', '1 teaspoon Italian seasoning', '1/4 teaspoon salt', 'black pepper to taste', '2 tablespoons butter diced'],
  ['Prep: Preheat oven to 400°F. Place a large piece of aluminum foil in a large rimmed baking dish that will comfortably hold all of your salmon (the baking dish is to catch any drippings - way easier to clean than your oven!). Season fish: Lightly grease the foil with olive oil. Place the salmon fillets on top (they can be close together if using individual fillets, just not on top of each other). Drizzle with 1 tablespoon olive oil and evenly scatter garlic on top. Drizzle with lemon juice and sprinkle with Italian seasoning, salt and pepper. Dot with butter. Seal foil over salmon. Bake: Bake for 10-15 minutes (depending on the thickness of your fillets) or until salmon flakes easily. Serve immediately.'],
  4,
  20
);

let panFriedPotato = new Recipe(
  'Pan Fried Potato Wedges',
  'panFriedPotato',
  ['potato', 'turmeric', 'garlic powder', 'cayenne pepper'],
  ['4 large potatoes', '3 tbs olive oil', '1/4 cup water', '1/2 tsp turmeric', '1 tsp garlic powder', 'Salt & pepper to taste', '1 tsp cayenne pepper'],
  ['Wash and peel(optional) the potatoes.Cut them into wedges and add them into a non-stick pan with a little bit of water and oil.Add salt , pepper and all the other spices.Close the pan and cook until all the water is finished and potatoes will start browning on their own for about 5 minutes.Fry turning sides until all the potatoes are fully cooked and browned. That will take about 10 minutes.'],
  2,
  15
);

let macNcheese = new Recipe(
  'Macaroni and Cheese',
  'macNcheese',
  ['macaroni noodles', 'butter', 'flour', 'milk', 'cheddar cheese'],
  ['1 (8 ounce) box elbow macaroni', '1/4 cup butter', '1/4 cup all-purpose flour', '1/2 teaspoon salt', 'ground black pepper to taste', '2 cups milk', '2 cups shredded Cheddar cheese'],
  ['Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes. At the same time, melt butter in a saucepan over medium heat. Add flour, salt, and pepper and stir until smooth, about 5 minutes. Pour in milk slowly, while stirring continuously. Continue to cook and stir until mixture is smooth and bubbling, about 5 minutes, making sure the milk doesn\'t burn. Add Cheddar cheese and stir until melted, 2 to 4 minutes.Drain macaroni and fold into cheese sauce until coated.'],
  4,
  25, 
  'jpg'
);

let broccoliPestoPasta = new Recipe(
  'Broccoli Pesto Pasta',
  'broccoliPestoPasta',
  ['broccoli', 'basil', 'garlic', 'pine nuts', 'parmesan cheese'],
  ['1 lb cooked pasta of your choice, pasta water reserved', '4 cups broccoli florets', '2 cups basil leaves', '2 garlic cloves', '1/4 cup pine nuts', '1 cup oil', '1/2 tsp salt', '1 cup Parmesan cheese, grated'],
  ['In a large pot bring water to a rapid boil.', 'Add the broccoli, bring the water back up to a boil for two minutes. Do not drain the water! Immediately transfer broccoli (with a slotted spoon) to a colander place under cold running water to stop further cooking.', 'Bring the water back to a boil and add your favorite pasta and cook according to the package (reserve 1 cup of pasta cooking water before draining).', 'In a large blender or food processor, blend together broccoli, basil, garlic, pine nuts, oil, salt and Parmesan cheese until smooth. Slowly pour in 1 cup of reserved pasta water until a nice sauce is formed. If sauce is too thick, add more pasta water one tablespoon at a time.', 'Toss hot pasta with sauce until completely coated. Top with extra Parmesan, pine nuts and chili flakes if desired.'],
  6,
  15
);

let chickenTortillaSoup = new Recipe(
  'Chicken Tortilla Soup',
  'chickenTortillaSoup',
  ['stock', 'chicken breast', 'enchilada sauce', 'tomato', 'corn'],
  ['4 cups chicken stock', '1 rotisserie chicken, shredded', '19 oz red enchilada sauce', '14 oz roasted tomatoes, diced', '14 oz sweet corn, drained (or canned creamed corn)'],
  ['Place all ingredients into a large soup pot and bring to a boil.', 'Simmer for 15 minutes.', 'Ladle soup into bowls and serve with your favorite fixings: lime juice, sour cream, shredded cheese, avocado, chips etc.'],
  4,
  15
);

let coconutCurryRamen = new Recipe(
  'Coconut Curry Ramen',
  'coconutCurryRamen',
  ['red curry paste', 'yellow curry powder', 'sesame oil', 'garlic', 'ginger', 'stock', 'coconut milk', 'green onion', 'ramen noodles', 'mushrooms', 'lime', 'bok choy', 'edamame'],
  ['1 tbsp red curry paste', '1 tbsp yellow curry powder', '1 tbsp sesame oil', '1 tbsp garlic, minced', '1 tbsp fresh ginger, minced', '4 cups stock (vegetable or chicken)', '1 (14 oz ) can full-fat coconut milk', '1 bunch green onions, white and green parts, thinly sliced, divided', '2 (3 oz) packages dried ramen noodles, (discard spice packet)', '8 oz mushrooms sliced (crimini or shitake)', '1 lime, juiced', '2 baby bok choy, chopped', '1/2 tsp salt', '1/2 cup shelled edamame', '1 tsp sesame seeds, (optional)', '2 6-minute eggs, (optional)'],
  ['Make the six-minute eggs (if using), set aside.', 'In a large pot over medium heat, whisk the red curry paste, yellow curry powder, sesame oil, garlic and ginger until fragrant, about 3 minutes.', 'Add the stock, coconut milk, white and light green parts of green onion (reserve the dark green parts for garnish), ramen noodles, mushrooms, lime juice, bok choy and salt. Bring to a boil. Boil for 2 minutes.', 'Add the shelled edamame and boil for 2 minutes longer, until noodles are cooked.', 'Divide the ramen into 2-4 bowls, garnish with remaining scallion tops, sesame seeds and halved, six-minute eggs (if using).'],
  4,
  20
);

let chickenStirFry = new Recipe(
  'Chicken Stir Fry',
  'chickenStirFry',
  ['chicken breast', 'cornstarch', 'sesame oil', 'green beans', 'garlic', 'ginger', 'soy sauce', 'red chili flakes'],
  ['2 lb boneless, skinless chicken breast, cut into 2-inch cubes', '3 tbsp cornstarch', '1/4 cup toasted sesame oil', '3/4 lb green beans, trimmed and cut into 3" pieces', '3 large garlic cloves, minced', '1 tbsp minced, fresh ginger', '1/4 cup soy sauce or tamari', '1/2 tsp red chili flakes', '1/4 tsp sea salt', 'sesame seeds, (optional)', 'minced cilantro, (optional)'],
  ['In a medium sized bowl toss together the chicken and cornstarch.', 'In a large skillet (or wok) heat 2 tablespoons of sesame oil over medium heat until glistening, about 2 minutes. Working in small batches, add in the chicken and allow to crisp, about 8 minutes. Turn often until all sides are golden brown and chicken is cooked through. Repeat steps until all chicken is cooked.', 'Once chicken is cooked add remaining 2 tablespoons of sesame oil to the pan and bring to high heat. The oil should be glistening and almost smoking. Add in green beans stirring often until blistered (little dark spots) and just barely tender, about 5 minutes. Remove from pan.', 'Reduce heat to medium-low, allow skillet to cool down slightly. Stir in garlic, ginger, soy sauce, chili flakes and salt. Stir until all ingredients are combine and garlic is fragrant. Add chicken and green beans back to the pan stirring until coated in sauce.', 'Sprinkle with sesame seeds and cilantro and serve immediately.'],
  5,
  35
);

let vegetarianSkilletEnchiladas = new Recipe(
  'Vegetarian Skillet Enchiladas',
  'vegetarianSkilletEnchiladas',
  ['onion', 'peppers', 'garlic', 'black beans', 'enchilada sauce', 'corn', 'chili powder', 'cumin', 'tortillas', 'cheese blend'],
  ['1 tbsp oil', '1 medium onion, chopped', '1 medium sweet red pepper, chopped', '2 garlic cloves, minced', '15 oz black beans, rinsed and drained', '10 oz enchilada sauce', '1 cup frozen corn', '2 tsp chili powder', '1/2 tsp ground cumin', '1/8 tsp pepper', '8 tortillas (6 inches), cut into 1/2-inch strips', '1 cup shredded cheese blend', 'Chopped fresh cilantro (optional)', 'Sliced avocado (optional)', 'Sliced radishes (optional)', 'Sour cream (optional)', 'Lime wedges (optional)'],
  ['Preheat oven to 400°. Heat oil in a 10-in. cast-iron or other ovenproof skillet over medium-high heat. Add onion and pepper; cook and stir until tender, 2-3 minutes. Add garlic; cook 1 minute longer. Stir in beans, enchilada sauce, corn, chili powder, cumin and pepper. Stir in tortilla strips.', 'Bring to a boil. Reduce heat; simmer, uncovered, until tortilla strips are softened, 3-5 minutes. Sprinkle with cheese. Bake, uncovered, until sauce is bubbly and cheese is melted, 3-5 minutes. If desired, garnish with optional ingredients.'],
  4,
  25
);

let albondigas = new Recipe(
  'Albondigas',
  'albondigas',
  ['carrot', 'potato', 'ground beef', 'rice', 'onion', 'milk', 'cilantro', 'beef bouillon', 'bread crumbs'],
  ['1 quart water', '4 carrots, sliced', '2 small potatoes , peeled and diced', '1 medium onion, diced', '1 1/2 cups salsa, medium or hot', '2 beef bouillon cubes', '1 1/2 pounds ground beef', '1/3 cup seasoned dry bread crumbs', '1/3 cup milk', '1 tablespoon chopped fresh cilantro'],
  ['Bring water, carrots, potatoes, onion, salsa, and bouillon cubes to a boil in a large stockpot. Reduce heat and cook, stirring occasionally, at a medium simmer for 10 minutes. Mix together beef, bread crumbs, and milk in a bowl. Form into 1-inch meatballs and drop into broth. Bring soup to a boil, then reduce heat to medium-low. Cover and cook until meatballs are no longer pink in the center and vegetables are tender, about 20 minutes. Garnish with sprinkled cilantro.'],
  6,
  70
);

let spamMusubi = new Recipe(
  'Spam Musubi',
  'spamMusubi',
  ['rice', 'spam', 'rice vinegar', 'oyster sauce', 'soy sauce', 'sugar', 'seaweed'],
  ['2 cups uncooked short-grain white rice', '2 cups water', '6 tablespoons rice vinegar', '1/2 cup white sugar', '1/4 cup soy sauce', '1/4 cup oyster sauce', '1 (12 ounce) container Spam', '2 tablespoons vegetable oil', '5 sheets sushi nori (dry seaweed)'],
  ['Drain and rinse rice. Bring 2 cups water to a boil in a medium saucepan. Add rice and stir. Reduce heat, cover, and simmer for 20 minutes. Remove pan from heat and stir in rice vinegar. Set aside to cool. Stir together sugar, soy sauce, and oyster sauce in a medium bowl until sugar is completely dissolved. Slice luncheon meat lengthwise into 10 slices, or to desired thickness, and marinate in sauce for 5 minutes. Heat oil in a large skillet over medium-high heat. Cook slices until lightly browned, about 2 minutes per side. Cut nori sheets in half and lay on a flat work surface. Place a rice press in the center of a sheet, and press rice tightly inside. Top with a slice of luncheon meat, and remove press. Wrap nori around rice, sealing edges with a small amount of water. (Rice may also be formed by hand in the shape of the meat slices and about 1-inch thick.)'],
  10,
  55
);

let redPozole = new Recipe(
  'Chicken Pozole Rojo',
  'pozoleRojo',
  ['chicken breast', 'onion', 'garlic', 'guajillo chile', 'hominy', 'cabbage', 'lime'],
  ['10 cups water', '2 pounds chicken breast', '1 small white onion, quartered', '2 garlic cloves, peeled', '2 teaspoons salt', '8 guajillo chiles, rinsed, stemmed, and seeded', '3 (15.5-ounce) cans White Hominy, rinsed and drained', 'Shredded cabbage', 'Radish slices', 'Limes', 'Diced onion', 'Dried oregano'],
  ['In a 6-quart pot place chicken, onion, garlic, and 1 teaspoon salt and bring to a boil and then lower heat to medium-low for 20 minutes or until chicken is no longer pink. In a large bowl filled with hot water add dried chiles until the chiles have softened about 10 to 15 minutes. Discard liquid. Shred the chicken into small pieces. In a blender combine 1 cup of the cooked chicken broth with onions, garlic, and softened chiles with 1 teaspoon of salt and blend. Reserve the remaining chicken broth. Add the shredded chicken, blended sauce, and White Hominy to the pot with reserved broth and bring to a boil. Lower the heat and simmer for 20 minutes. If necessary, season with salt. Spoon pozole into soup bowls. Let your guests add the garnishes to suit their own taste.'],
  10,
  45
);
// console.log(allRecipes);

// 
//   chickenTikkaMasala,
//   paprikaPorkTenderloin,
//   mongolianBeef,
//   garlicButterChicken,
//   spaghetti,
//   fajitaVeggies,
//   porkStirFry,
//   meatloaf,
//   cornedBeefCabbage,
//   sloppyJoes,
//   chowMein,
//   friedRice,
//   bakedSalmon,
//   panFriedPotato,
//   macNcheese,
//   broccoliPestoPasta,
//   chickenTortillaSoup,
//   coconutCurryRamen,
//   chickenStirFry,
//   vegetarianSkilletEnchiladas,
//   albondigas,
//   spamMusubi,
//   redPozole
// 

// for(let ingredient in spamMusubi.ingredients){
// console.log(spamMusubi.ingredients);
// }
