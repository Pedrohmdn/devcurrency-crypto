import { useState } from "react";
import imageNotFound from "../../assets/imageNotFound.svg";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
}

function ImageWithFallback({ src, alt }: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    src = imageNotFound;
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      style={{ borderRadius: "50%" }}
    />
  );
}

export default ImageWithFallback;
