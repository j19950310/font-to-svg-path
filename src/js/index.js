import P5 from 'p5';
import { initOpentype } from '@/js/opentype';
import FontPath from '@/js/ClassPath';
const app = document.querySelector('#app');

new P5(function(p) {
    let fontGenerator;
    let fontPath;

    p.preload = async () => {
        fontGenerator = await initOpentype()
        const path = fontGenerator.getPath('龍大永鬱龘', 100, 500, 100);
        fontPath = new FontPath(path.commands, p)
    }

    p.setup = ()=> {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        p.background(100);
        p.noFill();
    }

    p.draw = ()=> {
        p.background(100);
        if(fontPath) {
            fontPath.update();
        }
    }

    p.windowResized = ()=> {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }

}, app)

