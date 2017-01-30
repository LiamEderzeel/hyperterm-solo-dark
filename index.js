/*

 @@@@@@    @@@@@@   @@@        @@@@@@
@@@@@@@   @@@@@@@@  @@@       @@@@@@@@
!@@       @@!  @@@  @@!       @@!  @@@
!@!       !@!  @!@  !@!       !@!  @!@
!!@@!!    @!@  !@!  @!!       @!@  !@!
 !!@!!!   !@!  !!!  !!!       !@!  !!!
     !:!  !!:  !!!  !!:       !!:  !!!
    !:!   :!:  !:!   :!:      :!:  !:!
:::: ::   ::::: ::   :: ::::  ::::: ::
:: : :     : :  :   : :: : :   : :  :
--------------------------------------
         Hyperterm-Solo-Dark
--------------------------------------
*/

const backgroundColor = 'rgb(28, 28, 28)'
const foregroundColor = 'rgb( 180, 180, 180)'
const borderColor = 'rgba(255,255,255,.1)'
const cursorColor = 'rgba(255,255,255,.4)'


const colors = {
    black       : backgroundColor,
    red         : '#ed3535', // red
    green       : '#5bce5b', // green
    yellow      : '#f4d345', // yellow
    blue        : '#7aa6da', // blue
    magenta     : '#c397d8', // pink
    cyan        : '#75ccbb', // cyan
    white       : '#f1f1f0', // light gray
    lightBlack  : '#666666', // medium gray
    lightRed    : '#ed3535', // red
    lightGreen  : '#5bce5b', // green
    lightYellow : '#f4d345', // yellow
    lightBlue   : '#7aa6da', // blue
    lightMagenta: '#c397d8', // pink
    lightCyan   : '#75ccbb', // cyan
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
            // -webkit-font-smoothing: antialias;
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
