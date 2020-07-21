import React, { useContext } from 'react';
import { ShowsContext } from '../../contexts/ShowsContext';
import { Show } from './Show';
import { Wrapper } from './styles';

export const Shows  = () => {
  const { shows, displayShows } = useContext(ShowsContext);
  
  if(!shows || !displayShows) return null;
  
  return (
    <Wrapper>
      {shows.map(show => <Show key={show.id} {...show}/>)}
    </Wrapper>
  )
};
