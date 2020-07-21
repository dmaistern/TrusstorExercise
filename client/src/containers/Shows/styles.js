import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  width: 80%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`