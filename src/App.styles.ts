import styled from 'styled-components';
import colors from './styles/colors';

export const AppContainer = styled.div`
  background-color: #fff;
  position: relative;
  z-index: 1;
  font-family: 'Comfortaa', 'Roboto Mono', monospace;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CenteredRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const LeftColumn = styled.div`
  background-color: ${colors.lightBlue};
  width: 300px;
  height: calc(100vh - 20px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  margin-top: 20px;
  padding: 20px;
  z-index: 10;
  border-top-right-radius: 20px;
  gap: 20px;
`;


export const RightColumn = styled.div`
  background-color: transparent;
  width: 300px;
  height: 100vh;
`;

export const BotScene = styled.div`
  z-index: 0;
  width: 500px;
  height: 500px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 0;
  margin-left: -40px;

  @media (max-width: 1500px) {
    width: 400px;
    height: 400px;
    margin-left: -30px;
  }  
`;

export const SpheresScene = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 0;
`;

export const TopLeftGlobeScene = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 600px;
  height: 600px;
`;

export const LinkContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 40px;
  font-size: 16px;
  letter-spacing: 1px;
  z-index: 30;

  a {
    color: #6c757dff;
    text-decoration: underline;
    text-underline-offset: 4px;

    &:hover {
      color: #fff;
    }
  }
`;

export const InterfaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 60px; */
  padding: 10px 0;
  width: 900px;
  /* height: calc(100vh - 120px); */
  height: 100%;
  z-index: 10;
  gap: 20px;

  @media (max-width: 1500px) {
    width: 600px;
    padding: 0 20px;
  }
`;

export const StyledForm = styled.form`
  position: relative;
  width: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid ${colors.frenchGray};
  background-color: #fff;
  color: ${colors.onyx};
  font-size: 16px;

  &:focus {
    /* border: 1px solid #4a90e2; */
    outline: none;
  }
`; 

export const FlexStartRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 20px;;
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 8px;
  top: 6px;
  background-color: ${colors.lightBlue};
  border: none;
  /* border: 1px solid ${colors.onyx}; */
  /* background-color: #fff; */
  border-radius: 8px;
  margin: 0;
  padding: 6px;
  max-height: 48px;;
  &:hover {
    cursor: pointer;
    /* border: 1px solid #4a90e2; */
  }
  &:disabled {
    cursor: default;
  }
  &:focus {
    outline: none;
    // box-shadow: 0 0 0 1px rgba(108, 117, 125, 0.5); /* Focus ring */
  }
  &:active {
    /* background-color: ${colors.veryDark}; Even darker shade when clicked */
    transform: scale(0.98); /* Slight scale down effect */
  }
`;

export const OutputContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  height: 520px;
  overflow-y: auto; /* Enable scrolling for long outputs */
  border-width: 1px;
  border-style: solid;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.frenchGray2};
    border-radius: 12px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${colors.onyx};
  }

  @media (min-width: 1500px) {
    height: 620px;
  }
  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const TitleLarge = styled.h1`
  font-size: 24px;
  font-weight: 800;
  font-family: 'Open Sans', 'Roboto Mono', monospace;
  color: ${colors.black};
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
`;  