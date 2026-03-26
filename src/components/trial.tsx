"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Field, FieldDescription, FieldLabel } from "@/src/components/ui/field";
import ImageCropper from "@/src/components/ui/shadcn-io/image-crop";
import { useState } from "react";
import { Card, CardContent } from "@/src/components/ui/card";

export default function TestPage() {
  const [file, setFile] = useState<File | null>(null);
  const [cropped, setCropped] = useState<string>("");

  const handleReset = () => {
    setFile(null);
    setCropped("");
    // Clear file input
    const fileInput = document.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = cropped;
    a.download = "cropped-image.png";
    a.click();
  };

  return (
    <Card className="shadow-none">
      <CardContent className="space-y-4">
        <Field>
          <FieldLabel htmlFor="picture">Image Cropper</FieldLabel>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files && setFile(e.target.files[0])}
            className="cursor-pointer max-w-sm"
          />
          <FieldDescription>Select a picture to crop.</FieldDescription>
        </Field>

        {file && (
          <ImageCropper
            file={file}
            aspect={undefined} // try 1/1, 16/9, or undefined for freeform
            onCrop={(img) => setCropped(img)}
            onReset={handleReset}
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
      </CardContent>
    </Card>
  );
}
