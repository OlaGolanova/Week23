# Week23
1. Какую ошибку я допустила в [этом](https://www.notion.so/23-CSS-React-d4b0b61bb697459aacb1681ba2764440?pvs=21) примере?  

Стоит лишний пробел между 1.5 и em 
	fontSize: '1.5 em',
    должно быть 	fontSize: '1.5em'

2. Какие есть способы работы со стилями в React?

Компоненты в React можно стилизовать четырьмя способами: инлайновые стили(нужно избегать), таблицы стилей, CSS модули и препроцессоры. еще есть разные дополнительные плагины и расширения, например styled compoinents.

3. Как будет выглядеть карточка товара, если ей передать атрибут `addedToCart`===0?

У карточки не будет кнопки Добавить в корзину, будет форма, в которой будет указано, что количетсво данного товара в корзине - 0.

4. Какие ещё проверки нужно было бы сделать для атрибута `addedToCart`?

Проверка на ноль, если в корзине ноль товаров или меньше нуля(не натуральное число), то возвращаем кнопку добавить, форма с количеством товара уходит.
Проверка на максимально возможное количество товаров, чтобы не было возможности добавить товара больше, чем есть.

5. Клиент попросил повесить тег «New» на товары из новой коллекции. Как это сделать, какой условный оператор выбрать?

Условный оператор &&

6. Какими тремя способами можно написать условный рендеринг? 
Через If, тернарный оператор, &&

7. Представьте, что вы пишете компонент логина. Если пользователь авторизован, то мы показываем его имя, а если нет, то даём возможность ввода логина и пароля. Какой код для этого нужно написать, если за авторизацию пользователя отвечает флаг isAutorized?

Компонент формы авторизации
  ```jsx
           export default function AddToCartForm() {
                return (
                    <form>
                        <input placeholder="Введитие логин"/>
                        <input placeholder="Введитие пароль"/>
                        <button>Вход</button>
                    </form>
                );
            }
```


Компонент Приветсвия с Имененм
```jsx

            export default function AddToCartButton(props) {
                return (
                    <div>
                        Привет, {props.name}
                    </div>
            
                )
            }
                                 
  ``` 


  
Главный компонент, принимающий разные состояния
  ```jsx
            import React from 'react';

            import AddFormAuthorization from './AddFormAuthorization';
            import HelloUser from './HelloUser';



            export default function Logo(props) {
                const {nameUser="Оля", isAutorized } = props;
                
                return (
                    <div >
                            {isAutorized 
                                ? <HelloUser name={nameUser} />
                                :  <AddFormAuthorization />
                            }
                    </div>
                );
            }
```


8. В чём преимущества использования препроцессоров? Какой ещё есть способ использовать переменные, кроме $ в препроцессорах?
Можно задавать переменные, миксины, использовать математические операции, вложенность классов, амперсанд, чтобы не повторяться в написании классов.
