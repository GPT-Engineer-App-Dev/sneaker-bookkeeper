import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Grid, GridItem } from "@/components/ui/grid";

const Gallery = () => {
  const [images, setImages] = useState([]);

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
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
            <Input type="file" multiple onChange={handleUpload} />
          </div>
          <Grid className="grid-cols-3 gap-4">
            {images.map((src, index) => (
              <GridItem key={index}>
                <img src={src} alt={`Sneaker ${index + 1}`} className="w-full h-auto rounded-md" />
              </GridItem>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Gallery;