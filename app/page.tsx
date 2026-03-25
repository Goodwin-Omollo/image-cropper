"use client";

import { ThemeToggle } from "@/components/modeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import ImageCropper from "@/components/ui/shadcn-io/image-crop";
import { useState } from "react";
import { IoIosDownload } from "react-icons/io";

export default function TestPage() {
  const [file, setFile] = useState<File | null>(null);
  const [cropped, setCropped] = useState<string>("");

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = cropped;
    a.download = "cropped-image.png";
    a.click();
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center absolute">
      <div className="absolute top-4 right-4 md:right-16">
        <ThemeToggle />
      </div>
      <div className="p-6 space-y-4">
        <Field>
          <FieldLabel htmlFor="picture">Image Cropper</FieldLabel>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files && setFile(e.target.files[0])}
            className="cursor-pointer"
          />
          <FieldDescription>Select a picture to crop.</FieldDescription>
        </Field>

        {file && (
          <ImageCropper
            file={file}
            aspect={undefined} // try 1/1, 16/9, or undefined for freeform
            onCrop={(img) => setCropped(img)}
          />
        )}

        {cropped && (
          <div className="space-y-4">
            <FieldLabel htmlFor="picture">Cropped Preview</FieldLabel>
            <img
              src={cropped}
              alt="Cropped"
              className="max-w-full border rounded"
            />
            <div>
              <FieldDescription>Download Cropped Image</FieldDescription>
              <Button onClick={handleDownload} className="cursor-pointer mt-2">
                Download
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
