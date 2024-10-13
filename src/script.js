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
uniforms = {
    u_time: { type: "f", value: 1.0 },
    u_resolution: { type: "v2", value: new THREE.Vector2(renderer.domElement.width,renderer.domElement.height) },
    u_mouse: { type: "v2", value: new THREE.Vector2() }
};

var customShaderMaterial = new THREE.ShaderMaterial({
    uniforms : uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
})
//material.wireframe = true;
const cube = new THREE.Mesh(geometry, customShaderMaterial);
scene.add(cube);


renderer.render(scene, camera);