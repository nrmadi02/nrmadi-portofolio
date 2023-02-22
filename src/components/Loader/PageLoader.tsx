import styled, { keyframes } from "styled-components";

const bounceKey = keyframes`
  0%,100%{
    transform:scale(0);
  -webkit-transform:scale(0)
}
  50%{
    transform:scale(1);
    -webkit-transform:scale(1)
    }
`;

const rotateKey = keyframes`
100%{
  transform:rotate(360deg);
-webkit-transform:rotate(360deg)
}
`;

const WrapperLoading = styled.div`
  margin: -20px auto 0;
  top: 50%;
  left: 0;
  right: 0;
  width: 40px;
  height: 40px;
  position: absolute;
  text-align: center;
  -webkit-animation: ${rotateKey} 2s infinite linear;
  animation: ${rotateKey} 2s infinite linear;
`;

const Dot = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: ${({theme}) => theme.textglobal};
  border-radius: 100%;
  -webkit-animation: ${bounceKey} 2s infinite ease-in-out;
  animation: ${bounceKey} 2s infinite ease-in-out;
`;

const Dot2 = styled(Dot)`
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
`;

const PageLoader = () => {
  return (
    <WrapperLoading>
      <Dot></Dot>
      <Dot2></Dot2>
    </WrapperLoading>
  );
};

export default PageLoader;
