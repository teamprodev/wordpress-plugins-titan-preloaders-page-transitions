'use strict';

gsap.registerEffect({
    name: 'titanOutro',
    effect: (targets) => {
        const tl = gsap.timeline();

        tl.set(targets, {
            xPercent: 0,
            yPercent: 100,
            autoAlpha: 1,
            overwrite: true,
        });

        tl.to('.gfx_preloader--circular-outro', {
            y: '0%',
            ease: Power4.easeInOut,
            duration: 2,
        });

        tl.to(
            '.gfx_preloader--circular-outro',
            {
                'border-top-left-radius': '0%',
                'border-top-right-radius': '0%',
                ease: Power4.easeInOut,
                duration: 1,
            },
            '<+=1'
        );

        tl.to(
            targets,
            {
                yPercent: 0,
                ease: Power3.easeInOut,
                duration: 1,
            },
            '.5'
        );

        return tl;
    },
    extendTimeline: true,
});
