import styled, { css } from "styled-components";
import { tablet } from "../theme/MediaQuery";

const WrapperTitle = styled.div`
  width: max-content;
  display: inline-block;
  position: relative;
  margin-bottom: 60px;
`;

const TitleSection = styled.h1`
  display: block;
  position: relative;
  margin: 20px 0 0;
  font-weight: bold;
  font-size: 60px;
  line-height: 1.1em;
  text-align: center;
  transition: all 0.3s linear;
  color: ${({ theme }) => theme.titlesection};
  ${tablet(css`
    margin: 0px 0 0;
    font-size: 38px;
  `)}
`;

const BadgeTitle = styled.p`
  margin: 0;
  padding-inline: 10px;
  padding-block: 2px;
  position: absolute;
  bottom: -38px;
  right: 0px;
  background-color: ${({ theme }) => theme.textglobal};
  color: white;
  width: max-content;
  transition: all 0.3s linear;

  ${tablet(css`
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
  `)}
`;

const WrapperSectionTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  title: string;
  textBadge: string;
}

const SectionTitle = ({ title, textBadge }: Props) => {
  return (
    <>
      <WrapperSectionTitle>
        <WrapperTitle>
          <TitleSection>{title}</TitleSection>
          <BadgeTitle>{textBadge}</BadgeTitle>
        </WrapperTitle>
      </WrapperSectionTitle>
    </>
  );
};

export default SectionTitle;
