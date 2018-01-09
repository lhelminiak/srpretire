(function ($) {
    'use strict';
    
    $('#slidea').slidea({
        autoplay: true,
        layout: "fluid",
        layoutSettings: {
            anchor: 'center',
            size: 'fluid'
        },
        contentScaling: {
            enabled: true, // Default: false
            mode: 'responsive', // Modes: responsive, native
            factor: {
                xs: 1,
                sm: 1,
                md: 1,
                lg: 1,
                xlg: 1
            }
        },
        overlap: 0,
        progress: {
            enabled: false
        },
        controls: {
            enabled: true,
            thumbnail: false
        },
        canvas_parallax: true,
        content_parallax: true,
        content_scaling: true,
        slide: {
            '#default_slidea_slide_one': {
                background: {
                    0: {
                        duration: 5000,
                    }
                },               
                object: {
                    '#title-one': {
                        start: 1000,
                        initial: "y 30%, opacity 0, duration 1000",
                        out: "y 30%, opacity 0, duration 1000"
                    },
                    '#description-one': {
                        start: 1500,
                        initial: "y -30%, opacity 0, duration 1000",
                        out: "y -30%, opacity 0, duration 1000"
                    },
                    '#btn-one': {
                        start: 2000,
                        initial: "y 30%, opacity 0, duration 1000",
                        out: "y 30%, opacity 0, duration 1000"
                    }
                }
            },
            '#default_slidea_slide_two': {
                background: {
                    0: {
                        duration: 5000
                    }
                },
                object: {
                    '#title-two': {
                        start: 1000,
                        initial: "opacity 0, y -50, easing easeOutQuad, duration 1000",
                        out: "opacity 0, y -50, easing easeOutQuad, duration 1000"
                    },
                    '#description-two': {
                        start: 1500,
                        initial: 'opacity 0, y 100%',
                        out: 'opacity 0, y 100%'
                    },
                    '#btn-two': {
                        start: 2000,
                        initial: 'opacity 0, x -50',
                        out: 'opacity 0, x -50'
                    }
                }
            },
            '#default_slidea_slide_three': {
                background: {
                    0: {
                        duration: 5000
                    }
                },
                object: {
                    '#title-three': {
                        start: 1000,
                        initial: "opacity 0, y -50, easing easeOutQuad, duration 1000",
                        out: "opacity 0, y -50, easing easeOutQuad, duration 1000"
                    },
                    '#description-three': {
                        start: 1500,
                        initial: 'opacity 0, y 100%',
                        out: 'opacity 0, y 100%'
                    },
                    '#btn-three': {
                        start: 2000,
                        initial: 'opacity 0, x -50',
                        out: 'opacity 0, x -50'
                    }
                }
            },
            '#default_slidea_slide_four': {
                background: {
                    0: {
                        duration: 5000
                    }
                },
                object: {
                    '#title-four': {
                        start: 1000,
                        initial: "opacity 0, y -50, easing easeOutQuad, duration 1000",
                        out: "opacity 0, y -50, easing easeOutQuad, duration 1000"
                    },
                    '#description-four': {
                        start: 1500,
                        initial: 'opacity 0, y 100%',
                        out: 'opacity 0, y 100%'
                    },
                    '#btn-four': {
                        start: 2000,
                        initial: 'opacity 0, x -50',
                        out: 'opacity 0, x -50'
                    }
                }
            }
        }
    });

})(jQuery);