export async function fetchSuggestions(value) {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error("Network Response was not ok");
        }
        const json = await response.json();
        const results = json.products.filter((product) => {
            return (
                value &&
                product &&
                product.title &&
                product.title.toLowerCase().includes(value.toLowerCase())
            );
        });
        return results;
    } catch (error) {
        console.error("Errpr fetching suggestions: ", error);
    }
}
