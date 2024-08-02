// app.js
document.addEventListener('DOMContentLoaded', () => {
    const tripPlanDiv = document.getElementById('trip-plan');
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '62828d700cmsh2656d4d0a9682aep165694jsn822efe5f3d0c',
            'X-RapidAPI-Host': 'visa-list.p.rapidapi.com'
        }
    };
    
    fetch('https://ai-trip-planner.p.rapidapi.com/api/endpoint', options)
        .then(response => response.json())
        .then(response => {
            // Process the response and display the trip plan
            const tripPlan = response.plan; // Adjust based on actual response structure
            tripPlanDiv.innerHTML = `
                <h2>Trip Plan</h2>
                <p>${tripPlan}</p>
            `;
        })
        .catch(err => console.error(err));
});
