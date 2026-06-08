import { useEffect, useState } from "react";
import { fetchRecipesByIngredient } from "../api/mealApi";
import type { Recipe } from "../data/Types";

interface Props {
  ingredients: string[];
  onRecipesLoaded: (recipes: Recipe[]) => void;
}

export default function RecipeService({
  ingredients,
  onRecipesLoaded,
}: Props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      if (!ingredients.length) {
        onRecipesLoaded([]);
        return;
      }

      setLoading(true);

      try {
        const meals = await fetchRecipesByIngredient(ingredients[0]);

        const simplified: Recipe[] = meals.map((meal) => ({
          id: Number(meal.idMeal),
          title: meal.strMeal,
          ingredients: [],
          instructions: [],
          saved: false,
        }));

        onRecipesLoaded(simplified);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [ingredients.join(",")]);

  return loading ? <p>Loading recipes...</p> : null;
}