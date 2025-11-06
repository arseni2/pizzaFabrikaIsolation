"use client";

import { useState, useEffect } from "react";

export const Template = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <template id="temp">
            {`
        const data = root.querySelector(".from-cke__details-header");
        console.log("data from template", data);
        data?.addEventListener("click", (e) => {
          console.log("click");
        });
      `}
        </template>
    );
};