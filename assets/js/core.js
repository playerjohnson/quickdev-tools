/* QuickDev Tools — Core JS */
(function(){
    'use strict';

    /* ── Tool Registry ── */
    const TOOLS = [
        { id:'json-formatter', name:'JSON Formatter', desc:'Format, validate & minify JSON with syntax highlighting', icon:'{ }', color:'#eab308', href:'tools/json-formatter.html', tag:'Popular' },
        { id:'regex-tester', name:'Regex Tester', desc:'Test regular expressions with real-time matching and capture groups', icon:'.*', color:'#22c55e', href:'tools/regex-tester.html', tag:'Popular' },
        { id:'base64', name:'Base64 Encode/Decode', desc:'Encode and decode Base64 strings instantly', icon:'B64', color:'#3b82f6', href:'tools/base64-encoder.html', tag:'' },
        { id:'xml-formatter', name:'XML Formatter', desc:'Format, validate & minify XML documents', icon:'</>', color:'#f97316', href:'tools/xml-formatter.html', tag:'' },
        { id:'css-gradient', name:'CSS Gradient Generator', desc:'Create beautiful CSS gradients with live preview and code output', icon:'◐', color:'#a855f7', href:'tools/css-gradient-generator.html', tag:'' },
        { id:'cron-builder', name:'Cron Expression Builder', desc:'Build and decode cron expressions with plain English descriptions', icon:'⏱', color:'#06b6d4', href:'tools/cron-builder.html', tag:'' },
        { id:'colour-palette', name:'Colour Palette Generator', desc:'Generate harmonious colour palettes with hex, RGB & HSL values', icon:'◆', color:'#ec4899', href:'tools/colour-palette.html', tag:'' },
    ];

    /* ── Navigation ── */
    function initNav() {
        const hamburger = document.querySelector('.nav-hamburger');
        const links = document.querySelector('.nav-links');
        if (hamburger && links) {
            hamburger.addEventListener('click', () => links.classList.toggle('open'));
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.site-nav')) links.classList.remove('open');
            });
        }
    }

    /* ── Home Grid Renderer ── */
    function renderToolGrid() {
        const grid = document.getElementById('toolGrid');
        if (!grid) return;
        grid.innerHTML = TOOLS.map(t => `
            <a href="${t.href}" class="tool-card">
                <div class="tool-card-icon" style="background:${t.color}15;color:${t.color}">${t.icon}</div>
                <h3>${t.name}</h3>
                <p>${t.desc}</p>
                ${t.tag ? `<span class="tag" style="background:${t.color}15;color:${t.color}">${t.tag}</span>` : ''}
            </a>
        `).join('');
    }

    /* ── Shared Utilities ── */
    window.QD = {
        TOOLS,
        // Copy to clipboard
        copy(text, btn) {
            navigator.clipboard.writeText(text).then(() => {
                if (btn) {
                    const orig = btn.textContent;
                    btn.textContent = 'Copied!';
                    setTimeout(() => btn.textContent = orig, 1500);
                }
            });
        },
        // Download text as file
        download(text, filename, mime = 'text/plain') {
            const blob = new Blob([text], { type: mime });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = filename;
            a.click();
            URL.revokeObjectURL(a.href);
        },
        // Debounce
        debounce(fn, ms = 250) {
            let t;
            return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
        },
        // Escape HTML
        escHtml(s) {
            return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
        }
    };

    /* ── Init ── */
    document.addEventListener('DOMContentLoaded', () => {
        initNav();
        renderToolGrid();
    });
})();
