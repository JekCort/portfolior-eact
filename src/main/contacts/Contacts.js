import React from 'react';
import style from './Contacts.module.css'
const Contacts = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.contacts__wrapper}>
                <h2>Contacts</h2>
                <div>
                    <form className={style.contacts__form} action="">
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </form>
                    <button>Send</button>
                </div>

            </div>

        </div>
    );
};

export default Contacts;