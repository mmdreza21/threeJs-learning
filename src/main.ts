import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let scene: THREE.Scene,
  controls: OrbitControls,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer

const params = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const aspect = params.width / params.height

function run() {
  /**
   * SCENE
   */
  scene = new THREE.Scene()

  /**
  * CAMERA
  */
  camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000)
  camera.position.z = 5;
  /**
   * RENDERER
   */
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(params.width, params.height)

  /**
   * CONTROLS
   */
  controls = new OrbitControls(camera, renderer.domElement)

  /**
   * OBJECTS
   */
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);


  document.body.appendChild(renderer.domElement);

  const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  animate();
}


run()