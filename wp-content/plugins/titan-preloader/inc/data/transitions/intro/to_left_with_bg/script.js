'use strict';

gsap.registerEffect({
    name: 'titanIntro',
    effect: (targets, config) => {
        let bg = document.querySelector('.gfx_preloader--bg-intro');

        const tl = gsap.timeline({
            onComplete: () => {
                if (bg == null) return;
                bg.remove();
            },
        });

        tl.to(targets, {
            xPercent: -100,
            duration: 1,
            ease: 'power4.in',
        });

        tl.to(
            bg,
            {
                xPercent: -100,
                duration: 1,
                delay: 0.2,
                ease: 'power4.inOut',
            },
            '<+=.3'
        );

        return tl;
    },
    extendTimeline: true,
});
