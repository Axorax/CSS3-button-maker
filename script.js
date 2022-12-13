const tab = '\xa0\xa0\xa0\xa0';
const btn = document.querySelector('.preview-btn');
const preview = document.getElementById('preview');
const firstStyle = document.querySelector('#first-style');
const secondStyle = document.querySelector('#second-style');
const thirdStyle = document.querySelector('#third-style');
const fourthStyle = document.querySelector('#fourth-style');
const borderOnOff = document.querySelector('#border-onoff');
const errorPopup = document.querySelector('.error-popup');
const errorText = document.querySelector('#error-text');
const controls = document.querySelector('.controls');
const templatesLoaderDiv = document.querySelector('.templates-loader-div');
const devTools = document.querySelector('.dev-tools');
const firstRow = document.querySelector('#first-row');
const thirdRow = document.querySelector('#third-row');
const hoverCSSCheckbox = document.querySelector('#hover-css-enable');
const sidePopupText = document.querySelector('#side-popup-text');
const sidePopupHeadline = document.querySelector('#side-popup-headline');
const sidePopupImg = document.querySelector('#side-popup-img');
const sidePopupDiv = document.querySelector('.side-popup');

var dtSEIFS = true;
var dtiniton = true;

const inputTextSize = document.querySelector('#btn-text-size');
const inputTextWeight = document.querySelector('#btn-text-weight');
const inputTextColor = document.querySelector('#btn-text-color');
const inputBG = document.querySelector('#background');
const inputPadding = document.querySelector('#padding');
const inputBorderRadius = document.querySelector('#border-radius');
const inputCursor = document.querySelector('#cursor');
const inputWriteCSS = document.querySelector('#write-css');
const inputWriteCSSHover = document.querySelector('#write-css-hover');

const outputHTML = document.querySelector('#output-html');
const outputBorderWidth = document.querySelector('#output-css-border-width');
const outputBorder = document.querySelector('#output-css-border');
const outputBorderRadius = document.querySelector('#output-css-border-radius');
const outputFontFamily = document.querySelector('#output-css-font-family');
const outputImport = document.querySelector('#output-css-import');
const outputTextSize = document.querySelector('#output-css-text-size');
const outputClassName = document.querySelector('#output-css-classname');
const outputHTMLClass = document.querySelector('#output-html-class');
const outputPadding = document.querySelector('#output-css-padding');
const outputBg = document.querySelector('#output-css-bg');
const outputTextColor = document.querySelector('#output-css-text-color');
const outputCursor = document.querySelector('#ot-c');
const outputOwnCSS = document.querySelector('#ot-ocss');
const outputOwnHoverCSS = document.querySelector('#ot-ohcss');
const outputIdentifier = document.querySelector('#output-css-identifier');
const outputHoverCSS = document.querySelector('.output-hover-css');
const outputHoverCSSIdentifier = document.querySelector('#output-hover-css-identifier');
const outputHoverCSSClassName = document.querySelector('#output-hover-css-classname');
const outputCursorHover = document.querySelector('#ot-hc');

function fixedPreview() {
    preview.classList.toggle('fixed-preview');
    if (preview.classList.contains('fixed-preview')) {
        outputHTML.style.marginTop = '2rem';
    } else {
        outputHTML.style.marginTop = '1rem';
    }
}

function containsNumber(obj) {
    return /\d/.test(obj);
}

function btnText() {

    let text = document.querySelector('#btn-text').value;

    document.querySelector('#output-html-text').innerText = text;

    btn.innerText = text;

    return false
}

function btnTextSize() {

    let size = document.querySelector('#btn-text-size').value;

    if (size == '') {
        outputTextSize.innerText = ``;
        btn.style.fontSize = '';
    } else if (!containsNumber(size)) {
        errorPopupShow('Invalid size!');
    } else {
        btn.style.fontSize = size;
        outputTextSize.innerText = `${tab}font-size: ${size};\n`;
    }

    return false

}

function btnClassName() {

    let className = document.querySelector('#btn-classname').value;

    if (className.indexOf(' ') >= 0){
        errorPopupShow('Class cannot contain spaces!');
    } else {
        if (className == '') {
            if (outputIdentifier.innerText == '#') {
                outputHTMLClass.innerText = 'axobtn';
            } else {
                outputClassName.innerText = 'axobtn';
                outputHoverCSSClassName.innerText = 'axobtn';
                outputHTMLClass.innerText = 'axobtn';
            }
        } else {
            if (outputIdentifier.innerText == '#') {
                outputHTMLClass.innerText = className;
            } else {
                outputClassName.innerText = className;
                outputHoverCSSClassName.innerText = className;
                outputHTMLClass.innerText = className;
            }
        }
    }

    return false

}

function addId() {

    let id = document.querySelector('#add-id').value;

    let check = document.querySelector('#use-id');

    if (id.indexOf(' ') >= 0){
        errorPopupShow('Id cannot contain spaces!');
    } else if (id == '') {
        document.querySelector('#output-html-id').innerText = '';
    } else {
        document.querySelector('#output-html-id').innerText = ' id="' + id + '"';
    }

    if (check.checked) {
        outputClassName.innerText = id;
        outputHoverCSSClassName.innerText = id;
    }

    return false

}

function useId() {

    let id = document.querySelector('#add-id').value;
    
    let check = document.querySelector('#use-id');

    let className = document.querySelector('#btn-classname').value;

    if (check.checked) {
        if (id == '') {
            errorPopupShow('ID is required!');
            check.checked = false;
        } else {
            outputIdentifier.innerText = '#';
            outputClassName.innerText = id;
            outputHoverCSSIdentifier.innerText = '#';
            outputHoverCSSClassName.innerText = id;
        }
    } else {
        outputIdentifier.innerText = '.';
        outputHoverCSSIdentifier.innerText = '.';
        if (className == '') {
            outputClassName.innerText = 'axobtn';
            outputHoverCSSClassName.innerText = 'axobtn';
        } else {
            outputClassName.innerText = className;
            outputHoverCSSClassName.innerText = className;
        }
    }

}

function btnTextWeight() {

    let weight = document.querySelector('#btn-text-weight').value;

    if (weight != 100 && weight != 200 && weight != 300 && weight != 400 && weight != 500 && weight != 600 && weight != 700 && weight != 800 && weight != 900 && weight != 'normal' && weight != 'bold' && weight != 'lighter' && weight != 'bolder') {
        errorPopupShow('Invalid Property!');
    } else {
        document.querySelector('#output-css-text-weight').innerText = `${tab}font-weight: ${weight};\n`;
        btn.style.fontWeight = weight;
    }

    return false
}

function btnTextColor() {

    let colorPicker = document.querySelector('#btn-text-color-picker').value;
    let color = document.querySelector('#btn-text-color').value;
    let colorInput = document.querySelector('#btn-text-color');

    if (color == '') {
        btn.style.color = colorPicker;
        colorInput.value = colorPicker;
        outputTextColor.innerText = `${tab}color: ${colorPicker};\n`;
    } else {
        btn.style.color = color;
        outputTextColor.innerText = `${tab}color: ${color};\n`;
    }

    return false

}

function btnTextItalic() {
    
    if (btn.style.fontStyle == 'italic') {
        btn.style.fontStyle = 'normal';
        document.querySelector('#output-css-text-style').innerText = ``;
    } else {
        btn.style.fontStyle = 'italic';
        document.querySelector('#output-css-text-style').innerText = `${tab}font-style: italic;\n`;
    }

}

function importFont() {

    let font = document.querySelector('#import-font').value;

    if (font.indexOf('@import') >= 0){
        if (font == '') {
            outputImport.innerText = '';
        } else {
            firstStyle.innerText = font;
            outputImport.innerText = font + '\n\n';
        }
        firstStyle.innerText = font;
    } else {
        errorPopupShow('Wrong format!');
    }

    return false

}

function fontFamily() {

    let font = document.querySelector('#font-family').value;

    if (font == '') {
        outputFontFamily.innerText = ``
    } else {
        btn.style.fontFamily = font;
        outputFontFamily.innerText = `${tab}font-family: ${font};\n`;
    }

    return false

}

function borderRadius() {

    let radius = document.querySelector('#border-radius').value;

    if (radius == '') {
        outputBorderRadius.innerText = ``;
        btn.style.borderRadius = '';
    } else {
        btn.style.borderRadius = radius;
        outputBorderRadius.innerText = `${tab}border-radius: ${radius};\n`
    }

    return false

}

function borderWidth() {

    let width = document.querySelector('#border-width').value;

    if (width == '') {
        outputBorderWidth.innerText = ``
        btn.style.borderWidth = '';
    } else {
        btn.style.borderWidth = width;
        outputBorderWidth.innerText = `${tab}border-width: ${width};\n`
    }

    return false
}

function btnPadding() {
    let padding = document.querySelector('#padding').value;

    if (padding == '') {
        outputPadding.innerText = ``
        btn.style.padding = '';
    } else {
        btn.style.padding = padding;
        outputPadding.innerText = `${tab}padding: ${padding};\n`
    }

    return false
}

function btnbg() {

    let bg = document.querySelector('#background').value;

    if (bg == '') {
        outputBg.innerText = ``
        btn.style.background = '';
    } else {
        btn.style.background = bg;
        outputBg.innerText = `${tab}background: ${bg};\n`
    }

    return false
}

function bgcolorPicker() {

    let bg = document.querySelector('#background');

    let colorPicker = document.querySelector('#bg-color-picker').value;

    btn.style.background = colorPicker;
    outputBg.innerText = `${tab}background: ${colorPicker};\n`;
    bg.value = colorPicker;

    return false
}

function btnCursor() {
    let a = document.querySelector('#cursor').value;

    if (a == '') {
        btn.style.cursor = 'auto';
        outputCursor.innerText = ``;
    } else {
        btn.style.cursor = a;
        outputCursor.innerText = `${tab}cursor: ${a};\n`;
    }

    return false
}

function btnCursorHover() {
    let a = document.querySelector('#cursor-hover').value;

    if (a == '') {
        fourthStyle.innerText += `.preview-btn:hover{cursor: auto;}`;
        outputCursorHover.innerText = ``;
    } else {
        fourthStyle.innerText += `.preview-btn:hover{cursor:${a};}`;
        outputCursorHover.innerText = `${tab}cursor: ${a};\n`;
    }

    return false
}

function writeCSS() {

    let css = inputWriteCSS.value;

    // if (css.indexOf(':') == -1) {
    //     errorPopupShow('Invalid CSS!');
    // } else {
        secondStyle.innerText = '.preview-btn{' + css + '}';
        outputOwnCSS.innerText = `${tab}${css}`;
    // }

    return false

}

function writeCSSHover() {
    let css = inputWriteCSSHover.value;

    if (hoverCSSCheckbox.checked == false) {
        errorPopupShow('Hover State is disabled!')
    } else {
        thirdStyle.innerText = '.preview-btn:hover{' + css + '}';
        outputOwnHoverCSS.innerText = `${tab}${css}`;
    }

    return false
}

function hoverCSSEnable() {
    x = document.querySelector('#controls-hover-state-wrapper').querySelectorAll('input[type=text]');
    y = document.querySelector('#controls-hover-state-wrapper').querySelectorAll('textarea');

    if (outputHoverCSS.style.display == 'block') {
        outputHoverCSS.style.display = 'none';
    } else {
        outputHoverCSS.style.display = 'block';
        for (var i = 0; i < y.length; i++) {
            if (!y[i].value == '') {
                sidePopup('Unsaved Changes!', 'We detected some unsaved changes!')
            }
        }
        for (var i = 0; i < x.length; i++) {
            if (!x[i].value == '') {
                sidePopup('Unsaved Changes!', 'We detected some unsaved changes!')
            }
        }
    }

    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove('dtitd');
    }
}

function noScroll() {
    if (controls.style.height == 'max-content') {
        controls.style.height = '50vh';
    } else {
        controls.style.height = 'max-content';
    }
}

function templateGradient(t = 700) {
    templateLoader();
    setTimeout(() => {
        let x = 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)';
        let y = '#fff';
        let z = '17px';
        let a = '8px 15px';
        let b = '5px'
        btn.style.color = y
        btn.style.background = x;
        btn.style.fontSize = z;
        btn.style.padding = a;
        btn.style.borderRadius = b;
        inputBG.value = x;
        inputTextColor.value = y;
        inputTextSize.value = z;
        inputPadding.value = a;
        inputBorderRadius.value = b;
        outputBg.innerText = `${tab}background: ${x};\n`
        outputTextColor.innerText = `${tab}color: ${y};\n`
        outputTextSize.innerText = `${tab}font-size: ${z};\n`
        outputPadding.innerText = `${tab}padding: ${a};\n`
        outputBorderRadius.innerText = `${tab}border-radius: ${b};\n`
        borderOnOff.checked = true;
        borderToggle();
    }, t)
}

function templateLoader(time = 700) {
    templatesLoaderDiv.style.display = 'block';
    setTimeout(() => {
        templatesLoaderDiv.style.display = 'none';
    }, time);
}

function borderToggle() {

    let width = document.querySelector('#border-width').value;

    if (borderOnOff.checked) {
        btn.style.border = 'none';
        outputBorder.innerText = `${tab}border: none;\n`;
    } else {
        btn.style.border = '';
        outputBorder.innerText = ``;
        btn.style.borderWidth = width;
    }

}

function copyCSS(a) {
    var range = document.createRange();
    range.selectNode(document.querySelector(a));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    document.querySelector('#copy-btn-css-img').src = 'done.svg';
    setTimeout(() => {
        document.querySelector('#copy-btn-css-img').src = 'copy.svg';
    }, 2500);
}

function errorPopupShow(text) {
    errorPopup.style.display = 'flex';
    errorText.innerText = text;
    setTimeout(() => {
        errorPopup.style.display = 'none';
    }, 3000);
}

function errorClose() {
    errorPopup.style.display = 'none';
}

function sidePopup(headline, text, img = 'alert.svg') {
    sidePopupDiv.classList.add('side-popup-show')
    sidePopupText.innerText = text;
    sidePopupHeadline.innerText = headline;
    sidePopupImg.src = img;
    setTimeout(() => {
        sidePopupDiv.classList.remove('side-popup-show')
    }, 5000);
}

function sidePopupClose() {
    sidePopupDiv.classList.remove('side-popup-show')
}

if (window.location.href.indexOf("?devtools=true") > -1) {
    devtoolsInit();
}

function devToolsViaBtn() {
    if (!dtiniton) {
        devTools.style.display = 'none';
        dtiniton = true;
    } else {
        devtoolsInit();
        dtiniton = false;
    }
}

function devtoolsInit() {
    devTools.style.display = 'block';
    document.querySelector('#dt-tif').innerText = document.body.querySelectorAll('input').length;
    document.querySelector('#dt-tift').innerText = document.body.querySelectorAll('input[type=text]').length;
    const btnChangeObserver = (sel, opt, cb) => {
        const Obs = new MutationObserver((m) => [...m].forEach(cb));
        document.querySelectorAll(sel).forEach(el => Obs.observe(el, opt));
      };
    
    btnChangeObserver(".preview-btn", {
        attributesList: ["style"],
        attributeOldValue: true,
      }, (data) => {
        document.querySelector('#dt-lbc').innerText = data.target.attributes.style.nodeValue;
    });
}

function dtSEIF() {
    if (devTools.style.display == 'block') {
        if (!dtSEIFS) {
            x = document.body.querySelectorAll('input[type=text]');
            y = document.body.querySelectorAll('textarea');
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove('dtitd');
            } for (var i = 0; i < y.length; i++) {
                y[i].classList.remove('dtitd');
            }
            dtSEIFS = true;
        } else {
            x = document.body.querySelectorAll('input[type=text]');
            y = document.body.querySelectorAll('textarea');
            for (var i = 0; i < x.length; i++) {
                x[i].classList.add('dtitd');
            } for (var i = 0; i < y.length; i++) {
                y[i].classList.add('dtitd');
            }
            dtSEIFS = false;
        }
    }
}

function dtHC() {
    if (devTools.style.display == 'block') {
        if (controls.style.display == 'none') {
            controls.style.display = 'block';
        } else {
            controls.style.display = 'none';
        }
    }
}

function dthpc() {
    if (devTools.style.display == 'block') {
        if (firstRow.style.display == 'none') {
            firstRow.style.display = '';
        } else {
            firstRow.style.display = 'none';
        }
    }
}

function dthst() {
    if (devTools.style.display == 'block') {
        if (thirdRow.style.display == 'none') {
            thirdRow.style.display = '';
            controls.style.marginBottom = '';
        } else {
            thirdRow.style.display = 'none';
            controls.style.marginBottom = '1rem';
        }
    }
}