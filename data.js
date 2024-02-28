#!/usr/bin/env node
const data = {
    header__HTML: `
<header class="header">
    <div class="container">
        <div class="header__title-wrapper">
            <h1 class="header__title">CodeSplitter
                <svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 -960 960 960" width="44"><path d="m234-480-12-60q-12-5-22.5-10.5T178-564l-58 18-40-68 46-40q-2-13-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T222-820l12-60h80l12 60q12 5 22.5 10.5T370-796l58-18 40 68-46 40q2 13 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T326-540l-12 60h-80Zm40-120q33 0 56.5-23.5T354-680q0-33-23.5-56.5T274-760q-33 0-56.5 23.5T194-680q0 33 23.5 56.5T274-600ZM592-40l-18-84q-17-6-31.5-14.5T514-158l-80 26-56-96 64-56q-2-18-2-36t2-36l-64-56 56-96 80 26q14-11 28.5-19.5T574-516l18-84h112l18 84q17 6 31.5 14.5T782-482l80-26 56 96-64 56q2 18 2 36t-2 36l64 56-56 96-80-26q-14 11-28.5 19.5T722-124l-18 84H592Zm56-160q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 0 0"
                        to="360 0 0"
                        dur="10s"
                        repeatCount="indefinite"
                    />
                </svg>
            </h1>
        </div>
    </div>
</header>
    `,
    header__CSS: `
.header {
    height: 100vh;
    max-width: 100%;
    background-image: linear-gradient(to right bottom, #FAD02E 0%, #FAD02E 33%, #FF6B6B 33%, #FF6B6B 66%, #2E8B57 66%, #2E8B57 100%);
}

.header__title-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header__title {
    font-size: 4rem;
    text-align: center;
    background: linear-gradient(to bottom, #f2a7c3, #c3e7e5);
    padding: 1rem 3rem;
    border-radius: 15px;
    color: #000;
    cursor: pointer;
    transition-property: letter-spacing, opacity;
    transition-duration: 300ms;
}

.header__title:hover {
    letter-spacing: 3px;
    opacity: 0.9;
}
    `,
    global__header__HTML: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>CodeSplitter</title>
</head>
<body>
    `,
    global__footer__HTML: `
</body>
</html>
    `,
    global__CSS: `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
}
    `,
    html__constructor: "S::global --> H::header --> header --> H::footer",
    packagejson: `
{
  "name": "code-splitter-build",
  "version": "1.0.0",
  "description": "",
  "main": "cs.config.js",
  "scripts": {},
  "author": "",
  "license": "ISC",
  "dependencies": {
    "browser-sync": "^2.29.3",
    "chalk": "^4.1.2",
    "express": "^4.18.2"
  }
}

    `,
    main__HTML: `   
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>CodeSplitter</title>
</head>
<body>
<header class="header">
    <div class="container">
        <div class="header__title-wrapper">
            <h1 class="header__title">CodeSplitter
                <svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 -960 960 960" width="44"><path d="m234-480-12-60q-12-5-22.5-10.5T178-564l-58 18-40-68 46-40q-2-13-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T222-820l12-60h80l12 60q12 5 22.5 10.5T370-796l58-18 40 68-46 40q2 13 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T326-540l-12 60h-80Zm40-120q33 0 56.5-23.5T354-680q0-33-23.5-56.5T274-760q-33 0-56.5 23.5T194-680q0 33 23.5 56.5T274-600ZM592-40l-18-84q-17-6-31.5-14.5T514-158l-80 26-56-96 64-56q-2-18-2-36t2-36l-64-56 56-96 80 26q14-11 28.5-19.5T574-516l18-84h112l18 84q17 6 31.5 14.5T782-482l80-26 56 96-64 56q2 18 2 36t-2 36l64 56-56 96-80-26q-14 11-28.5 19.5T722-124l-18 84H592Zm56-160q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 0 0"
                        to="360 0 0"
                        dur="10s"
                        repeatCount="indefinite"
                    />
                </svg>
            </h1>
        </div>
    </div>
</header>
</body>
</html>
`,
    main__CSS: `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
}

.header {
    height: 100vh;
    max-width: 100%;
    background-image: linear-gradient(to right bottom, #FAD02E 0%, #FAD02E 33%, #FF6B6B 33%, #FF6B6B 66%, #2E8B57 66%, #2E8B57 100%);
}

.header__title-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header__title {
    font-size: 4rem;
    text-align: center;
    background: linear-gradient(to bottom, #f2a7c3, #c3e7e5);
    padding: 1rem 3rem;
    border-radius: 15px;
    color: #000;
    cursor: pointer;
    transition-property: letter-spacing, opacity;
    transition-duration: 300ms;
}

.header__title:hover {
    letter-spacing: 3px;
    opacity: 0.9;
}
`,
    prompts: [
        {
            initial: "components",
            type: 'input',
            name: 'entry',
            message: 'What is your entry point?'
        },
        {
            initial: "dist",
            type: 'input',
            name: 'outputName',
            message: 'What is your output point?'
        },
        {
            initial: "index",
            type: 'input',
            name: 'htmlName',
            message: 'What is your output HTML?'
        }
    ]
};

module.exports = data;
