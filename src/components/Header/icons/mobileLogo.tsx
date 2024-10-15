import { colorsKit } from "@/shared/config/colors";
import React from "react";

interface Props {
  className?: string;
}

const MobileLogo = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="167"
      height="58"
      fill="none"
      viewBox="0 0 167 58"
      className={className}
    >
      <g clipPath="url(#clip0_264_22)">
        <path
          fill={colorsKit.getCSSVariable("black")}
          d="M93.445 29.786H87.16v2.994h6.286v-2.994zM26.288 38.172c-1.129 0-1.884-.453-2.257-1.342l-4.895-12.245h4.688l3.1 7.87 4.473-7.87h4.482L28.815 36.83c-.549.889-1.383 1.342-2.52 1.342h-.007zm9.218-.183h4.005l1.343-13.404h-3.918l-1.422 13.404h-.008zm5.292-.024h9.14c3.17.024 4.918-1.135 5.292-3.494.23-1.643-.16-2.78-1.16-3.383.77-.698 1.183-1.715 1.231-3.033-.032-2.104-1.335-3.272-3.91-3.478h-9.273l-1.32 13.388zm4.578-4.995l4.569.04c.842.087 1.216.39 1.128.905-.103.517-.508.794-1.24.818h-4.632l.175-1.77v.007zm.46-5.018h4.641c.795.119 1.145.436 1.057.96-.087.517-.5.787-1.24.81h-4.632l.175-1.77zm9.79 10.013h4.022l.413-4.185h3.552l1.828 4.225h4.466l-1.875-4.407c1.454-1.104 2.2-2.589 2.24-4.479.136-2.565-1.191-4.09-4.012-4.558h-9.298l-1.343 13.396.008.008zm5.095-10.053h4.966c.811.12 1.137.532 1.034 1.247-.112.715-.54 1.08-1.304 1.088h-4.935l.239-2.335zm20.36 10.22h-6.358c-2.821.016-4.005-2.263-3.528-6.805.445-4.606 2.153-6.909 5.165-6.94l5.205.015c3.115-.063 4.426 2.16 3.926 6.655-.207 4.653-1.677 7.02-4.41 7.075zm-5.627-9.14c-.223.341-.405 1.112-.54 2.31-.12 1.2-.128 1.922-.008 2.169.182.611.572.96 1.152 1.072h3.711c.62-.064 1.073-.358 1.32-.866.31-.357.524-1.215.643-2.58.111-1.374.024-2.248-.286-2.621-.294-.39-.747-.62-1.383-.675h-2.86c-.82.063-1.4.46-1.741 1.199l-.008-.008zm20.812-4.447l-.85 8.41c-.35 3.2.938 4.875 3.854 5.026h9.234l.35-3.772h-8.153c-.827-.095-1.24-.54-1.232-1.342l.842-8.322h-4.045zm13.128 13.373l.914-9.116c.429-2.748 2.082-4.177 4.975-4.296h4.537c2.631.182 3.87 1.604 3.719 4.264l-.929 9.18h-3.56l.413-4.074-5.96-.04-.406 4.09h-3.695l-.008-.008zm6.024-10.244c-.954.016-1.423.492-1.415 1.413l-.151 1.43h5.945l.119-1.12c.198-1.04-.104-1.62-.89-1.739h-3.608v.016zm21.83.397h-7.431c-.492 0-.89.024-1.152.071-.27.04-.516.239-.723.588.056.429.23.675.524.73.271.056.716.088 1.296.088h3.631c1.455.08 2.472.5 3.052 1.255.58.762.81 1.818.675 3.176-.222 1.358-.699 2.366-1.446 3.017-.739.644-1.963.985-3.671 1.009h-8.106l.35-3.439h7.7c.66 0 1.168-.015 1.518-.063.35-.048.588-.31.715-.77-.04-.365-.222-.596-.524-.667-.318-.072-.843-.111-1.566-.111h-3.504c-1.542 0-2.639-.374-3.282-1.128-.636-.754-.89-1.803-.763-3.129.246-1.397.747-2.414 1.51-3.05.762-.626 1.978-.984 3.615-1.055h7.915l-.349 3.494.016-.016zm13.755 9.894h-9.448c-2.718-.159-3.855-2.39-3.433-6.694.413-4.304 2.09-6.535 5.022-6.678h9.186l-.325 3.256h-8.146c-.691-.024-1.104.158-1.24.532l-.325 1.143h9.56l-.35 3.224-9.481-.032.024.755c.016.635.247.984.684 1.032h8.622l-.342 3.462h-.008zm1.327 0h4.029l.406-4.185h3.552l1.828 4.225h4.466l-1.876-4.407c1.454-1.104 2.193-2.589 2.241-4.479.135-2.565-1.2-4.09-4.013-4.558h-9.29l-1.351 13.396.008.008zm5.094-10.053h4.975c.794.12 1.144.532 1.025 1.247-.103.715-.54 1.08-1.295 1.088h-4.935l.23-2.335z"
        ></path>
        <path
          fill={colorsKit.getCSSVariable("black")}
          d="M41.1 20.28a15.092 15.092 0 00-5.42-4.875 14.921 14.921 0 00-7.048-1.747 15.01 15.01 0 00-10.633 4.4 14.973 14.973 0 00-4.402 10.624c0 4.153 1.684 7.902 4.402 10.625a14.997 14.997 0 0010.633 4.407v3.764c-5.19 0-9.894-2.104-13.295-5.503-3.401-3.406-5.507-8.1-5.507-13.285a18.73 18.73 0 015.507-13.285 18.744 18.744 0 0113.295-5.503c3.187 0 6.183.786 8.813 2.192a18.927 18.927 0 016.778 6.09l-3.115 2.105"
        ></path>
        <mask
          id="mask0_264_22"
          style={{ maskType: "luminance" }}
          width="36"
          height="39"
          x="9"
          y="9"
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="#fff"
            d="M41.1 20.28a15.092 15.092 0 00-5.42-4.875 14.921 14.921 0 00-7.048-1.747 15.01 15.01 0 00-10.633 4.4 14.973 14.973 0 00-4.402 10.624c0 4.153 1.684 7.902 4.402 10.625a14.997 14.997 0 0010.633 4.407v3.764c-5.19 0-9.894-2.104-13.295-5.503-3.401-3.406-5.507-8.1-5.507-13.285a18.73 18.73 0 015.507-13.285 18.744 18.744 0 0113.295-5.503c3.187 0 6.183.786 8.813 2.192a18.927 18.927 0 016.778 6.09l-3.115 2.105"
          ></path>
        </mask>
        <g mask="url(#mask0_264_22)">
          <path
            fill={colorsKit.getCSSVariable("black")}
            d="M28.624 9.894c-5.19 0-9.894 2.104-13.295 5.503a18.73 18.73 0 00-5.507 13.285c0 .953.071 1.89.207 2.811 1.279.151 2.582.286 3.901.405a15.28 15.28 0 01-.341-3.216c0-4.153 1.684-7.909 4.402-10.625a15.023 15.023 0 0110.633-4.399c2.55 0 4.95.628 7.049 1.747a15.091 15.091 0 015.42 4.876l3.114-2.104a18.862 18.862 0 00-6.778-6.091 18.718 18.718 0 00-8.813-2.192"
          ></path>
        </g>
        <path
          fill={colorsKit.getCSSVariable("black")}
          d="M48.936 50.718a29.458 29.458 0 01-5.467 3.772 29.148 29.148 0 01-6.167 2.462c-7.859 2.144-15.853.89-22.417-2.859-6.556-3.756-11.69-10.005-13.828-17.859-2.153-7.87-.906-15.85 2.853-22.409A29.459 29.459 0 0121.782 0l.771 2.827.93 2.819-.151.056A23.585 23.585 0 009.036 16.755a23.495 23.495 0 00-2.289 17.923c1.717 6.289 5.825 11.284 11.07 14.285a23.546 23.546 0 0017.936 2.28 23.616 23.616 0 004.95-1.946 23.769 23.769 0 004.371-3.018l3.878 4.431"
        ></path>
        <mask
          id="mask1_264_22"
          style={{ maskType: "luminance" }}
          width="49"
          height="58"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="#fff"
            d="M48.936 50.718a29.458 29.458 0 01-5.467 3.772 29.148 29.148 0 01-6.167 2.462c-7.859 2.144-15.853.89-22.417-2.859-6.556-3.756-11.69-10.005-13.828-17.859-2.153-7.87-.906-15.85 2.853-22.409A29.459 29.459 0 0121.782 0l.771 2.827.93 2.819-.151.056A23.585 23.585 0 009.036 16.755a23.495 23.495 0 00-2.289 17.923c1.717 6.289 5.825 11.284 11.07 14.285a23.546 23.546 0 0017.936 2.28 23.616 23.616 0 004.95-1.946 23.769 23.769 0 004.371-3.018l3.878 4.431"
          ></path>
        </mask>
        <g mask="url(#mask1_264_22)">
          <path
            fill={colorsKit.getCSSVariable("black")}
            d="M21.782 0A29.459 29.459 0 003.91 13.825a29.415 29.415 0 00-3.862 16.31c1.947.398 3.957.755 6.023 1.065a24.328 24.328 0 01-.159-2.732c0-4.169 1.113-8.195 3.123-11.705A23.507 23.507 0 0123.331 5.71l.152-.055-.93-2.82-.771-2.826"
          ></path>
        </g>
        <path
          fill={colorsKit.getCSSVariable("black")}
          d="M73.173 49.003v1.548a2.855 2.855 0 01-1.287.318c-.954 0-1.717-.286-2.289-.85-.604-.587-.906-1.326-.906-2.207 0-.882.302-1.604.906-2.192.58-.556 1.303-.842 2.178-.842.429 0 .898.112 1.398.326v1.556c-.39-.412-.842-.619-1.367-.619-.476 0-.874.15-1.192.453-.365.357-.548.802-.548 1.342s.167.96.509 1.286c.325.326.747.492 1.255.492.485 0 .93-.198 1.335-.603l.008-.008zM77.766 44.906v1.135H75.82v1.128h1.852v1.135h-1.852V49.6h1.947v1.135H74.47v-5.828h3.297zM80.42 50.734h-1.342v-5.828h1.168l3.163 3.755v-3.755h1.343v5.828h-1.169l-3.162-3.772v3.772zM89.567 46.041h-1.263v4.693H86.96v-4.693h-1.264v-1.135h3.878v1.135h-.008zM93.787 44.906v1.135H91.84v1.128h1.852v1.135H91.84V49.6h1.947v1.135h-3.298v-5.828h3.298zM95.098 44.906h2.042c.628 0 1.129.166 1.486.508.334.325.51.762.51 1.302 0 .492-.152.89-.454 1.191-.23.223-.5.373-.81.445l1.788 2.382h-1.645L96.44 48.44v2.295h-1.343v-5.828zm1.343 1.048v1.596h.302c.366 0 .636-.087.803-.254a.771.771 0 00.222-.564c0-.254-.087-.453-.27-.596-.167-.119-.413-.182-.747-.182h-.318.008zM105.786 44.778c.922 0 1.669.286 2.257.85.604.588.906 1.326.906 2.2 0 .873-.302 1.596-.906 2.183-.588.572-1.343.858-2.257.858-.913 0-1.676-.286-2.272-.858a2.785 2.785 0 01-.668-.968 3.045 3.045 0 01-.238-1.2c0-.42.079-.81.246-1.206a3.08 3.08 0 01.652-1c.572-.573 1.335-.859 2.28-.859zm-.007 1.24c-.517 0-.946.166-1.28.5-.342.333-.516.77-.516 1.318s.174.96.532 1.31c.334.318.755.476 1.248.476.532 0 .961-.166 1.295-.5.334-.325.509-.762.509-1.302s-.167-.969-.509-1.31c-.342-.334-.771-.5-1.287-.5l.008.007zM113.415 44.906v1.135h-1.891v1.128h1.748v1.135h-1.748v2.43h-1.343v-5.828h3.234zM120.17 44.906v1.135h-1.947v1.128h1.852v1.135h-1.852V49.6h1.947v1.135h-3.298v-5.828h3.298zM120.933 50.734l2.138-3.089-1.812-2.732h1.621l.961 1.66.962-1.66h1.613l-1.812 2.732 2.138 3.09h-1.613l-1.296-2.018-1.295 2.017h-1.613.008zM131.391 49.003v1.548a2.857 2.857 0 01-1.288.318c-.953 0-1.716-.286-2.288-.85-.604-.587-.906-1.326-.906-2.207 0-.882.302-1.604.906-2.192.58-.556 1.303-.842 2.177-.842.429 0 .898.112 1.399.326v1.556c-.39-.412-.843-.619-1.367-.619-.477 0-.874.15-1.192.453-.366.357-.548.802-.548 1.342s.166.96.508 1.286c.326.326.747.492 1.256.492.485 0 .93-.198 1.335-.603l.008-.008zM135.984 44.906v1.135h-1.947v1.128h1.852v1.135h-1.852V49.6h1.947v1.135h-3.298v-5.828h3.298zM137.295 44.906h1.343v4.693h1.812v1.135h-3.155v-5.828zM141.427 44.906h1.343v4.693h1.812v1.135h-3.155v-5.828zM148.858 44.906v1.135h-1.947v1.128h1.851v1.135h-1.851V49.6h1.947v1.135h-3.298v-5.828h3.298zM151.52 50.734h-1.343v-5.828h1.168l3.163 3.755v-3.755h1.343v5.828h-1.168l-3.163-3.772v3.772zM161.564 49.003v1.548a2.853 2.853 0 01-1.287.318c-.954 0-1.716-.286-2.289-.85-.604-.587-.905-1.326-.905-2.207 0-.882.301-1.604.905-2.192.581-.556 1.304-.842 2.178-.842.429 0 .898.112 1.398.326v1.556c-.389-.412-.842-.619-1.366-.619-.477 0-.875.15-1.192.453-.366.357-.549.802-.549 1.342s.167.96.509 1.286c.326.326.747.492 1.255.492.485 0 .93-.198 1.336-.603l.007-.008zM166.15 44.906v1.135h-1.947v1.128h1.851v1.135h-1.851V49.6h1.947v1.135h-3.298v-5.828h3.298z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_264_22">
          <path fill="#fff" d="M0 0H167V58H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default MobileLogo;
