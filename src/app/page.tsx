"use client";

import { ThemeToggle } from "@/src/components/modeToggle";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Field, FieldDescription, FieldLabel } from "@/src/components/ui/field";
import ImageCropper from "@/src/components/ui/shadcn-io/image-crop";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function TestPage() {
  const [file, setFile] = useState<File | null>(null);
  const [cropped, setCropped] = useState<string>("");
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const res = await fetch("https://api.github.com/repos/goodwin-omollo/image-cropper", {
          next: { revalidate: 3600 }
        });
        const data = await res.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.log(error);
      }
    }
    fetchStars();
  }, []);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = cropped;
    a.download = "cropped-image.png";
    a.click();
  };



  return (
    <div className="w-full min-h-screen flex items-center justify-center absolute">
      <div className="absolute top-4 right-4 left-4 md:right-16 md:left-16">
        <div className="flex items-center justify-between gap-2">
          <Link
            href="https://github.com/goodwin-omollo/image-cropper"
            target="_blank"
            className="flex items-center text-sm gap-2 bg-muted/50 px-3 py-1 rounded-lg"
          >
            <FaGithub size={16} /> ⭐ {stars ?? "—"}
          </Link>
          <ThemeToggle />
        </div>
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
