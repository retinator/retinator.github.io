// Drupal settings
Drupal = {
    settings: {
        splashify: {
            js_mode: 'redirect',
            js_splash_always: '1',
            js_mode_settings: {
                urls: [],
                system_splash: 'index2.html',
            },
            js_disable_referrer_check: true,
            js_expire_after: 0,
        }
    }
}

// mock jStorage
$.jStorage = {
    get: function (key, default_value) {return default_value},
    set: function (key, value) {},
}
