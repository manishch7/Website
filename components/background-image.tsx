import Image from "next/image"

export default function BackgroundImage() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src="/images/cosmic-background.jpeg"
        alt="Cosmic background"
        fill
        priority
        quality={100}
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}

