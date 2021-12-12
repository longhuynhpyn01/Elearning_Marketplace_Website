exports.getIndex = (req, res) => {
    res.render('home', {
        cssP: () => 'css',
        headerP: () => 'header',
        footerP: () => 'footer',
    });
};

exports.login = (req, res) => {
    res.render('auth/login', {
        cssP: () => 'css',
        headerP: () => 'header',
        footerP: () => 'footer',
    });
};

exports.signup = (req, res) => {
    res.render('auth/signup', {
        cssP: () => 'css',
        headerP: () => 'header',
        footerP: () => 'footer',
    });
};

exports.changePassword = (req, res) => {
    res.render('auth/change-password', {
        cssP: () => 'css',
        headerP: () => 'header',
        footerP: () => 'footer',
    });
};

exports.resetPassword = (req, res) => {
    res.render('auth/reset-password', {
        cssP: () => 'css',
        headerP: () => 'header',
        footerP: () => 'footer',
    });
};