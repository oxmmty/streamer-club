import React from "react";
// type
import { IconProps } from "types/components/Icon";

// -----------------------------------------------
const AflIcon: React.FC<IconProps> = ({
  iColor = "white",
  iSize = { x: 40, y: 40 },
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      preserveAspectRatio="xMidYMid meet"
      width={iSize.x}
      height={iSize.y}
      viewBox="0.32 0.17 455.43 451.79"
    >
      <g
        transform="translate(0.000000,452.000000) scale(0.100000,-0.100000)"
        fill={iColor}
        stroke="none"
      >
        <path d="M3465 4509 c-647 -62 -1454 -406 -2055 -877 -130 -102 -416 -392 -524 -532 -640 -827 -1016 -1997 -839 -2610 122 -423 498 -568 1169 -450 347 61 729 194 1139 395 483 237 820 470 1135 785 178 177 276 296 413 495 248 364 461 833 566 1252 123 489 118 887 -16 1163 -86 179 -237 296 -450 349 -151 39 -338 49 -538 30z m355 -169 c110 -14 222 -44 282 -77 26 -14 48 -29 48 -32 0 -3 -281 -287 -625 -631 l-624 -624 -83 81 c-92 89 -124 103 -181 79 -56 -23 -83 -95 -56 -149 6 -12 43 -55 82 -95 l72 -72 -67 -67 -67 -67 -84 82 c-76 74 -88 82 -123 82 -54 0 -101 -31 -112 -73 -16 -58 -4 -86 79 -172 l78 -81 -67 -67 -67 -67 -80 80 c-58 58 -89 82 -113 86 -73 14 -140 -51 -128 -125 4 -27 24 -54 86 -116 l80 -80 -70 -70 -70 -69 -84 82 c-79 78 -86 82 -128 82 -56 0 -93 -27 -107 -76 -14 -52 0 -78 87 -166 l76 -78 -64 -65 c-35 -36 -69 -65 -74 -65 -5 0 -47 37 -93 81 l-83 82 -46 -6 c-62 -7 -94 -39 -101 -101 l-6 -46 82 -83 c44 -46 81 -88 81 -93 0 -13 -1253 -1264 -1266 -1264 -13 0 -55 92 -78 167 -105 362 31 1032 340 1671 403 836 904 1347 1709 1742 575 283 1173 428 1565 380z m486 -292 c176 -344 64 -1078 -271 -1763 -184 -376 -398 -681 -664 -946 -175 -174 -308 -282 -536 -434 -865 -576 -1928 -874 -2387 -668 -32 14 -58 29 -58 33 0 4 286 292 637 640 l636 631 82 -81 c62 -62 89 -82 116 -86 69 -11 129 44 129 117 0 26 -14 46 -85 118 l-85 87 70 69 70 69 84 -82 c81 -79 85 -82 131 -82 38 0 52 5 76 29 24 24 29 38 29 76 0 46 -3 50 -82 131 l-82 84 69 70 70 70 80 -80 c62 -62 89 -82 116 -86 66 -11 129 40 129 104 0 47 -13 67 -93 150 l-72 72 66 66 66 66 84 -80 c92 -86 121 -100 173 -78 45 19 66 52 66 104 0 42 -4 49 -82 129 l-82 84 67 67 67 67 72 -72 c40 -39 83 -76 95 -82 40 -20 90 -13 125 18 29 26 33 35 33 80 0 50 -1 52 -83 133 l-82 83 627 628 c698 697 629 642 679 545z" />
      </g>
    </svg>
  );
};
export default AflIcon;
