/* QuickDev Tools — Core JS */
(function(){
    'use strict';
    const TOOLS = [
        { id:'json-formatter', name:'JSON Formatter', desc:'Format, validate & minify JSON with syntax highlighting', icon:'{ }', color:'#eab308', href:'tools/json-formatter.html', tag:'Popular', category:'Formatters' },
        { id:'regex-tester', name:'Regex Tester', desc:'Test regular expressions with real-time matching and capture groups', icon:'.*', color:'#22c55e', href:'tools/regex-tester.html', tag:'Popular', category:'Testing' },
        { id:'base64', name:'Base64 Encode/Decode', desc:'Encode and decode Base64 strings instantly', icon:'B64', color:'#3b82f6', href:'tools/base64-encoder.html', tag:'', category:'Encoding' },
        { id:'xml-formatter', name:'XML Formatter', desc:'Format, validate & minify XML documents', icon:'</>', color:'#f97316', href:'tools/xml-formatter.html', tag:'', category:'Formatters' },
        { id:'css-gradient', name:'CSS Gradient Generator', desc:'Create beautiful CSS gradients with live preview and code output', icon:'◐', color:'#a855f7', href:'tools/css-gradient-generator.html', tag:'', category:'CSS' },
        { id:'cron-builder', name:'Cron Expression Builder', desc:'Build and decode cron expressions with plain English descriptions', icon:'⏱', color:'#06b6d4', href:'tools/cron-builder.html', tag:'', category:'DevOps' },
        { id:'colour-palette', name:'Colour Palette Generator', desc:'Generate harmonious colour palettes with hex, RGB & HSL values', icon:'◆', color:'#ec4899', href:'tools/colour-palette.html', tag:'', category:'CSS' },
        { id:'diff-tool', name:'Text Diff Tool', desc:'Compare two texts and see differences highlighted line by line', icon:'±', color:'#f43f5e', href:'tools/diff-tool.html', tag:'', category:'Comparison' },
    ];

    function initNav() {
        const hamburger = document.querySelector('.nav-hamburger');
        const links = document.querySelector('.nav-links');
        if (hamburger && links) {
            hamburger.addEventListener('click', () => links.classList.toggle('open'));
            document.addEventListener('click', e => { if (!e.target.closest('.site-nav')) links.classList.remove('open'); });
        }
    }

    function renderToolGrid() {
        const grid = document.getElementById('toolGrid');
        if (!grid) return;
        grid.innerHTML = TOOLS.map(t => {
            const badge = t.tag === 'Popular'
                ? '<span class="tool-badge-popular">Popular</span>'
                : (t.tag ? `<span class="tool-badge-new">${t.tag}</span>` : '');
            return `
            <a href="${t.href}" class="tool-card" style="--tool-color: ${t.color}">
                <div class="tool-card-icon" style="background:${t.color}15;color:${t.color}">${t.icon}</div>
                <div class="tool-card-body">
                    <div class="tool-card-header">
                        <h3>${t.name}</h3>
                        ${badge}
                    </div>
                    <p>${t.desc}</p>
                    <div class="tool-card-meta">
                        <span class="tool-category">${t.category}</span>
                        <span class="tool-arrow">→</span>
                    </div>
                </div>
            </a>
        `}).join('');
    }

    window.QDT = {
        TOOLS,
        copy(text, btn) { navigator.clipboard.writeText(text).then(() => { if (btn) { const o = btn.textContent; btn.textContent = 'Copied!'; setTimeout(() => btn.textContent = o, 1500); } }); },
    };

    document.addEventListener('DOMContentLoaded', () => {
        initNav();
        renderToolGrid();
    });
})();
