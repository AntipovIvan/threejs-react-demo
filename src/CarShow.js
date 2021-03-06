import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import Boxes from './Boxes';
import Car from './Car';
import FloatingGrid from './FloatingGrid';
import { Ground } from './Ground';
import Rings from './Rings';

const CarShow = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 3]} />

      {/* <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshBasicMaterial color={'blue'} />
            </mesh> */}

      {/* let color=new Color(0,0,0); */}
      <color args={[0, 0, 0]} attach="background" />

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car />
          </>
        )}
      </CubeCamera>
      <Rings />
      <Boxes />
      {/* <FloatingGrid /> */}

      {/* let spotlight=new SpotLight();
            spotlight.intensity=1.5;
            spotlight.position.set(...) */}
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground />

      <EffectComposer>
        <DepthOfField
          focusDistance={0.0035}
          focalLength={0.01}
          bokehScale={3}
          height={480}
        />
        {/* <Bloom
                blendFunction={BlendFunction.ADD}
                intensity={0.8}
                width={100}
                height={100}
                kernelSize={1}
                luminanceThreshold={0.15}
                luminanceSmoothing={0.025}
              /> */}
        {/* <ChromaticAberration
                blendFunction={BlendFunction.NORMAL}
                offset={[0.0005, 0.0012]}
              /> */}
      </EffectComposer>
    </>
  );
};

export default CarShow;
