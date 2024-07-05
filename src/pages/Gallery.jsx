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
  "/images/sneaker7.jpg",
  "/images/sneaker8.jpg",
  "/images/sneaker9.jpg",
  "/images/sneaker10.jpg",
  "/images/sneaker11.jpg",
  "/images/sneaker12.jpg",
  "/images/sneaker13.jpg",
  "/images/sneaker14.jpg",
  "/images/sneaker15.jpg",
  "/images/sneaker16.jpg",
  "/images/sneaker17.jpg",
  "/images/sneaker18.jpg",
  "/images/sneaker19.jpg",
  "/images/sneaker20.jpg",
  "/images/sneaker21.jpg",
  "/images/sneaker22.jpg",
  "/images/sneaker23.jpg",
  "/images/sneaker24.jpg",
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