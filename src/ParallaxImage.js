import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxImage = (props) => {
  let contentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    color: "goldenrod",
    backgroundColor: "rgba(0,0,0,.4)",
    webKitFilter: "blur(0px) saturate(2)",
  };
  return (
    <ParallaxBanner
      layers={[
        {
          image: props.imgsrc,
          amount: 0.7,
          speed: -20,
        },
      ]}
      style={{ height: props.height }}
    >
      <div style={contentStyle}>{props.children}</div>
    </ParallaxBanner>
  );
};

export default ParallaxImage;
