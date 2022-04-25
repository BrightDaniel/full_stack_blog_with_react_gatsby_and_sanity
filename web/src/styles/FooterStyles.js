import styled from 'styled-components';

export const FooterStyles = styled.footer`
  padding: 5rem 0 2rem 0;
  text-align: center;
  background-color: silver;
  .logo {
    width: 100px;
    height: 100px;
  }
  .footer__text {
    color: #000;
    margin: 0 auto;
    margin-top: 1rem;
    max-width: 400px;
  }
  .footer__menuList {
    margin-top: 1rem;
    li {
      display: inline-block;
      margin: 0 1rem;
      a {
        color: #2250f4;
        font-size: 1.6rem;
      }
    }
  }
  .footer__socialList {
    margin-top: 1.5rem;
    li {
      display: inline-block;
      margin: 0 0.5rem;
      a {
        display: inline-block;
        width: 20px;
        color: black;
      }
      :hover {
        a {
          color: #2250f4;
        }
      }
    }
  }
  .copyright {
    margin-top: 1rem;
    color: #2250f4;
    font-size: 1.2rem;
  }
`;
