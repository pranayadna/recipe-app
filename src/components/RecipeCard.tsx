import { Recipe } from "../types";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
    recipe: Recipe
    onClick: () => void
    onFavouriteButtonClick: (recipe: Recipe) => void
    isFavourite: boolean
}

export const RecipeCard = ({ recipe, onClick, onFavouriteButtonClick, isFavourite }: Props) => {
    return (
        <div className="recipe-card" onClick={onClick}>
            <img src={recipe.image} />
            <div className="recipe-card-title">
                <span
                    onClick={(event) => {
                        event.stopPropagation();
                        onFavouriteButtonClick(recipe);
                    }}
                >
                    {isFavourite ? (
                        <AiFillHeart size={25} color="red" />
                    ) : (
                        <AiOutlineHeart size={25} />
                    )}
                </span>
                <h3>{recipe.title}</h3>
            </div>
        </div>
    )
}