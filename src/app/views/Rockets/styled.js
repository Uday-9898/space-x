import styled from "styled-components";
import { Flex } from "app/components/common/ui";
import { zIndicies } from "app/styles/theme/zIndicies";
import { colors, gradients } from "app/styles/theme/colors";
import { sizings } from "app/styles/theme/sizings";

export const Wrapper = styled(Flex).attrs({ as: "article" })`
  color: ${colors.white};
  border-radius: ${sizings.radii.lg};
  background: ${gradients.tile};
  position: relative;
  z-index: ${zIndicies.content};
  padding: 1rem;
`;

export const Button = styled(Flex).attrs({ as: "button" })`
  cursor: pointer;
  margin-left: auto;
  font-weight: 600;
`;
Button.defaultProps = {
  fontSize: "md",
  margin: "0",
  padding: "0",
  background: "none",
  color: colors.white,
  border: "none",
};

export const IconWrapper = styled(Flex)`
  justify-content: center;
  margin-left: 5px;

  svg {
    transform: ${({ isLeft }) => (isLeft ? "rotate(180deg)" : "rotate(0deg)")};
    transition: transform 0.5s;
  }
`;
