import axios from "axios";

export const submitSurveyData = async (data) => {    
    try {
        const response = await axios.post("/api/submit", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        throw error;
    }
};