import React from 'react';
import './HomePage.css'
import GameItem from "../../components/GameItem/GameItem";

const GAMES = [
    {
        image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1256900_Converged-Hero_1920x1080:VP2-859x540',
        title: 'Forza Horizon 5',
        genres: ['Гонки', 'Симулятор', 'Открытый мир'],
        price: 2343,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
    },
    {
        image: 'https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S1_2560x1440-4fd7701f78a23c971e429093fc1f6341',
        title: 'Battlefield 2042',
        genres: ['Экшен', 'Шутер', 'Война'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 2433,
        id: 2,
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
    },
    {
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/capsule_616x353.jpg?t=1678296348',
        title: 'Life is Strange True Colors',
        genres: ['Глубокий сюжет', 'Протагонистка'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 3021,
        id: 3,
        description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
    },
    {
        image: 'https://cdn2.unrealengine.com/Diesel%2Fbundles%2Fmafia-trilogy%2FEGS_MafiaTrilogy_Hangar13_G1A_00-1920x1080-bb8a4c86ab5c03c1759842bd9db6a22a58bf4305.jpg?h=1080&quality=medium&resize=1&w=1920',
        title: 'Grand Theft Auto V',
        genres: ['Открытый мир', 'Экшен'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 789,
        id: 4,
        description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
    },
    {
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/2400/ac505d57a46e24dd96712263d89a150cb443af288c025ff2.jpg',
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Тактика', 'Шутер'],
        price: 982,
        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
    },
    {
        image: 'https://bloody-disgusting.com/wp-content/uploads/2022/11/last-of-us-tv-2-1024x580.png',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 2863,
        id: 6,
        description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
]

export const HomePage = () => {
    return (
        <div className='home-page'>
            {GAMES.map((item) => <GameItem game={item}/>)}
        </div>
    );
};

