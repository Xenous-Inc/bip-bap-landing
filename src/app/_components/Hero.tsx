import Image from "next/image";

export const Hero = () => {
  return (
    <div>
      <div className="bg-blue pt-7">
        <div className="flex flex-col items-center gap-10 px-96 pt-20 text-white">
          <h1 className="text-center text-8xl">
            <p className="pb-4">Контроль воздуха</p>
            <p>в ваших руках</p>
          </h1>
          <h3 className="text-center text-xl py-2">
            <p>Приложение, предоставляющее качественную актуальную информацию</p>
            <p>о состоянии воздуха в режиме реального времени</p>
          </h3>
        </div>
        <div className="flex flex-row items-center justify-center gap-5 pt-10">
          <button className="flex flex-row gap-2.5 rounded-full border-2 bg-white pb-2.5 pl-5 pr-5 pt-2.5 outline-none">
            Скачать приложение
          </button>
          <button className="flex flex-row gap-2.5 rounded-full border-2 pb-2.5 pl-5 pr-5 pt-2.5 text-white outline-none">
            Войти в онлайн-версию
          </button>
        </div>
        <div className="flex items-center justify-center pt-7">
          <div className="flex items-center justify-center pt-16 gap-[440px]">
            <Image src="/leftPhone.png" width={357} height={714} alt={""} />
            <Image className="absolute" src="/mainPhone.png" width={432} height={871} alt={""} />
            <Image src="/rightPhone.png" width={357} height={714} alt={""} />
          </div>
          <Image
            className="absolute flex items-center justify-center pb-[340px]"
            src="/leaf.png"
            width={1920}
            height={1080}
            alt={""}
          />
        </div>
      </div>
      <div  id="about" className="pt-36">
      <div className="flex flex-row justify-center gap-[149px] bg-white pt-20">
        <div>
          <Image src="/aboutPage.png" width={564} height={559} alt={""} />
        </div>
        <div className="w-[700px] relative">
          <p className="text-7xl pb-20">О нас</p>
          <Image className="absolute bottom-[450px] left-14" src="/aboutLeaf.png" width={200} height={135} alt={""} />
          <p className="pb-5">
            Состояние экологии стало волновать все чаще, о чем свидетельствуют
            исследования о влиянии загрязненного воздуха на здоровье человека.
          </p>
          <p className="pb-5">
            С помощью приложения <span className="font-bold">Bip-Bap</span> любой человек в может следить за
            текущим состоянием окружающего его воздуха и принять меры для своей
            защиты.{" "}
          </p>
          <p>
            <span className="font-bold">Bip-Bap</span> – полезный инструмент для государственных органов и
            экологических организаций для принятия мер по улучшению
            экологической ситуации в городах.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};
