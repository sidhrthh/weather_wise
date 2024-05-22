import Image from "next/image";

const BackgroundImage = () => (
  <>
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/55 z-[1]" />
    <Image
      src="https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg"
      alt="background image"
      layout="fill"
      objectFit="cover"
      quality={75}
      priority
    />
  </>
);

export default BackgroundImage;
