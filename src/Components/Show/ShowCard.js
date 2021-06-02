import React from 'react'
import {Link} from 'react-router-dom'
import { StyledShowCard } from './styledShowcard';
import {Star} from '../style'

const ShowCard = ({ id, image, name, summary, starred, isstarred }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
    : 'No description';

  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div className="btns">
        <Link to={`/Show/${id}`}>Read more</Link>
        <button type="button" onClick={starred}> <Star active={isstarred} /> </button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard
