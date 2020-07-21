import React, { useContext, useState } from 'react';
import { ShowsContext } from '../../contexts/ShowsContext';
import AsyncSelect from 'react-select/async';
import { Wrapper, Header, SearchWrapper, selectStyles, SearchButton } from './styles';
import { fetchShows } from './helpers';

export const Search  = () => {
  const { setShows, setDisplayShows } = useContext(ShowsContext);
  const [ searchString, setSearchString ] = useState('');
  const [ selectedValue, setSelectedValue] = useState(null);
  
  const loadSelectionOptions = async (inputValue, callback) => {
      const newShows = await fetchShows(inputValue);
      return newShows.slice(5).map(show => ({value: show.name, label: show.name}))
  };

  const onInputChange = (newValue, params) => {
    if (params.action === 'input-change') {
      setSearchString(newValue);
    }
  }

  const onSelectionChange = async (newValue, params) => {
    setSearchString(newValue.value);
    setSelectedValue(newValue);
    const newShows = await fetchShows(newValue.value);
    setShows(newShows);
    setDisplayShows(true);
  }

  const onFocus = () => {
    setSelectedValue(null);
    setSearchString('');
  }

  const onSearchClick = async () => {
    const newShows = await fetchShows(searchString);
    setShows(newShows);
    setDisplayShows(true); 
  }

  return (
    <Wrapper>
      <Header>TV Shows Search</Header>
      <SearchWrapper>
        <AsyncSelect
            styles={selectStyles}
            autoFocus
            value={selectedValue || {value: searchString, label: searchString}}
            placeholder="Search TV Shows"
            onChange={onSelectionChange}
            onInputChange={onInputChange}
            loadOptions={loadSelectionOptions}
            onFocus={onFocus}
            openMenuOnClick={false}
            blurInputOnSelect
            />
            <SearchButton onClick={onSearchClick}>Search</SearchButton>
      </SearchWrapper>
    </Wrapper>
  )
};
