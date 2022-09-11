import React from 'react';
import BurgerConstructorStyles from './burger-constructor.module.css';
import IngredientCard from './ingredient-card/ingredient-card';
import { CurrencyIcon, ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { data } from '../../utils/data';

const BurgerConstructor = ({ingredientLIst}) => {
    return (
        <div className={BurgerConstructorStyles.constructor}>
            <div className='pl-4'>
                <ConstructorElement
                    type='top'
                    isLocked
                    text='Краторная булка N-200i (верх)'
                    price={200}
                    thumbnail={data[0].image}
                />
            </div>
            <div className={BurgerConstructorStyles.ingredientCardList}>
                {ingredientLIst.map((ingredient) => (
                    <IngredientCard 
                        text={ingredient.name}
                        price={ingredient.price}
                        img={ingredient.image}
                    />
                ))}          
            </div>
            
            <div className='pl-4'>
                <ConstructorElement
                    type='bottom'
                    isLocked
                    text='Краторная булка N-200i (низ)'
                    price={200}
                    thumbnail={data[0].image}
                />
            </div>

            <div className={`${BurgerConstructorStyles.order} mt-10 pr-4`}>
                <div className={`${BurgerConstructorStyles.price} mr-10`}>
                    <p className='text text_type_digits-medium'>610</p>
                    <CurrencyIcon type='primary'/>
                </div>
                <Button type='primary' size='large'>
                    Оформить заказ
                </Button>
            </div>
        </div>
    )
}

export default BurgerConstructor;