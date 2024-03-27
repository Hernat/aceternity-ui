import { ThreeDCardDemo } from "./_components/3d-card";
import { EvervaultCardDemo } from "./_components/EvervaultCardDemo";
import { GlobeDemo } from "./_components/Globe";
import { LampDemo } from "./_components/LampDemo";
import { SpotlightPreview } from "./_components/Spotlight";

const page = () => {
    return (
        <div className="w-full mt-20">
            <SpotlightPreview />
            <div className="container flex-wrap justify-center lg:flex gap-y-5  lg:gap-10 ">
                <ThreeDCardDemo />
                <ThreeDCardDemo />
                <ThreeDCardDemo />
            </div>
            <EvervaultCardDemo />

            <GlobeDemo />
        </div>
    );
};

export default page;
