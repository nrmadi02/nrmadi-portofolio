import styled from "styled-components";

const TitleError = styled.h1`
  font-weight: bold;
  font-size: 50px;
  color: black;
`;

const ContainerCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotFoundPage = () => {
  return (
    <ContainerCenter>
      <TitleError>Page Not Found</TitleError>
    </ContainerCenter>
  );
};

export default NotFoundPage;
