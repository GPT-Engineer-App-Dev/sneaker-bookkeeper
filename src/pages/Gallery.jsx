import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialImages = [
  "/images/sneaker1.jpg",
  "/images/sneaker2.jpg",
  "/images/sneaker3.jpg",
  "/images/sneaker4.jpg",
  "/images/sneaker5.jpg",
  "/images/sneaker6.jpg",
];

const Gallery = () => {
  const [images, setImages] = useState(initialImages);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Gallery</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="upload">Upload Images</Label>
            <Input id="upload" type="file" multiple onChange={handleUpload} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div key={index} className="relative">
                <img src={src} alt={`Uploaded ${index}`} className="w-full h-full object-cover rounded-md" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Gallery;