async function getChefBirthday(id) {
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/{id}`)
    const recipe = await recipeResponse.json();
    const chefResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
    const chef = await chefResponse.json()
    return chef.birthDate
}


(async () => {
    try {
        const birthday = await getChefBirthday(1)
        console.log("Data di nascita:", birthday);
    } catch (error) {
        console.error("errore:", error.message);
    }
    console.log('fine codice');

})();