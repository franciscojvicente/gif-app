import { responsiveFontSizes } from "@mui/material";
import axios from "axios";

const apiKey = "3RFaUl0BetW95C17OvSC2nZKHBGDEiT0";

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${apiKey}&limit=10`;
    
    // const response = axios.get();
    const response = await axios.get(url);
    const {data} = response.data;
    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title:gif.title,
            url: gif.images.downsized_medium.url
        }
    })
    return gifs;
}

// axios es una libreria para hacer request http