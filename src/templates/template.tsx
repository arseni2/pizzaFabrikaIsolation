"use client";

export const Template = () => {
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