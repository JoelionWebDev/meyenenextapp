export function Video() {
  return (
    <video autoPlay loop muted width="100%" height="30vh" preload="none">
      <source
        src="https://gzcwvsvogkvh49rc.public.blob.vercel-storage.com/PROJECT%20PLAN%20(1)-ScMjRpsHhvLzKLqA904b9KmM0vwy5v.mp4"
        type="video/mp4"
      />
      {/* <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag. */}
    </video>
  );
}
export function Video2() {
  return (
    <div>
      <video autoPlay loop muted width="100%" height="30vh" preload="none">
        <source
          src="https://gzcwvsvogkvh49rc.public.blob.vercel-storage.com/PROJECT%20PLAN%20(2)-gLbFMXtP0mvA87Vr7Qrja6YTE7Sid7.mp4"
          type="video/mp4"
        />
        {/* <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag. */}
      </video>
      <h4 className="text-[1.2rem] mt-10">
        Electrical Installations & Upgrades
      </h4>
      <p className="text-[0.8rem]">
        Elevate your home with our professional installation services. Whether
        it’s new lighting fixtures, appliances, or smart home upgrades, we
        ensure flawless and efficient installations for all your electrical
        needs.
      </p>
      <h4 className="text-[1.2rem]">Safe & Reliable Repairs</h4>
      <p className="text-[0.8rem]">
        Experience peace of mind with our reliable repair services. Our
        technicians quickly diagnose and fix issues, keeping your home safe and
        your electrical systems running smoothly.
      </p>
    </div>
  );
}
