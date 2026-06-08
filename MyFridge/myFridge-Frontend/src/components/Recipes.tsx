import type { Recipe } from "../data/Types";

interface RecipesProps {
  recipes: Recipe[];
  onSelect: (recipe: Recipe) => void;
  onToggleSave: (id: number) => void;
}

export default function Recipes({
  recipes,
  onSelect,
  onToggleSave,
}: RecipesProps) {
  return (
    <div>
      <h2>Recipes</h2>

      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <button onClick={() => onSelect(recipe)}>
              {recipe.title}
            </button>

            <button onClick={() => onToggleSave(recipe.id)}>
              {recipe.saved ? "★" : "☆"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}