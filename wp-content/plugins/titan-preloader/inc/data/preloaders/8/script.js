'use strict';

(() => {
    let parent = document.querySelector('.gfx_preloader--text-inner');
    if (parent == null) return;
    parent.style.height = parent.firstElementChild.offsetHeight + 'px';
})();

// __PAGE_TRANSITION_START__

// runs when the page is unloaded
const titan_outro = (href) => {
    const tl = gsap.timeline({
        onComplete: fire_outro_complete,
        onCompleteParams: [href],
    });

    tl.set('.gfx_preloader--text-inner', {
        y: 0,
    });

    tl.set('.gfx_preloader--progress-actual', {
        x: 0,
    });

    tl.set('.gfx_preloader--percent', {
        innerText: '0%',
    });

    tl.titanOutro('.gfx_preloader');
};

// __PAGE_TRANSITION_END__

// runs when the page is loaded
const titan_intro = () => {
    const tl = gsap.timeline({
        defaults: {
            duration: 0.75,
        },
    });

    let parent = document.querySelector('.gfx_preloader--text-inner');
    if (parent == null) return;
    let percent = 100 / parent.children.length;
    let percent_value = percent;

    Array.from(parent.children).forEach((child, index) => {
        tl.to('.gfx_preloader--progress-actual', {
            x: percent_value + '%',
        });

        tl.to(
            '.gfx_preloader--percent',
            {
                innerText: percent_value + '%',
                snap: 'innerText',
            },
            '<'
        );

        tl.to(
            '.gfx_preloader--text-inner',
            {
                y: -1 * parent.offsetHeight * index,
                ease: 'back.out(1.7)',
            },
            '<'
        );

        percent_value += percent;
    });

    tl.titanIntro('.gfx_preloader');
};

window.addEventListener('load', () => {
    const event = new CustomEvent('titan-intro-complete');
    window.dispatchEvent(event);
});
