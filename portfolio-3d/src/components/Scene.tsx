import { createElement } from "react";

const createFiber = (type: string, props?: any, ...children: any[]) =>
  createElement(type as any, props, ...children);

export default function Scene() {
  return (
    <>
      {createFiber("ambientLight", { intensity: 0.5 })}
      {createFiber("directionalLight", {
        position: [2, 2, 2],
        intensity: 1,
      })}
      {createFiber(
        "mesh",
        { rotation: [0.4, 0.4, 0] },
        createFiber("boxGeometry", { args: [1, 1, 1] }),
        createFiber("meshStandardMaterial", { color: "orange" })
      )}
    </>
  );
}