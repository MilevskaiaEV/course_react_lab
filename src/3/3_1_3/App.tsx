// 3_1_3 Refactor the imperative solution without React
/*
    В проекте приведена форма, реализованная на чистом JavaScript.

    Эта форма переключается между двумя режимами: в режиме редактирования вы видите вводимые данные, а в режиме просмотра - только результат. Метка кнопки меняется между "Редактировать" и "Сохранить" в зависимости от того, в каком режиме вы находитесь. Когда вы изменяете вводимые данные, приветственное сообщение внизу обновляется в режиме реального времени.

    Представьте, что React не существует. Можете ли вы переделать код в index.js таким образом, чтобы сделать логику менее хрупкой и более похожей на версию React? Как бы это выглядело, если бы состояние было явным, как в React?
*/

import React, { useEffect } from 'react';

export default function EditProfile() {
    useEffect(() => {
        let isEditing = false;
        let firstName = 'Jane';
        let lastName = 'Jacobs';

        const container = document.getElementById('root');
        if (!container) return;

        function updateGreeting() {
            const greeting = document.querySelector('p i');
            if (greeting) {
                greeting.textContent = `Привет, ${firstName} ${lastName}!`;
            }
        }

        function render() {
            if (isEditing) {
                container.innerHTML = `
                    <form id="profileForm">
                        <label>
                            First name: 
                            <input id="firstNameInput" value="${firstName}" />
                        </label>
                        <br />
                        <label>
                            Last name: 
                            <input id="lastNameInput" value="${lastName}" />
                        </label>
                        <br />
                        <button type="submit">Сохранить</button>
                        <p><i>Привет, ${firstName} ${lastName}!</i></p>
                    </form>
                `;

                const form = document.getElementById('profileForm');
                const firstNameInput = document.getElementById('firstNameInput') as HTMLInputElement;
                const lastNameInput = document.getElementById('lastNameInput') as HTMLInputElement;

                const handleFirstNameChange = (e: Event) => {
                    firstName = (e.target as HTMLInputElement).value;
                    updateGreeting();
                };

                const handleLastNameChange = (e: Event) => {
                    lastName = (e.target as HTMLInputElement).value;
                    updateGreeting();
                };

                firstNameInput?.addEventListener('input', handleFirstNameChange);
                lastNameInput?.addEventListener('input', handleLastNameChange);

                form?.addEventListener('submit', (e) => {
                    e.preventDefault();
                    isEditing = false;
                    render();
                });
            } else {
                container.innerHTML = `
                    <form>
                        <label>First name: <b>${firstName}</b></label>
                        <br />
                        <label>Last name: <b>${lastName}</b></label>
                        <br />
                        <button type="button" id="editBtn">Редактировать</button>
                        <p><i>Привет, ${firstName} ${lastName}!</i></p>
                    </form>
                `;

                const editBtn = document.getElementById('editBtn');
                editBtn?.addEventListener('click', () => {
                    isEditing = true;
                    render();
                });
            }
        }

        render();
    }, []);

    return <div id="root"></div>;
}