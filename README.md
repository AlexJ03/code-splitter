<h1 align="center">Code Splitter</h1>

<p align="center">
  <img src="https://img.shields.io/npm/v/code-splitter.svg" alt="Version">
  <img src="https://img.shields.io/badge/Node.js-v14.17.4-green.svg" alt="Node.js Version">
  <img src="https://img.shields.io/npm/l/code-splitter.svg" alt="License">
</p>

<br>

<h4 align="center">Split Code Effortlessly!</h4>

<h3 align="center">Code Splitter is a library for combining html and css modules in your web projects while following a component-based approach.<h1>

## ❯ Getting started
- [Installation](#installation)
- [Usage](#usage)
- [Details of **cs.config.js**](#details-of-csconfigjs)
- [Details of **CLI Commands**](#details-of-cli-commands)
- [Details of **Structure**](#details-of-structure)
- [Details of **Create Components**](#details-of-create-components)
- [Details of **cs.constructor.txt**](#details-of-csconstructortxt)
- [License](#license)

## ❯ <a id="installation">Installation</a>

### Initializing package.json:

```shell
npm init -y 
```

### Package installation (global installation is required):

```shell
npm i code-splitter
npm i -g code-splitter
```

## ❯ <a id="usage">Usage</a>

### To create a configuration file, use the command and answer the questions:

```shell
cs-init
```

### List of questions:

| Question                                                         | Default                     | Description                                                              |
|------------------------------------------------------------------|-----------------------------|--------------------------------------------------------------------------|
| <center>What is your entry point?</center>                       | <center>components</center> | <center>Creates a folder where your components will be located</center>  |
| <center>What is your output point?</center>                      | <center>dist</center>       | <center>Creates a folder where your final files will be located</center> |
| <center>What is your output HTML?</center>                       | <center>index</center>      | <center>Sets the name of the .html file, default index.html</center>     |
| <center>What is your output CSS? ( **Do not change!** )</center> | <center>style</center>      | <center>Sets the name of the .css file, default style.css</center>       |

### To create a structure, use the `cs-create` command:
```shell
cs-create
```

### To start the project, use the `cs-server` command:
```shell
cs-server
```

## ❯ <a id="details-of-csconfigjs">Details of *cs.config.js*</a>
- `base` - specifies the path to the root of the project.
- `entry` - the name of the working folder.
- `output` - special parameters for output data.
-  - `name` - the name of the output folder.
-   - `html` - special parameters for html output data.
-    -   - `name` - the name of the output html file.
- -   `css` - special parameters for css output data.
-  - -   `name` - the name of the output css file.

## ❯ <a id="details-of-cli-commands">Details of *cli commands*</a>

- `cs-init` - initializing the configuration file.
- `cs-create` - creates a project structure based on the configuration file.
- `cs-server` - starts the server.

## ❯ <a id="details-of-structure">Details of *structure*</a>

### Example structure:

| Directory/File         | Description                            |
|------------------------|----------------------------------------|
| **components**/        |                                        |
| ⚫ header/              | - HTML and CSS for the header component|
| ⚫ footer/              | - HTML and CSS for the footer component|
| **dist**/              |                                        |
| ⚫ index.html           | - Main HTML file for the build         |
| ⚫ style.css            | - Main CSS file for the build          |
| **global**/            |                                        |
| ⚫ footer.html          | - Global footer HTML file               |
| ⚫ global.css           | - Global CSS file                       |
| ⚫ header.html          | - Global header HTML file               |
| **cs.constructor.txt** | - Text file for cs.constructor          |

## ❯ <a id="details-of-create-components">Details of *create components*</a>

-  **You must create a folder inside your entry point (components), for example `components/about`**
- **Create two files inside it ('nameOfComponent'.css and 'nameOfComponent'.html), for example `components/about/about.html` and `components/about/about.css`**
- **Add your component to the constructor, for example `S::global --> H::header --> header --> about --> H::footer`**

## ❯ <a id="details-of-csconstructortxt">Details of *cs.constructor.txt*</a>

### **cs.constructor.txt** - this is a constructor file. It sets the structure of the page, for example:

```txt
S::global --> H::header --> header --> H::footer
```

#### **Explanation**

##### **Syntax**:

- `-->` - separator between connected components.
- `S::global` - connects the *global.css* file from the global storage:
- - Prefix **S** - means the extension of the plug-in file (in this case, the style file .css).
- - **::** - separator.
- - **global** - file name (extension is not required).
- `H::header`:
- - Prefix **H** - means the extension of the plug-in file (in this case, the style file .html).
- - **::** - separator.
- - **header** - file name (extension is not required).
- `header`:
- - It does not need a prefix, because the file is not in the global storage, but in the component folder.
- - Separator is needed if the file is in the global storage.
- - **header** - file name (extension is not required).
- `H::footer`:
- - Prefix **H** - means the extension of the plug-in file (in this case, the style file .html).
- - **::** - separator.
- - **footer** - file name (extension is not required).

##### **About the components**:

Command **S::global** - connects the file *global.css* from the global storage:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
}

*****.container {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
}
```

Command **H::header** - connects the file *header.html* from the global storage:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>CodeSplitter</title>
</head>
<body>
```

Command **header** - connects *header.html* and *header.css* files from the components/header folder:

*header.html*:

```html
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
```

*header.css*:

```css
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
```

Command **H::footer** - connects the file *footer.html* from the global storage:

*header.html*:

```html
</body>
</html>
```

## ❯ <a id="license">License</a>

**This package is distributed under the MIT License.**