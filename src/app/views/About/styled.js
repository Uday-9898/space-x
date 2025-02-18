import styled from "styled-components";
import { Flex, Image } from "app/components/common/ui";
import { radii } from "app/styles/theme/sizings";
import { zIndicies } from "app/styles/theme/zIndicies";
import { shadows } from "app/styles/theme/shadows";
import { mediaQuery } from "app/styles/theme/breakpoints";

const CardWrapper = styled(Flex)`
  flex-direction: column;
  transform: translateZ(0);
  position: relative;
  border-radius: ${radii.md};
  overflow: hidden;
  object-fit: cover;
  box-shadow: ${shadows.medium};
  width: ${({ isWide }) => (isWide ? "100%" : "50%")};
  height: ${({ isWide }) => (isWide ? "auto" : "275px")};

  img {
    width: 100%;
    height: ${({ isWide }) => (isWide ? "240px" : "100%")};
    object-fit: cover;

    transition: transform 0.2s ease;

    ${mediaQuery.md} {
      width: ${({ isWide }) => (isWide ? "" : "210px")};
    }
    ${mediaQuery.xl} {
      width: ${({ isWide }) => (isWide ? "" : "220px")};
    }
  }

  &:after {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    content: "";
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, #000000 92.9%);
  }
`;

CardWrapper.defaultProps = {
  m: "xxs",
};

export const Padder = styled(Flex)`
  height: 100%;
  width: 100%;
  align-items: flex-end;
`;

export const Card = ({ src, children, ...props }) => (
  <CardWrapper marginTop="xxs" {...props}>
    <Flex
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex={zIndicies.contentOverGradient}
    >
      <Padder p="0.5rem 0.75rem">{children}</Padder>
    </Flex>
    <Image src={src} />
  </CardWrapper>
);
