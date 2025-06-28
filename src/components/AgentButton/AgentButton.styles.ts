import styled from 'styled-components';
import colors from '../../styles/colors';

interface StyledButtonProps {
  $hoverBorderColor?: string;
  $currentBorderColor?: string;
  $assignedIndex: number;
  $currentAgentIndex: number;
}

const borderColorMap = [
    colors.blenderBotBlue,
    colors.blenderBotGreen,
    colors.blenderBotYellow,
    colors.blenderBotRed,
    colors.blenderBotPurple,
];
  
export const StyledButton = styled.button<StyledButtonProps>`
    background: transparent;
    color: ${colors.onyx};
    border: none;
    padding: 10px 20px;
    border-radius: 12px;
    cursor: pointer;
    color: ${colors.black};
    font-family: 'Comfortaa', 'Roboto Mono', monospace;
    font-size: 16px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.$currentAgentIndex === props.$assignedIndex
      ? borderColorMap[props.$assignedIndex] : colors.onyx};
    z-index: 25;

    transition: background-color 0.3s ease;

    &:hover {
      /* background-color: ${colors.eerieBlack}; Lighter shade on hover */
      border-width: 1px;
      border-style: solid;
      border-color: ${props => borderColorMap[props.$assignedIndex]}; /* Change border color on hover */
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 1px rgba(108, 117, 125, 0.5); /* Focus ring */
    }

    &:active {
        background-color: ${colors.white}; /* Even darker shade when clicked */
        transform: scale(0.98); /* Slight scale down effect */
    }

    &:disabled {
        color:  ${colors.eerieBlack}; /* Lighter shade when disabled */
        cursor: default;
    }
`;