import Image from "next/image";

export const Priority = () => {
  return (
    <div>
      <div className="px-32">
        <div id="advantages">
          <p className="py-28 text-center text-7xl">Преимущества</p>
        </div>
        <div className=" flex flex-col gap-24">
          <div className="flex flex-row gap-20">
            <div>
              <Image src="/search.png" width={801} height={532} alt={""} />
            </div>
            <div className="w-[827px]">
              <p className="text-4xl pt-20 pb-11">Удобная экологическая карта</p>
              <p>
                Интерактивная карта позволяет видеть список датчиков, выбирать
                нужный, переключаться между ними. Градиентный цветовой код на
                карте визуализирует экологическую ситуацию в разных регионах
                мира. Возможность перемещения по карте и переключение между
                городами.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-28">
            <div className="w-[763px]">
              <p className="pb-11 pt-20 text-4xl">Датчики в каждом городе</p>
              <p>
                Карта позволяет просматривать список датчиков, выбирать нужный и
                переключаться между ними. Можно выбирать как любой ближайший к
                вам, так и датчик другого региона и получать информацию о
                качестве воздуха из любой точки мира. Изучение экологических
                ситуаций в различных городах позволяет составлять рейтинг
                городов по степени загрязнения атмосферы.
              </p>
            </div>
            <div>
              <Image src="/map.png" width={745} height={464} alt={""} />
            </div>
          </div>
          <div className="flex flex-row gap-[158px]">
            <div>
              <Image
                className="pb-24"
                src="/schedule.png"
                width={664}
                height={286}
                alt={""}
              />
            </div>
            <div className="w-[827px]">
              <p className="text-4xl pt-12 pb-12">Таймлайн</p>
              <p>
                Удобное визуальное представление данных о качестве воздуха в
                виде графика в хронологическом порядке, с помощью которого можно
                наблюдать изменение показателей в течение дня на любом выбранном
                датчике в соответствующем регионе.
              </p>
              <div className=" pl-56 pt-28">
                <Image
                  className="absolute"
                  src="/MacBook.png"
                  width={673}
                  height={589}
                  alt={""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue px-32 pt-14 text-white">
        <div className="flex flex-row">
          <div className="flex flex-col gap-12">
            <p className="text-7xl w-[800px]">Начните пользоваться уже сейчас</p>
            <p>
              Устанавливайте мобильное приложение на свой смартфон или
              воспользуйтесь веб-версией приложения
            </p>
            <div className="flex flex-row gap-4">
              <button className="flex flex-row gap-2.5 rounded-full border-2 bg-white pb-2.5 pl-5 pr-5 pt-2.5 text-black outline-none">
                Скачать приложение
              </button>
              <button className="flex flex-row gap-2.5 rounded-full border-2 pb-2.5 pl-5 pr-5 pt-2.5 text-white outline-none">
                Войти в онлайн-версию
              </button>
            </div>
          </div>
        </div>
        <p className="pb-3 pt-14 text-center">
          © 2023 Xenous. Все права защищены
        </p>
      </div>
    </div>
  );
};