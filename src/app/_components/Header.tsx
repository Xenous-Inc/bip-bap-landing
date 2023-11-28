export const Header = () => {
  return (
      <div className="h-auto bg-blue pb-20">
        <nav className="flex w-full flex-row items-center justify-between px-32 py-4 fixed bg-blue top-0 z-50">
          <div className="flex flex-row items-center">
            <span className="text-2xl font-bold text-white">Bip-Bap</span>
          </div>
          <div className="flex flex-row items-center gap-14 text-white">
            <a href="#about">О нас</a>
            <a href="#whatMeasure">Что измеряем</a>
            <a href="#advantages">Преимущества</a>
          </div>
          <div></div>
        </nav>
      </div>
  );
};
