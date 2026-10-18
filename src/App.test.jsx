import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import App from "./App.jsx";

describe("App", () => {
  it("renders the app message", () => {
    expect(renderToStaticMarkup(createElement(App))).toBe(
      "<p>This is Hello message.</p>",
    );
  });
});
