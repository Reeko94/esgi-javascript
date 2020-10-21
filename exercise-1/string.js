function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').map(word => ucfirst(word.toLowerCase())).join(' ');
}

function camelCase(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return capitalize(chaine).replace(/\W/g, '');
}

function snake_case(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.toLowerCase().replace(/\W/g, '_');
}

function leet(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.replace(/[aeiouy]/gi, function($e) {
        switch (e.toLowerCase()) {
            case 'a':
                return 4;
            case 'e':
                return 3;
            case 'i':
                return 1;
            case 'o':
                return 0;
            case 'u':
                return '(_)';
            case 'y':
                return 7;
        }
    });
}

function verlan(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').map(w => w.split('').reverse().join('')).join(' ');
}

function yoda(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').reverse().join(' ');
}

function prop_access(obj, string) {
    string.split('.').map()
}