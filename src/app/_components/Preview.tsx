import Image from "next/image";
import "./../../styles/globals.css";

export const Preview = () => {
  return (
    <div id="О нас" className="bg-blue pt-7">
      <div className="flex flex-col items-center gap-10 px-[410px] pt-[80px] text-white">
        <h1 className="text-center text-8xl">
          Контроль воздуха <br /> в ваших руках{" "}
        </h1>
        <h3 className="text-center text-xl">
          Приложение, предоставляющее качественную актуальную информацию 
          о состоянии воздуха в режиме реального времени
        </h3>
      </div>
      <div className="flex flex-row items-center justify-center gap-5 pt-10">
        <button
          type="button"
          className="flex flex-row gap-2.5 rounded-full border-2 bg-white pb-2.5 pl-5 pr-5 pt-2.5 outline-none"
        >
          Скачать приложение
        </button>
        <button
          type="button"
          className="flex flex-row gap-2.5 rounded-full border-2 pb-2.5 pl-5 pr-5 pt-2.5 text-white outline-none"
        >
          Войти в онлайн-версию
        </button>
      </div>
      <div id="Что измеряем" className="flex items-center justify-center pt-7">
        <Image
          className="absolute flex items-center justify-center pb-72"
          src="/phones.svg"
          width={1450}
          height={1080}
          alt={""}
        />
        <Image
          className="inset-0 flex flex-col items-center justify-center"
          src="/background.svg"
          width={865}
          height={100}
          alt={""}
        />
      </div>
    </div>
  );
};
