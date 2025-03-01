const API_URL = "https://rentease-1-ihqo.onrender.com";  // Your backend URL

export const fetchData = async () => {
    try {
        const response = await fetch(${API_URL}/your-endpoint);  // Update with actual endpoint
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
