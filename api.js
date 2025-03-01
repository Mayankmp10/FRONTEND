const API_URL = "https://rentease-1-ihqo.onrender.com";  // Your backend URL

export const fetchData = async () => {
    try {
        const response = await fetch(${API_URL}/api/properties);  // Correct endpoint
        if (!response.ok) throw new Error("Failed to fetch data");
        
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;  // Return null in case of failure
    }
};
