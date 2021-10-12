/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { TableOfContent } from "../components";

const MockPage: React.FC = () => {
  return (
    <>
      <article>
        <div>
          <h1 id="h1-heading"><a href="#">H1 Heading</a></h1>
          <p>H1 text</p>
          <h2 id="h2-heading"><a href="#">H2 Heading</a></h2>
          <p>H2 text</p>
        </div>
      </article>
      <aside>
        <TableOfContent />
      </aside>
    </>
  );
};

xit("contains headings", () => {
  render(<MockPage />);
  const toc = screen.getByRole("navigation");
  expect(toc).toHaveTextContent("H1 Heading");
  expect(toc).toHaveTextContent("H2 Heading");
});
