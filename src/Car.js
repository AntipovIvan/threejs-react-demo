import { useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Car = () => {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + 'models/car/scene.gltf'
  );

  useEffect(() => {
    gltf.scene.scale.set(0.002, 0.002, 0.002);
    gltf.scene.position.set(0, -0.035, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 10;
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} />;
};

export default Car;
