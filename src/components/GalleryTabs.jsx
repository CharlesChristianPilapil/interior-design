import React from "react";

export default function GalleryTabs({ image }) {
  return (
    <li className="w-full rounded-sm">
      <button className="w-full h-full overflow-hidden gallery-tab rounded-lg">
        <img src={image} alt="images" className="w-full h-full " />
      </button>
    </li>
  );
}
