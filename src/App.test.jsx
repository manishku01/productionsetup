import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import App from "./App.jsx";

describe("App", () => {
  it("renders the message and logged-in users", () => {
    const markup = renderToStaticMarkup(createElement(App));

    expect(markup).toContain(
      '<p class="text-4xl bg-red-400">This is message to test commit lint.</p>',
    );
    expect(markup).toContain('<div class="text-green-500">');
    expect(markup).toContain("<li>Manish</li>");
    expect(markup).toContain("<li>John</li>");
    expect(markup).toContain("<li>Jane</li>");
    expect(markup).toContain(
      '<p class="text-4xl bg-red-400">This is a prop message from App.jsx</p>',
    );
  });
});
