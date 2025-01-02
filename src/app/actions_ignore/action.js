/* 'use server'
 
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export async function submitForm(data) {

    const response = await axios.post('https://apim.quickwork.co/TeamQuickWork/L&D/0.1/surveyresponse', {
        data
        }, {
            headers: {
                'Content-Type': 'application/json',
                'APIKEY': process.env.APIKEY
            }
        }
    );
    console.log(response.data);
} */