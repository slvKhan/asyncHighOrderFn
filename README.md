<a href="https://codeclimate.com/github/slvKhan/asyncHighOrderFn/maintainability"><img src="https://api.codeclimate.com/v1/badges/4463842717293640e32a/maintainability" /></a>
<a href="https://codeclimate.com/github/slvKhan/asyncHighOrderFn/test_coverage"><img src="https://api.codeclimate.com/v1/badges/4463842717293640e32a/test_coverage" /></a>
[![Build Status](https://travis-ci.org/slvKhan/asyncHighOrderFn.svg?branch=master)](https://travis-ci.org/slvKhan/asyncHighOrderFn)<br>
Тестовый реп для CI
<h2>Babel</h2>
npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env

Пакет @babel/core содержит код, который выполняет всю работу по трансляции, но не содержит внутри себя правил преобразования. Правила описаны в отдельных пакетах, называемых плагинами (например, babel-plugin-transform-constant-string).
@babel/preset-env. Пресет - это группа плагинов, которую можно подключить к Babel целиком. preset-env - основной пресет поддерживаемый командой Babel, который содержит внутри себя плагины, реализующие стандартизированные возможности js.
Пакет @babel/cli обеспечивает возможность работы с бабелем через терминал. Предоставляет командную утилиту babel. Ниже рассматривается ее использование.
Пакет @babel/node - еще одна утилита командной строки: babel-node. Подробнее далее.

Babel полагается на наличие файла babel.config.js в корне проекта. Именно через него он узнает, как нужно транслировать код.

Этот файл нужно создать самостоятельно. Если вы забудете добавить туда плагин или пресет, то на выходе Babel отдаст тот же код, что был и на входе.

<pre>
module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
        firefox: '60',
        chrome: '67',
        safari: '11.1',
      },
    }],
  ],
};
</pre>
