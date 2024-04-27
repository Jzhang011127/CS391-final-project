/*
    APOD component by Ruoqi Yang
 */

// import necessary packages
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const NASA_APOD_API_KEY = 'aUvN3L07zMbBGqubaIUeRR1CqsVG6PkHjnyUZteH'; //NASA API Key

//styled-components
const Container = styled.div`
  text-align: center;
`;

const Label = styled.label`
  font-size: 1.2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
`;

const Title = styled.h2`
  margin: 1rem 0;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Explanation = styled.h3`
  margin: 1rem 0;
`;

const APODComponent = () => {
    const [title, setTitle] = useState(''); //a UseState hook to store title
    const [imageUrl, setImageUrl] = useState('');//a UseState hook to store image
    const [date, setDate] = useState('');//a UseState hook to store date
    const [explanation, setExplanation] = useState('');//a UseState hook to store explanation

    useEffect(() => {
        const fetchData = async () => {
            const formattedDate = date || '2024-04-18';
            const APOD_API_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_APOD_API_KEY}&date=${formattedDate}`;//NASA API Get Method
            //fetch data from and set the data
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
        //Return all the information and render through react component
        <Container>
            <Label htmlFor="dateInput">Select a Date:</Label>
            <Input type="date" id="dateInput" value={date} onChange={handleDateChange}/>
            <Title>{title}</Title>
            <Image src={imageUrl} alt={title} />
            <Explanation>{explanation}</Explanation>
        </Container>
    );
};

export default APODComponent;
