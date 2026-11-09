const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

async function fetchPatients() {

    const username = "coalition";
    const password = "skills-test";

    // Generate Basic Authentication key
    const credentials = btoa(`${username}:${password}`);

    try {

        const response = await fetch(API_URL, {
            method: "GET",

            headers: {
                "Authorization": `Basic ${credentials}`,
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const patients = await response.json();

        console.log("API Data:", patients);

        return patients;

    } catch (error) {

        console.error("API Connection Failed:", error);

        throw error;

    }
}