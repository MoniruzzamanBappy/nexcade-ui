import React from "react";
import Image from "next/image";
import clsx from "clsx";

const Avatar = ({ src, alt, initials, size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-16 h-16 text-lg",
    xl: "w-20 h-20 text-xl",
  };

  return (
    <div
      className={clsx(
        "rounded-full flex items-center justify-center bg-gray-200 text-gray-600 font-semibold overflow-hidden",
        sizeClasses[size]
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || "Avatar"}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
