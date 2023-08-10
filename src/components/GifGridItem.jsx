import React from 'react'

const GifGridItem = ({gif}) => {
    const {url, title} = gif;
  return (
      <div className='card'>
        <p>{title}</p>
        <img src={url} alt={title} />
    </div>
  )
}

export default GifGridItem