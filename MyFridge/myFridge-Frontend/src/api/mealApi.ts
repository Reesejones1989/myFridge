export interface MealDBRecipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface MealDBDetail {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
}

export interface MealDBResponse {
  meals: MealDBRecipe[] | null;
}

export interface MealDBDetailResponse {
  meals: MealDBDetail[] | null;
}

// SEARCH (ingredient → recipes list)
export const fetchRecipesByIngredient = async (ingredient: string) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data: MealDBResponse = await res.json();
  return data.meals ?? [];
};

// DETAILS (recipe id → full recipe)
export const fetchRecipeById = async (id: string) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  const data: MealDBDetailResponse = await res.json();
  return data.meals?.[0] ?? null;
};