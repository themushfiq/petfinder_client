import { baseURL } from "./variable";

export const handlePostDataToDatabase = async (formData: any) => {
    try {
        const response = await fetch(`${baseURL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}


export const handleLogin = async (credentials:any) => {
    try {
        const response = await fetch(`${baseURL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error('Login failed. Please check your email and password.');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return error
    }
};
