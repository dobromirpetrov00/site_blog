import React from "react";
import Mobile from "./windowSizeJSX/isMobile";
import DesktopMedium from "./windowSizeJSX/isDesktopMedium";
import DesktopLarge from "./windowSizeJSX/isDesktopLarge";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({
    maxWidth: 680,
  });

  const isDesktopMedium = useMediaQuery({
    minWidth: 681,
    maxWidth: 999,
  });

  const isDesktopLarge = useMediaQuery({
    minWidth: 1000,
  });

  return (
    <div>
      {isMobile && <Mobile />}
      {isDesktopMedium && <DesktopMedium />}
      {isDesktopLarge && <DesktopLarge />}
    </div>
  );
}

export default App;
