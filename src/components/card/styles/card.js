import styled from 'styled-components/macro';

export const Title = styled.p`
  font-family: var(--font-title);
  font-size: var(--text-xl);
  color: #e5e5e5;
  font-weight: var(--font-semibold);
  margin-left: 56px;
  margin-right: 56px;
  margin-top: var(--space-0);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-50);

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: var(--space-30);
    }
  }

  &:last-of-type {
    margin-bottom: var(--space-0);
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -100px;
    }
  }
`;

export const SubTitle = styled.p`
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: #fff;
  font-weight: var(--font-bold);
  margin-top: var(--space-0);
  margin-bottom: var(--space-0);
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  margin-top: var(--space-5);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: #fff;
  margin-bottom: var(--space-0);
  user-select: none;
  display: none;
  line-height: normal;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;

export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: var(--space-0);
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: var(--space-5);
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 56px;

    @media (max-width: 1000px) {
      margin-left: var(--space-30);
    }
  }

  &:last-of-type {
    margin-right: 56px;

    @media (max-width: 1000px) {
      margin-right: var(--space-30);
    }
  }
`;

export const FeatureText = styled.p`
  font-family: var(--font-body);
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  margin: var(--space-0);

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: var(--text-lg);
      line-height: 20px;
      margin-bottom: var(--space-10);
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: var(--space-0);
`;

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? '#f44336' : '#2f9600')};
  border-radius: 15px;
  width: 28px;
  line-height: 28px;
  text-align: center;
  color: white;
  font-family: var(--font-body);
  font-weight: var(--font-bold);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: var(--space-10);
  font-size: var(--text-sm);
`;
