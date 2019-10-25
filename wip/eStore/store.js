window.apicartConfig = window.apicartConfig || [];
function apicartConfigure(config){apicartConfig.push(config)}
apicartConfigure({
    token: "UjP71MPRsiXEvRt6K6etnDhevqMHVTaIKjSiHBXWxTiage6ChKi!U!riXzWm13nv",
    currencySymbol: '$',
    currencySymbolPositionLeft: true,
    currencySymbolWithSpace: false,

    init: function () {
        Utils.loops.forEach(document.querySelectorAll('.buy-button'), function (key, button) {
            apicart.cartQuantityManipulator.render({
                el: button,
                itemUrl: button.getAttribute('data-url'),
                submitButton: 'Add To Cart'
            });
        });
    }

});

const data = JSON.parse(this.response);
