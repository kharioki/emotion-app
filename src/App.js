import { css, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './redux/reducer';

const darkTheme = {
  background: '#333',
  text: '#ddd',
};

const lightTheme = {
  background: '#fff',
  text: '#333',
};

const Heading = styled('h1')`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
  padding: 10px;
  margin: 10px;
`;

const Subheading = Heading.withComponent('h2');

const Quote = styled('blockquote')(props => ({
  fontSize: props.size,
}))

const Cite = styled('cite')(
  {
    fontWeight: 100
  },
  props => ({
    fontWeight: props.weight
  })
);

const Footer = styled('footer')`
  border-top: 1px solid #ccc;
  color: #ccc;
  margin-top: 50px !important;
  padding-top: 20px;
`;

const Text = styled('p')`
  font-size: 20px;
  color: #008f68;
`;

const Main = styled.div`
  color: ${props => props.theme.text};
  background: ${props => props.theme.background};
  width: 100%;
`

const StyledNavbar = styled.nav`
  height: 5em;
  border-bottom: 0.1em solid gray;
  color: ${props => props.theme.text};
  background: ${props => props.theme.background};
  .container {
    // padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    button {
      margin: 0 2em;
      padding: 0.5em 1em;
      font-size: 1em;
      background: transparent;
      color: ${props => props.theme.text};
      border: 0.1em solid ${props => props.theme.text};
    }
  }
`;

function App() {
  const { theme } = useSelector(state => state.reducer);

  const dispatch = useDispatch();
  const toggle = () => dispatch(toggleTheme());

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Main>
        <StyledNavbar theme={theme === 'light' ? lightTheme : darkTheme}>
          <div className={'container'}>
            <h1>
              Navbar title
            </h1>
            <button onClick={toggle}>
              Switch to {theme !== 'light' ? 'Light' : 'Dark'} mode
            </button>
          </div>
        </StyledNavbar>
        <div css={css({ padding: 10 })}>
          <Heading bg="#008f68" fg="#fae042">
            Heading with a green background and yellow text.
          </Heading>

          <Subheading fg="#6db65b">
            For React Developers
          </Subheading>

          <Quote size={28}>
            I built this with <code>`emotion/react`</code> and <code>`emotion`</code>!
          </Quote>

          <Cite weight={700}>Kharioki</Cite>
          <Footer>
            <Text>Simple footer text</Text>
          </Footer>
        </div>
      </Main>
    </ThemeProvider>
  );
}

export default App;
