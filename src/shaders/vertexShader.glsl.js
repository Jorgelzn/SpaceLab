import  Vector4  from "three";

const vertexShader ='void main()gl_Position = projectionMatrix * modelViewMatrix*Vector4(position, 1.0)';

export default vertexShader;