pimcore.registerNS("pimcore.plugin.HelperBundle");

pimcore.plugin.HelperBundle = Class.create({

    initialize: function () {
        document.addEventListener(pimcore.events.pimcoreReady, this.pimcoreReady.bind(this));
    },

    pimcoreReady: function (e) {
        // alert("HelperBundle ready!");
    }
});

var HelperBundlePlugin = new pimcore.plugin.HelperBundle();
