import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('/home', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setMessage(response.data.message);
            } catch (error) {
                setMessage('Error: Not authorized');
            }
        };

        fetchData();
    }, []);

    return <h1>{message}</h1>;
};

export default Home;
