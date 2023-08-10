import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';
import LoadingGif from './LoadingGif';


const GIfGrid = ({category}) => {
    const { data, loading} = useFetchGifs(category);
    console.log(data);
  return (
    <div>
        <h3 className='gif-title'>{category}</h3>
        <div className='container'>
            {loading ? <LoadingGif /> : ""}
            {
                data.map(gif => (
                    <GifGridItem gif={gif} key={gif.id} />
                ))
            }
            
        </div>
    </div>
  )
}

export default GIfGrid