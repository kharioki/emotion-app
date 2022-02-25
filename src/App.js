import { css } from '@emotion/react';
import styled from '@emotion/styled';

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

function App() {
  return (
    <div css={css`background: #ddd;`}>
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
    </div>
  );
}

export default App;
