import { Recipe } from "./types";

export const searchRecipes = async (searchTerm: string, page: number) => {
    const url = new URL("https://recipe-app-blue-theta.vercel.app/api/recipe/search")
    url.searchParams.append("searchTerm", searchTerm)
    url.searchParams.append("page", String(page))

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    return response.json()
}

export const getRecipeSummary = async (recipeId: string) => {
    const url = new URL(`https://recipe-app-blue-theta.vercel.app/recipes/${recipeId}/summary`)

    const response = await fetch(url.toString())

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    return response.json()
}

export const getFavouriteRecipes = async () => {
    const url = new URL("https://recipe-app-blue-theta.vercel.app/api/recipes/favourite")

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    return response.json()
}

export const addFavouriteRecipe = async (recipe: Recipe) => {
    const url = new URL("https://recipe-app-blue-theta.vercel.app/api/recipes/favourite")
    const body = {
        recipeId: recipe.id
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
}

export const removeFavouriteRecipe = async (recipe: Recipe) => {
    const url = new URL("https://recipe-app-blue-theta.vercel.app/api/recipes/favourite")
    const body = {
        recipeId: recipe.id
    }

    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
}