(function($, undefined) {

    // Helpers
    var dataType = "car";
    
    function getDataObject(element) {
    
        return $(element).data(dataType);
    }
    
    function setDataObject(element, value) {
    
        $(element).data(dataType, value);
    }
    
    // Constructor for custom data type
    function Car() {
        
        // Private
        var horsePower = 212;
        
        function doubleHorsePower() {
        
            horsePower = horsePower * 2;
        }
        
        // Public
        this.bragAbout = function() {
        
            doubleHorsePower();
            console.log("My car has " + horsePower + "hp. No big deal.");
        };
    }
    
    // Attach new method to jQuery prototype
    $.fn.Car = function(callback) {
        
        return this.each(function() {
        
            if (!getDataObject(this)) {
            
                var newInstance = new Car();
                setDataObject(this, newInstance);
            }
            
            var methodIsValid = typeof getDataObject(this)[callback] === "function";
            
            if (methodIsValid) {
            
                getDataObject(this)[callback]();
            }
        });
    };
}(jQuery));

$("body").Car("bragAbout");