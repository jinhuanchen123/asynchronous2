function fetchProducts() {
    const fetchPromise = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );

    return fetchPromise
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .catch((error) => {
            console.error(`Could not get products: ${error}`);
            throw error; // Re-throw the error so that the caller can handle it
        });
}

fetchProducts()
    .then((data) => {
        document.getElementById('root').textContent = `Name: ${data[0].name}`;
    })
    .catch((error) => {
        console.error(`Error fetching products: ${error}`);
    });
  