//Michael Won
import { useState, useEffect } from 'react';

const NASA_API_KEY = 'zNj3RACytm2mYjAIU2K7absYDCT8zjDtwr96Lese';

const MarsRoverComponent = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const ROVER_API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_API_KEY}`;

            try {
                const response = await fetch(ROVER_API_URL);
                const data = await response.json();
                setPhotos(data.photos);
            } catch (error) {
                console.error('Error fetching data from NASA Mars Rover API:', error);
            }
        };

        fetchData();
    }, []); // Run useEffect only once on component mount

    return (
        <div>
            <h2>Mars Rover Photos</h2>
            <div>
                {photos.map((photo) => (
                    <img key={photo.id} src={photo.img_src} alt="Mars Rover" style={{ maxWidth: '100%' }} />
                ))}
            </div>
        </div>
    );
};

export default MarsRoverComponent;