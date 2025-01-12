import { Spotlight } from "@/components/ui/Spotlight";

export function SpotlightPreview() {
    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="#f8e4a6"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-t from-amber-800 via-yellow-300 to-orange-500 h-full bg-opacity-50">
                    Spotlight <br /> is the new trend.
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    Spotlight effect is a great way to draw attention to a
                    specific part of the page. Here, we are drawing the
                    attention towards the text section of the page. I don&apos;t
                    know why but I&apos;m running out of copy.
                </p>

                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-amber-700 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-semibold text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Shimmer
                </button>
            </div>
        </div>
    );
}
