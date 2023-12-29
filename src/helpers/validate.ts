import axios from "axios";

export const validate = async (apikey: String) => {
    const url = (process.env.GEMINI_ENDPOINT as string) + apikey;
    const requestBody = {
        contents: [{
            parts: [{
                text: 'Hi',
            }],
        }],
    };
    try {
        const response = await axios.post(url, requestBody, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return true;
    } catch (error) {
        return false
    }
}