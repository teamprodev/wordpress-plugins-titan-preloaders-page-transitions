'use strict';

const titan_create_pattern_item = (type) => {
    const div = document.createElement('div');
    div.className = 'gfx_preloader--pattern-item';

    if (type == 'plus') {
        div.textContent = '+';
    } else if (type == 'circular') {
        const el = document.createElement('div');
        el.className = 'gfx_preloader--pattern-item-circular';
        div.appendChild(el);
    } else if (type == 'circular-hollow') {
        const el = document.createElement('div');
        el.className = 'gfx_preloader--pattern-item-circular-hollow';
        div.appendChild(el);
    }

    return div;
};

(() => {
    const parent = document.querySelector('.gfx_preloader--pattern');

    const type = parent.dataset.type;
    const rows = parseInt(parent.dataset.rows);
    const cols = parseInt(parent.dataset.columns);

    for (let i = 0; i < rows; i++) {
        const row_parent = document.createElement('div');
        row_parent.className = 'gfx_preloader--pattern-row';
        for (let j = 0; j < cols; j++) {
            row_parent.appendChild(titan_create_pattern_item(type));
        }
        parent.appendChild(row_parent);
    }
})();
