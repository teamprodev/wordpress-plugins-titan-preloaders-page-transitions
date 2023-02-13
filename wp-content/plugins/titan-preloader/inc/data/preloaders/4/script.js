'use strict';

// __PAGE_TRANSITION_START__

const titan_outro = (href) => {
    const tl = gsap.timeline({
        onComplete: fire_outro_complete,
        onCompleteParams: [href],
    });

    tl.titanOutro('.gfx_preloader');
};

// __PAGE_TRANSITION_END__

const titan_intro = () => {
    const tl = gsap.timeline();
    tl.titanIntro('.gfx_preloader');
};

window.addEventListener('load', () => {
    const event = new CustomEvent('titan-intro-complete');
    window.dispatchEvent(event);
});
