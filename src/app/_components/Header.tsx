import './../../styles/globals.css';

export const Header = () => {
  return (
    <div className='h-auto bg-blue'>
    <nav className="flex w-full flex-row items-center justify-between py-4 px-32">
      <div className="flex flex-row items-center">
        <span className="text-2xl font-bold text-white">
          Bip-Bap
        </span>
        </div>
          <div className='flex flex-row gap-14 items-center text-white'>
            <a href="#Что измеряем">О нас</a>
            <a href='#О нас'>Что измеряем</a>
            <a href='#Преимущества'>Преимущества</a>
          </div>
        <div>
      </div>  
    </nav>    
    </div>
  );
};