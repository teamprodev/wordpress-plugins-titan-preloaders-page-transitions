'use strict';

gsap.registerEffect({
    name: 'titanIntro',
    effect: (targets, config) => {
        const tl = gsap.timeline();

        tl.to(targets, {
            xPercent: -100,
            duration: 1,
            ease: 'power4.in',
        });

        return tl;
    },
    extendTimeline: true,
});
