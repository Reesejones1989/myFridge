interface IngredientsProps {
  ingredients: string[];
  onAdd: (ingredient: string) => void;
  onRemove: (ingredient: string) => void;
}

export default function Ingredients({
  ingredients,
  onAdd,
  onRemove,
}: IngredientsProps) {
  return (
    <div className="ingredients-panel">
      <h2>Ingredients</h2>

      {ingredients.map((ingredient) => (
        <div key={ingredient}>
          {ingredient}
          <button onClick={() => onRemove(ingredient)}>✕</button>
          <button onClick={() => onAdd(ingredient)}>+</button>
        </div>
      ))}
    </div>
  );
}