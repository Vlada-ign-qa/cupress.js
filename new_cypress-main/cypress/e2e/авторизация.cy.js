describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio'); // зашла на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввела верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввела верный пароль
        cy.get('#loginButton').click(); // нажала кноаку "войти"
        cy.get('#messageHeader').should('be.visible'); // текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // есть текст атворизация прошла успешно
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка крестик видна
    })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio'); // зашла на сайт
        cy.get('#forgotEmailButton').click(); // нажала кнопку "забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввод почты 
        cy.get('#restoreEmailButton').click(); // нажала "отправить код" 
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // вижу крестик
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio'); // зашла на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввела верный логин
        cy.get('#pass').type('iLoveqastudio'); // ввела неверный пароль
        cy.get('#loginButton').click(); // нажала кнопку "войти"
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // вижу текст Такого логина или пароля нет
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // вижу крестик
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio'); // зашла на сайт
        cy.get('#mail').type('german@dolnikov1.ru'); // ввела неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввела верный пароль
        cy.get('#loginButton').click(); // нажала кноаку "войти"
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // вижу текст Такого логина или пароля нет
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // вижу крестик
    })

    it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio'); // зашла на сайт
        cy.get('#mail').type('germandolnikov1.ru'); // ввела неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввела верный пароль
        cy.get('#loginButton').click(); // нажала кноаку "войти"
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // вижу текст Нужно исправить проблему валидации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // вижу крестик
    })

    it('Приведение к нижнему регистру', function () {
        cy.visit('https://login.qa.studio'); // зашла на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввела верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввела верный пароль
        cy.get('#loginButton').click(); // нажала кнопку "войти"
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // вижу текст Нужно исправить проблему валидации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // вижу крестик
    })
})
