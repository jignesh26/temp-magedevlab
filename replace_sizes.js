const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(srcDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Tag Replacement
    // Safely step down headings:
    // To avoid replacing what we just replaced, we replace with temporary tags
    content = content.replace(/<h3/g, '<TEMP_H4');
    content = content.replace(/<\/h3>/g, '</TEMP_H4>');
    
    content = content.replace(/<h2/g, '<TEMP_H3');
    content = content.replace(/<\/h2>/g, '</TEMP_H3>');

    content = content.replace(/<h1/g, '<TEMP_H2');
    content = content.replace(/<\/h1>/g, '</TEMP_H2>');

    content = content.replace(/<h4/g, '<TEMP_H5');
    content = content.replace(/<\/h4>/g, '</TEMP_H5>');

    // Restore temp tags
    content = content.replace(/<TEMP_H4/g, '<h4');
    content = content.replace(/<\/TEMP_H4>/g, '</h4>');
    
    content = content.replace(/<TEMP_H3/g, '<h3');
    content = content.replace(/<\/TEMP_H3>/g, '</h3>');
    
    content = content.replace(/<TEMP_H2/g, '<h2');
    content = content.replace(/<\/TEMP_H2>/g, '</h2>');

    content = content.replace(/<TEMP_H5/g, '<h5');
    content = content.replace(/<\/TEMP_H5>/g, '</h5>');

    // 2. Class Replacement
    // Replace text sizes (e.g. text-5xl to text-4xl)
    const classMap = {
        'text-7xl': 'text-6xl',
        'text-6xl': 'text-5xl',
        'text-5xl': 'text-4xl',
        'text-4xl': 'text-3xl',
        'text-3xl': 'text-2xl',
        'text-2xl': 'text-xl',
        'text-xl': 'text-lg',
        'text-lg': 'text-base'
    };

    // Use a regex that matches these exactly, avoiding partial matches
    for (const [oldClass, newClass] of Object.entries(classMap)) {
        const regex = new RegExp(`\\b${oldClass}\\b`, 'g');
        content = content.replace(regex, newClass);
    }

    fs.writeFileSync(file, content, 'utf8');
});

console.log('Replacements completed.');
