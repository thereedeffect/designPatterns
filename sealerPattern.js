var Sealer = (function() {

    var envelopes   = [],
        letters     = [];
    
    return {
    
        seal : function(letter) {
        
            var length      = envelopes.length,
                envelope    = {};
            
            envelopes[length] = envelope;
            letters[length]   = letter;
            return envelope;
        },
        
        unseal : function(envelope) {
        
            return letters[envelopes.indexOf(envelope)];
        }
    };
}());

var mySecretMessage = Sealer.seal("secret contents");
console.log(mySecretMessage);
// Object {}
console.log(Sealer.unseal(mySecretMessage));
// "secret contents"