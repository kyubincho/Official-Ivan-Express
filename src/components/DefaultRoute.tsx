import { createElement } from "react";
import { Route } from "react-router-dom";
import { Navbar } from "./Navbar";

export function DefaultRoute(
  { element, ...rest }: any // eslint-disable-line @typescript-eslint/no-explicit-any
) {
  console.log(rest);
  function routeComponent(
    props: any // eslint-disable-line @typescript-eslint/no-explicit-any
  ) {
    return (
      <>
        <Navbar />
        {createElement(element, {
          ...props,
        })}
      </>
    );
  }

  return <Route {...rest} element={routeComponent} />;
}
