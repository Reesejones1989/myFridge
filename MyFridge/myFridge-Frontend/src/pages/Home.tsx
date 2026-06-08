import { useState } from "react";
import Ingredients from "../components/Ingredients";
import Recipes from "../components/Recipes";
import RecipeInstructions from "../components/RecipeInstructions";
import RecipeService from "../components/RecipeService";
import { fetchRecipeById } from "../api/mealApi";
import { mapMealToRecipe } from "../utils/recipeMapper";
import type { Recipe } from "../data/Types";

export default function Home() {
  const [fridge, setFridge] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const addIngredient = () => {
    if (!search.trim()) return;

    const value = search.toLowerCase().trim();

    setFridge((prev) =>
      prev.includes(value) ? prev : [...prev, value]
    );

    setSearch("");
  };

  const addIngredientToFridge = (ingredient: string) => {
    const value = ingredient.toLowerCase().trim();

    setFridge((prev) =>
      prev.includes(value) ? prev : [...prev, value]
    );
  };

  const removeIngredient = (ingredient: string) => {
    setFridge((prev) =>
      prev.filter((item) => item !== ingredient)
    );
  };

  const handleSelectRecipe = async (recipe: Recipe) => {
    const fullMeal = await fetchRecipeById(String(recipe.id));

    if (!fullMeal) return;

    setSelectedRecipe(mapMealToRecipe(fullMeal));
  };

  const toggleSave = (id: number) => {
    setRecipes((prev) =>
      prev.map((recipe) =>
        recipe.id === id
          ? { ...recipe, saved: !recipe.saved }
          : recipe
      )
    );
  };

  return (
    <div className="app-main">
      <img
        src="/myFridge.png"
        height="200"
        width="200"
        alt="My Fridge"
      />

      <RecipeService
        ingredients={fridge}
        onRecipesLoaded={setRecipes}
      />

      <div className="top-row">
        <div className="ingredients-panel card">
          <div className="card-body">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Add ingredient..."
            />

            <button onClick={addIngredient}>
              Add
            </button>

            <Ingredients
              ingredients={fridge}
              onAdd={addIngredientToFridge}
              onRemove={removeIngredient}
            />
          </div>
        </div>

        <div className="recipes-panel card">
          <div className="card-body">
            <Recipes
              recipes={recipes}
              onSelect={handleSelectRecipe}
              onToggleSave={toggleSave}
            />
          </div>
        </div>
      </div>

      <div className="instructions-row card">
        <div className="card-body">
          <RecipeInstructions recipe={selectedRecipe} />
        </div>
      </div>
    </div>
  );
}