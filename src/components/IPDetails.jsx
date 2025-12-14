const IPDetails = ({ data }) => {
  return (
    <section className="absolute -bottom-60 left-1/2 z-50 w-11/12 max-w-6xl -translate-x-1/2 rounded-2xl bg-white shadow-xl md:-bottom-16">
      <div className="flex flex-col items-center justify-between gap-6 p-6 text-center md:flex-row md:p-10 md:text-left">
        <div className="w-full md:w-1/4">
          <h2 className="mb-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
            IP Address
          </h2>
          <p className="text-xl font-bold wrap-break-word text-gray-800 md:text-2xl">
            {data.ip}
          </p>
        </div>
        <div className="hidden h-12 w-px bg-gray-300 md:block"></div>
        <div className="w-full md:w-1/4">
          <h2 className="mb-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
            Location
          </h2>
          <p className="text-xl font-bold text-gray-800 md:text-2xl">
            {data.location}
          </p>
        </div>
        <div className="hidden h-12 w-px bg-gray-300 md:block"></div>
        <div className="w-full md:w-1/4">
          <h2 className="mb-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
            Timezone
          </h2>
          <p className="text-xl font-bold text-gray-800 md:text-2xl">
            {data.timezone}
          </p>
        </div>
        <div className="hidden h-12 w-px bg-gray-300 md:block"></div>
        <div className="w-full md:w-1/4">
          <h2 className="mb-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
            ISP
          </h2>
          <p className="text-xl font-bold text-gray-800 md:text-2xl">
            {data.isp}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IPDetails;
