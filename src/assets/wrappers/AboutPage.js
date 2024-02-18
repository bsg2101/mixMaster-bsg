import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  background-color: #ffffff;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  span 
  {
    font-weight: 700;
  }
  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    color: #333333;
    margin-bottom: 10px;
    font-size: 24px;
  }

  p {
    color: #666666;
    font-size: 16px;
    line-height: 1.5;
    margin-top: 1rem;
  }

  a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
    }
  }
`;

export default Wrapper;
