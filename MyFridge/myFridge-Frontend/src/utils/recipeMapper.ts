import type { MealDBDetail } from "../api/mealApi";
import type { Recipe } from "../data/Types";

export const mapMealToRecipe = (meal: MealDBDetail): Recipe => {
  const ingredients: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}` as keyof MealDBDetail];

    if (ingredient && ingredient.trim()) {
      ingredients.push(ingredient.toLowerCase());
    }
  }

  const instructions = meal.strInstructions
    .split(".")
    .map((step) => step.trim())
    .filter(Boolean);

  return {
    id: Number(meal.idMeal),
    title: meal.strMeal,
    ingredients,
    instructions,
    saved: false,
  };
};