import { useState, useEffect } from 'react';

const NASA_APOD_API_KEY = 'aUvN3L07zMbBGqubaIUeRR1CqsVG6PkHjnyUZteH';

const APODComponent = () => {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [date, setDate] = useState('');
    const [explanation, setExplanation] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const formattedDate = date || '2024-04-18';
            const APOD_API_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_APOD_API_KEY}&date=${formattedDate}`;

            try {
                const response = await fetch(APOD_API_URL);
                const data = await response.json();
                setTitle(data.title);
                setImageUrl(data.url);
                setExplanation(data.explanation);
            } catch (error) {
                console.error('Error fetching data from NASA APOD API:', error);
            }
        };

        fetchData();
    }, [date]); // Run useEffect whenever the date changes

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    return (
        <div>
            <label htmlFor="dateInput">Select a Date:</label>
            <input type="date" id="dateInput" value={date} onChange={handleDateChange}/>
            <h2>{title}</h2>
            <img src={imageUrl} alt={title} style={{maxWidth: '100%'}}/>
            <h3>{explanation}</h3>
        </div>
    );
};

export default APODComponent;
