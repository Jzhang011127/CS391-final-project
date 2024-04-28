//Michael Won
import { useState, useEffect } from 'react';

const NASA_ASTEROIDS_API_KEY = 'zNj3RACytm2mYjAIU2K7absYDCT8zjDtwr96Lese'; // Replace with your API key
const NASA_ASTEROIDS_API_URL = `https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=${NASA_ASTEROIDS_API_KEY}`;

const AsteroidsNeoWsComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(NASA_ASTEROIDS_API_URL);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data from NASA Asteroids NeoWs API:', error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const today = Object.keys(data.near_earth_objects)[0];
    const asteroids = data.near_earth_objects[today];

    return (
        <div>
            <h2>Closest Approaching Asteroids to Earth Today</h2>
            {asteroids.map((asteroid) => (
                <div key={asteroid.id}>
                    <p>
                        <strong>Name:</strong> {asteroid.name}<br/>
                        <strong>Estimated Diameter
                            (meters):</strong> {parseFloat(asteroid.estimated_diameter.meters.estimated_diameter_min).toFixed(2)} - {parseFloat(asteroid.estimated_diameter.meters.estimated_diameter_max).toFixed(2)}<br/>
                        <strong>Closest Approach
                            Date:</strong> {asteroid.close_approach_data[0].close_approach_date_full}<br/>
                        <strong>Miss Distance
                            (kilometers):</strong> {parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers).toFixed(2)}<br/>
                        <strong>Relative Velocity (kilometers per
                            hour):</strong> {parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2)}<br/>
                    </p>
                </div>
            ))}
        </div>
    );
};
export default AsteroidsNeoWsComponent;