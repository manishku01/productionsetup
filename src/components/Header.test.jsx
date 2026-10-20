import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Header from "./Header.jsx";

describe("Header", () => {
  it("renders the logged-in style, users, and message", () => {
    const markup = renderToStaticMarkup(
      createElement(Header, {
        isLoggedIn: true,
        messages: "Welcome",
        users: [{ name: "Manish" }, { name: "Jane" }],
      }),
    );

    expect(markup).toContain('<div class="text-green-500">');
    expect(markup).toContain("<li>Manish</li>");
    expect(markup).toContain("<li>Jane</li>");
    expect(markup).toContain('<p class="text-4xl bg-red-400">Welcome</p>');
  });

  it("renders the logged-out style and supports an empty user list", () => {
    const markup = renderToStaticMarkup(
      createElement(Header, {
        isLoggedIn: false,
        messages: "Please sign in",
        users: [],
      }),
    );

    expect(markup).toContain('<div class="text-red-500">');
    expect(markup).toContain("<ul class=\"text-2xl bg-blue-400\"></ul>");
    expect(markup).toContain(
      '<p class="text-4xl bg-red-400">Please sign in</p>',
    );
  });
});
