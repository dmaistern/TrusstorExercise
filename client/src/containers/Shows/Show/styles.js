import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
`
export const ShowImage = styled.img`
  width: 0px;
  border-radius: 4px;
`

export const ShowName = styled.div`
  font-size: 1.2rem;
  margin-top: 10px;
  width: 0px;
  overflow: hidden;
  text-align: center;
  border-radius: 4px;
  background-color: #eee;
  padding: 5px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`