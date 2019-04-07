var recipes = {eggs: "3", flour: "1 cup", butter: "1 tbsp"}


function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {[key]: value})
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
<<<<<<< HEAD
  delete recipes[key];
=======
  delete recipes.key;
>>>>>>> bc414f0a2f00e0f704b55277e9423e41277d5537
  return recipes
}


var newRecipes = Object.assign({}, recipes)

function deleteFromObjectByKey(recipes, key) {
  delete newRecipes.key;
  return newRecipes
}

