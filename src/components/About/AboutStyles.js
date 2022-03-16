import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  background-color: rgba(${(props) => props.theme.bodyRgba});
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
  width: 80%;
`;

export const LeftText = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(${(props) => props.theme.contentRgba});
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  width: 80%;
`;

export const Content = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 400;
  margin: 1rem 0;
  width: 80%;
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: rgba(${(props) => props.theme.contentRgba}, 0.6);
  margin: 1rem 0 2rem 0;
  width: 80%;
`;
