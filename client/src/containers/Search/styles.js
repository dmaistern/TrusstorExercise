import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;

`

export const SearchWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const selectStyles = {
  container: (provided) => ({
    ...provided,
    width: '400px',
    '@media (max-width: 768px)': {
      width: '300px',
      marginBottom: '10px'
    }
  })
}

export const SearchButton = styled.div`
  width: 100px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  border-radius: 4px;
  border: 1px solid #666;
  background-color: #eee;
  cursor: pointer;
  &:hover {
    background-color: #666;
    color: #eee;
  }
`