"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type SyntheticEvent,
} from "react";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  type PercentCrop,
  type PixelCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Button } from "@/src/components/ui/button";

const centerAspectCrop = (
  mediaWidth: number,
  mediaHeight: number,
  aspect?: number,
): PercentCrop =>
  aspect
    ? centerCrop(
        makeAspectCrop(
          {
            unit: "%",
            width: 90,
          },
          aspect,
          mediaWidth,
          mediaHeight,
        ),
        mediaWidth,
        mediaHeight,
      )
    : { x: 5, y: 5, width: 90, height: 90, unit: "%" }; // freeform default

const getCroppedPngImage = async (
  image: HTMLImageElement,
  crop: PixelCrop,
): Promise<string> => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("No 2D context");

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  canvas.width = crop.width;
  canvas.height = crop.height;

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height,
  );

  return canvas.toDataURL("image/png");
};

export default function ImageCropper({
  file,
  aspect, // pass undefined for freeform
  onCrop,
  onReset,
}: {
  file: File;
  aspect?: number;
  onCrop?: (croppedDataUrl: string) => void;
  onReset?: () => void;
}) {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [crop, setCrop] = useState<PercentCrop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const reader = new FileReader();
    reader.addEventListener("load", () =>
      setImgSrc(reader.result?.toString() || ""),
    );
    reader.readAsDataURL(file);
  }, [file]);

  const onImageLoad = useCallback(
    (e: SyntheticEvent<HTMLImageElement>) => {
      const { width, height } = e.currentTarget;
      const initialCrop = centerAspectCrop(width, height, aspect);
      setCrop(initialCrop);
    },
    [aspect],
  );

  const handleApplyCrop = async () => {
    if (imgRef.current && completedCrop) {
      const cropped = await getCroppedPngImage(imgRef.current, completedCrop);
      onCrop?.(cropped);
    }
  };

  const handleReset = () => {
    setImgSrc("");
    setCrop(undefined);
    setCompletedCrop(null);
    onReset?.();
  };

  return (
    <div>
      <div>
        {imgSrc && (
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(pixelCrop) => setCompletedCrop(pixelCrop)}
            aspect={aspect}
            className="max-w-full max-h-[400px]"
          >
            <img ref={imgRef} alt="Crop" src={imgSrc} onLoad={onImageLoad} />
          </ReactCrop>
        )}
      </div>

      <div className="max-w-lg flex justify-between mt-2">
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleApplyCrop} variant="default">
          Apply Crop
        </Button>
      </div>
    </div>
  );
}
