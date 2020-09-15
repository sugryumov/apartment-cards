import { TApartmentList } from '../types';

const data: TApartmentList[] = [
  {
    id: 1,
    title: 'Жилье на ферме',
    description: '10 из недавних гостей отметили, что жилье идеально чистое.',
    poster_link:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80',
    like: true,
    price: 1200,
  },
  {
    id: 2,
    title: 'Дом на дереве',
    description: 'Дом на дереве полностью в вашем распоряжении.',
    poster_link:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    like: false,
    price: 550,
  },
  {
    id: 3,
    title: 'Микродом',
    description: '100% недавних гостей оценили прибытие на пять звезд.',
    poster_link:
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    like: false,
    price: 1000,
  },
  {
    id: 4,
    title: 'Квартира',
    description: 'Квартира находится в самом центре исторического города',
    poster_link:
      'https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    like: false,
    price: 1600,
  },
  {
    id: 5,
    title: 'Жилье',
    description:
      'Стильные апартаменты расположены в новом доме в спальном районе города',
    poster_link:
      'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
    like: false,
    price: 2000,
  },
  {
    id: 6,
    title: 'Квартира',
    description:
      'Сдаётся посуточно новая солнечная квартира в «русской жемчужине»',
    poster_link:
      'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    like: false,
    price: 1700,
  },
];

const flag = Math.random();

export const getApartmentList = () =>
  new Promise<any>((resolve, reject) => {
    setTimeout(
      () =>
        flag < 0.9
          ? resolve({ data })
          : reject({
              message: 'Произошла ошибка. Перезагрузите страницу.',
            }),
      3000,
    );
  });
