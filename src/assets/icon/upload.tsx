import React from "react";
// type
import { IconProps } from "types/components/Icon";

// --------------------------------
const UploadIcon: React.FC<IconProps> = ({
  iColor = "#818181",
  iSize = { x: 38, y: 36 },
}) => {
  return (
    <svg
      width={iSize.x}
      height={iSize.y}
      viewBox="0 0 38 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.0834 19.5C29.6635 19.5 29.2608 19.658 28.9638 19.9393C28.6669 20.2206 28.5001 20.6021 28.5001 21V21.57L26.1567 19.35C25.3293 18.5723 24.211 18.1359 23.0455 18.1359C21.88 18.1359 20.7617 18.5723 19.9342 19.35L18.8259 20.4L14.8992 16.68C14.0603 15.9234 12.9463 15.5014 11.788 15.5014C10.6297 15.5014 9.51573 15.9234 8.67675 16.68L6.33341 18.9V10.5C6.33341 10.1021 6.50023 9.72061 6.79716 9.43931C7.0941 9.158 7.49682 8.99997 7.91675 8.99997H19.0001C19.42 8.99997 19.8227 8.84193 20.1197 8.56063C20.4166 8.27932 20.5834 7.89779 20.5834 7.49997C20.5834 7.10214 20.4166 6.72061 20.1197 6.43931C19.8227 6.158 19.42 5.99997 19.0001 5.99997H7.91675C6.65697 5.99997 5.44879 6.47407 4.55799 7.31799C3.66719 8.1619 3.16675 9.30649 3.16675 10.5V28.5C3.16675 29.6934 3.66719 30.838 4.55799 31.682C5.44879 32.5259 6.65697 33 7.91675 33H26.9167C28.1765 33 29.3847 32.5259 30.2755 31.682C31.1663 30.838 31.6667 29.6934 31.6667 28.5V21C31.6667 20.6021 31.4999 20.2206 31.203 19.9393C30.9061 19.658 30.5033 19.5 30.0834 19.5ZM7.91675 30C7.49682 30 7.0941 29.8419 6.79716 29.5606C6.50023 29.2793 6.33341 28.8978 6.33341 28.5V23.145L10.9251 18.795C11.1577 18.585 11.4667 18.4678 11.788 18.4678C12.1093 18.4678 12.4183 18.585 12.6509 18.795L17.6701 23.55L24.4784 30H7.91675ZM28.5001 28.5C28.4978 28.7871 28.3979 29.0659 28.2151 29.295L21.0742 22.5L22.1826 21.45C22.2961 21.3402 22.4316 21.253 22.5811 21.1935C22.7307 21.134 22.8912 21.1033 23.0534 21.1033C23.2156 21.1033 23.3762 21.134 23.5257 21.1935C23.6752 21.253 23.8107 21.3402 23.9242 21.45L28.5001 25.815V28.5ZM35.9576 6.43497L31.2076 1.93497C31.057 1.79841 30.8794 1.69136 30.6851 1.61997C30.2996 1.46994 29.8672 1.46994 29.4818 1.61997C29.2874 1.69136 29.1098 1.79841 28.9592 1.93497L24.2092 6.43497C23.9111 6.71742 23.7436 7.10051 23.7436 7.49997C23.7436 7.89942 23.9111 8.28251 24.2092 8.56497C24.5074 8.84742 24.9118 9.0061 25.3334 9.0061C25.7551 9.0061 26.1594 8.84742 26.4576 8.56497L28.5001 6.61497V15C28.5001 15.3978 28.6669 15.7793 28.9638 16.0606C29.2608 16.3419 29.6635 16.5 30.0834 16.5C30.5033 16.5 30.9061 16.3419 31.203 16.0606C31.4999 15.7793 31.6667 15.3978 31.6667 15V6.61497L33.7092 8.56497C33.8564 8.70556 34.0316 8.81715 34.2245 8.8933C34.4174 8.96946 34.6244 9.00866 34.8334 9.00866C35.0424 9.00866 35.2494 8.96946 35.4423 8.8933C35.6353 8.81715 35.8104 8.70556 35.9576 8.56497C36.106 8.42552 36.2238 8.25962 36.3042 8.07683C36.3845 7.89404 36.4259 7.69798 36.4259 7.49997C36.4259 7.30195 36.3845 7.10589 36.3042 6.9231C36.2238 6.74031 36.106 6.57441 35.9576 6.43497Z"
        fill={iColor}
      />
    </svg>
  );
};
export default UploadIcon;
