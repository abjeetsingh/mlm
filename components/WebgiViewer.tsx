import React, {
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,
  Vector3,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAni } from "@app/lib/ScrollAni";
function WebgiViewer() {
  const memoScrollAni = useCallback(
    (position: Vector3, tar: Vector3, onUpdate: () => void) => {
      if (position && tar && onUpdate) {
        scrollAni(position, tar, onUpdate);
      }
    },
    []
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const setupViewer = useCallback(async () => {
    const viewer = new ViewerApp({
      canvas: canvasRef.current as HTMLCanvasElement,
    });

    const manager = await viewer.addPlugin(AssetManagerPlugin);
    // camera position and target
    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    // Add some plugins
    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);

    viewer.renderer.refreshPipeline();

    await viewer.load("/mercedesnew.glb");

    const tonemapPlugin = viewer.getPlugin(TonemapPlugin);

    if (tonemapPlugin?.config) {
      tonemapPlugin.config.clipBackground = true;
    }

    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

    // window.scrollTo(0, 0);
    let needUpdate = true;
    const onUpdate = () => {
      needUpdate = true;
      viewer.setDirty();
    };
    viewer.addEventListener("preFrame", () => {
      if (needUpdate) {
        camera.positionUpdated();
        needUpdate = false;
      }
    });

    memoScrollAni(position, target, onUpdate);
  }, []);

  useEffect(() => {
    setupViewer();
  }, []);

  return (
    <div className="w-full h-full pointer-events-none flex items-center justify-center  z-20 outercanvas aspect-square ">
      <canvas
        className=" p-5 bg-transparent  canvas  rounded-[50%] w-full h-full"
        ref={canvasRef}
      />
    </div>
  );
}

export default WebgiViewer;
