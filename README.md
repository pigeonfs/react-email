# React Email for Pigeon

Unstyled React components for HTML emails, in the spirit of [react-email](https://github.com/resend/react-email). Render to a string and send with [`pigeon-node`](https://github.com/pigeonfs/pigeon-node).

## Install

```bash
npm install github:pigeonfs/react-email react react-dom
```

## Template

```js
import {
  Html, Head, Preview, Body, Container, Heading, Text, Button, render
} from "@pigeonfs/react-email";

export function Welcome({ firstName }) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Pigeon</Preview>
      <Body>
        <Container>
          <Heading>Welcome, {firstName}</Heading>
          <Text>Thanks for trying Pigeon.</Text>
          <Button href="https://example.com">Open dashboard</Button>
        </Container>
      </Body>
    </Html>
  );
}

const html = await render(Welcome({ firstName: "Ada" }));
```

Without JSX, use `jsx` from this package the same way [resend-node](https://github.com/resend/resend-node) documents `react/jsx-runtime`.

Components: `Html`, `Head`, `Preview`, `Body`, `Container`, `Section`, `Row`, `Column`, `Heading`, `Text`, `Button`, `Link`, `Img`, `Hr`.

## License

MIT
