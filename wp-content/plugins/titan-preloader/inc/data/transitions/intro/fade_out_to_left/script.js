'use strict';

gsap.registerEffect({
    name: 'titanIntro',
    effect: (targets) => {
        const tl = gsap.timeline();

        tl.to(targets, {
            autoAlpha: 0,
            xPercent: -50,
            duration: 1,
            ease: 'power4.in',
        });

        return tl;
    },
    extendTimeline: true,
});
