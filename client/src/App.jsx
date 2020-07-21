import React, { useState, useMemo } from 'react';
import { Search } from './containers/Search';
import { Shows } from './containers/Shows';
import { ShowsContext } from './contexts/ShowsContext';
import { Wrapper } from './styles';
import { GlobalStyle } from './globalStyles';

function App() {
  const [ shows, setShows ] = useState([]);
  const [ displayShows, setDisplayShows ] = useState(false);

  const memoizedShowsContext = useMemo(() => ({
    shows, setShows, displayShows, setDisplayShows
  }), [displayShows, shows])

  return (
    <Wrapper>
      <ShowsContext.Provider value={memoizedShowsContext} >
        <GlobalStyle />
        <Search />
        <Shows/>
      </ShowsContext.Provider>
    </Wrapper>
  );
}

export default App;
