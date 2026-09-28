import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

export { Html, Head, Body, Container, Section, Row, Column, Heading, Text, Button, Link, Img, Hr, Preview } from "./components.js";

export function render(element) {
  const html = renderToStaticMarkup(element);
  if (html.startsWith("<!DOCTYPE") || html.startsWith("<html")) {
    return Promise.resolve(html.startsWith("<!DOCTYPE") ? html : `<!DOCTYPE html>${html}`);
  }
  return Promise.resolve(
    `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">${html}`
  );
}

export function jsx(type, props) {
  return createElement(type, props);
}
