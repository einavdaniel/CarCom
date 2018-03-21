app.filter('latlng', function() {
    return function(input, fpDigits) {
        fpDigits = fpDigits || 2;
        
        if (!input) {
            return input;
        }

        if ((typeof input.lng === "undefined") && (typeof input.lat === "undefined")) {
            return input;
        }

        if ((typeof input.lng === "function") && (typeof input.lat === "function")) {
            return input.lng().toFixed(fpDigits) + ", " + 
                   input.lat().toFixed(fpDigits);
        }

        return input.lng.toFixed(fpDigits) + ", " + 
               input.lat.toFixed(fpDigits);
    };
});