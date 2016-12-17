const backgroundColor = 'rgb(28, 28, 28)'
const foregroundColor = rgba(255,255,255, 0.9)'
const borderColor = 'rgba(255,255,255,.1)'
const cursorColor = 'rgba(255,255,255,.4)'

const colors = {
    black       : backgroundColor,
    red         : '#dd6964', // red
    green       : '#8ee386', // green
    yellow      : '#ffd080', // yellow
    blue        : '#4eacff', // blue
    magenta     : '#fa9aff', // pink
    cyan        : '#88afff', // cyan
    white       : '#f1f1f0', // light gray
    lightBlack  : '#666666', // medium gray
    lightRed    : '#f58783', // red
    lightGreen  : '#aafba2', // green
    lightYellow : '#ffe89c', // yellow
    lightBlue   : '#6ec5f9', // blue
    lightMagenta: '#ffb2ff', // pink
    lightCyan   : '#56b6c2', // cyan
    colorCubes  : '#ffffff', // white
    grayscale   : foregroundColor
}

exports.decorateConfig = (config) => {
    return Object.assign({}, config, {
        foregroundColor,
        backgroundColor,
        borderColor,
        cursorColor,
        colors,
        termCSS: `
        ${config.termCSS || ''}
        x-screen {
            -webkit-font-smoothing: antialias;
        }
        `,
        css: `
        ${config.css || ''}
		body{
			border: none !important;
		}
        .hyper_main{
            border: none;
            // background-color: rgb(23, 28, 33);
        }
        .header_header {
            background: transparent!important;
            border-bottom: 0px solid rgba(255,255,255,.5) !important;
        }
        .tabs_borderShim {
            border: 0;
        }
        .tab_tab {
            border: 0;
        }
        .tab_active::before {
            // border-bottom: 2px solid rgba(255,255,255,.5);
        }
        .tab_hasActivity {
            color: #42a1e4;
        }
        .tab_hasActivity:hover {
            color: #96d4e4;
        }
        `,
        padding: '0px 5px',
    });
}
