import React from 'react';
import mainStyles from './app-main.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { data } from '../../utils/data';

class AppMain extends React.Component {
    render() {
        return (
            <main className={mainStyles.content}>
                <h1 className='text text_type_main-large mt-10 mb-5 pl-5'>Соберите бургер</h1>
                <section className={`${mainStyles.burger} pl-5 pr-5`}>
                    <div className={mainStyles.wrapper}>
                        <BurgerIngredients/>
                    </div>
                    <div className={mainStyles.wrapper}>
                        <BurgerConstructor ingredientLIst={data}/>
                    </div>
                </section>
            </main>
        )
    }
}

export default AppMain;