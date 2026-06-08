import type { Recipe } from "../data/Types";

interface RecipeInstructionsProps {
  recipe: Recipe | null;
}

export default function RecipeInstructions({
  recipe,
}: RecipeInstructionsProps) {
  if (!recipe) {
    return (
      <div>
        <h2>Instructions</h2>
        <p>Select a recipe.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{recipe.title}</h2>

      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}