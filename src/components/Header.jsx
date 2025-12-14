import patternDesktop from "/images/pattern-bg-desktop.png";
import patternMobile from "/images/pattern-bg-mobile.png";

import IPDetails from "./IPDetails";
import Search from "./Search";

const Header = ({ ipData, onSearch, error }) => {
  return (
    <header className="relative z-50 flex flex-col items-center pt-8 pb-32 md:pt-10 md:pb-32">
      <h1 className="mb-6 text-center text-2xl font-bold text-white md:text-3xl">
        IP Address Tracker
      </h1>
      {error && <p className="mb-2 font-bold text-red-300">{error}</p>}
      <picture>
        <source srcSet={patternDesktop} media="(min-width=768px)" />
        <source srcSet={patternMobile} media="(max-width=767px)" />
        <img
          className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
          src={patternDesktop}
          alt="pattern"
        />
      </picture>
      <Search onSearch={onSearch} />
      {ipData && <IPDetails data={ipData} />}
    </header>
  );
};

export default Header;
