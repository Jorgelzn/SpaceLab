import * as THREE from 'three';
import vertexShader from './shaders/vertexShader.glsl';

import fragmentShader from './shaders/fragmentShader.glsl';

// Set up
const scene = new THREE.Scene();
const canvas = document.querySelector('#myCanvas');


//RENDERER
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
})
renderer.setSize(canvas.clientWidth, canvas.clientHeight);

// CAMERA
var ratio = document.documentElement.clientWidth/document.documentElement.clientHeight
var FOV = 50
const camera = new THREE.PerspectiveCamera(FOV,ratio,0.1,1000);
camera.position.z = 5; //Position the camera

// Create a cube
const geometry = new THREE.BoxGeometry();
//const material = new THREE.MeshBasicMaterial({ color: 0xb3d9ff });ç
const customShaderMaterial = new THREE.ShaderMaterial(vertexShader,fragmentShader)
//material.wireframe = true;
const cube = new THREE.Mesh(geometry, customShaderMaterial);
scene.add(cube);


// Render the scene
const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
};
animate();