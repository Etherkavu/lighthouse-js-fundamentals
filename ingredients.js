var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var index = 0;
console.log("Ingredients:")
while (index < ingredients.length) {
  console.log(ingredients[index]);
  index++;
}
// Write a for loop that prints out the contents of ingredients:
console.log("Ingredients:")
for (var i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("Ingredients:")
while (index > 0) {
  index--;
  console.log(ingredients[index]);
}