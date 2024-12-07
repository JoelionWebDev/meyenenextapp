/** @format */

import Featured from "@/components/Featured";
import Featured2 from "@/components/Featured2";
import { Video } from "@/components/Video";
import { Video2 } from "@/components/Video";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-300">
      <div className="w-10/12 mx-auto my-11">
        <Video />
      </div>
      <Featured2 />
      {/* hero */}
      <Featured />
      <div className="w-10/12 mx-auto mb-10">
        <Video2 />
      </div>
    </div>
  );
}
