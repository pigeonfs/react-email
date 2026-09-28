import { createElement as h } from "react";

const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';

export function Html({ children, lang = "en", dir = "ltr", ...props }) {
  return h("html", { lang, dir, ...props }, children);
}

export function Head({ children, ...props }) {
  return h("head", props, h("meta", { charSet: "utf-8" }), h("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), children);
}

export function Preview({ children }) {
  const text = Array.isArray(children) ? children.join("") : String(children ?? "");
  return h(
    "div",
    {
      style: {
        display: "none",
        overflow: "hidden",
        lineHeight: "1px",
        opacity: 0,
        maxHeight: 0,
        maxWidth: 0
      }
    },
    text
  );
}

export function Body({ children, style, ...props }) {
  return h(
    "body",
    {
      style: { backgroundColor: "#ffffff", margin: 0, padding: 0, fontFamily, ...style },
      ...props
    },
    children
  );
}

export function Container({ children, style, ...props }) {
  return h(
    "table",
    {
      align: "center",
      width: "100%",
      border: "0",
      cellPadding: "0",
      cellSpacing: "0",
      role: "presentation",
      style: { maxWidth: 600, margin: "0 auto", ...style },
      ...props
    },
    h("tbody", null, h("tr", null, h("td", null, children)))
  );
}

export function Section({ children, style, ...props }) {
  return h(
    "table",
    {
      width: "100%",
      border: "0",
      cellPadding: "0",
      cellSpacing: "0",
      role: "presentation",
      style,
      ...props
    },
    h("tbody", null, h("tr", null, h("td", null, children)))
  );
}

export function Row({ children, ...props }) {
  return h(
    "table",
    { width: "100%", border: "0", cellPadding: "0", cellSpacing: "0", role: "presentation", ...props },
    h("tbody", null, h("tr", null, children))
  );
}

export function Column({ children, style, ...props }) {
  return h("td", { style: { verticalAlign: "top", ...style }, ...props }, children);
}

export function Heading({ as = "h1", children, style, ...props }) {
  return h(as, { style: { fontFamily, fontWeight: 700, margin: "0 0 12px", ...style }, ...props }, children);
}

export function Text({ children, style, ...props }) {
  return h("p", { style: { fontFamily, fontSize: 16, lineHeight: "24px", margin: "0 0 16px", ...style }, ...props }, children);
}

export function Button({ href, children, style, ...props }) {
  return h(
    "a",
    {
      href,
      style: {
        display: "inline-block",
        backgroundColor: "#111111",
        color: "#ffffff",
        padding: "12px 20px",
        borderRadius: 8,
        textDecoration: "none",
        fontFamily,
        fontWeight: 600,
        ...style
      },
      ...props
    },
    children
  );
}

export function Link({ href, children, style, ...props }) {
  return h("a", { href, style: { color: "#111111", ...style }, ...props }, children);
}

export function Img({ src, alt = "", width, height, style, ...props }) {
  return h("img", { src, alt, width, height, style: { display: "block", border: 0, ...style }, ...props });
}

export function Hr({ style, ...props }) {
  return h("hr", {
    style: { border: "none", borderTop: "1px solid #e5e5e5", margin: "24px 0", ...style },
    ...props
  });
}
