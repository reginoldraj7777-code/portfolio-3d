/// <reference types="vite/client" />
/// <reference types="@react-three/fiber" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      pointLight: any;
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
    }
  }
}
