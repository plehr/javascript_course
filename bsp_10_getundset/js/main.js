(function () {
    "use strict";

    var objFactory = function () {

        var color = {
            r: 0x12,
            g: 0xA2,
            b: 0xd1
        };

        var obj = Object.defineProperties({}, { // ES 5

            // Attribute
            name : {
                value: "Haus",
                writable: true
            },
            // Method
            makeLabel: {
                value: function () {
                    console.log("Ich bin ein(e) " + this.name);
                }
            },

            hexColor: {
                get: function () {
                    var ausgabe = "#";
                    var r = color.r.toString(16);
                    var g = color.g.toString(16);
                    var b = color.b.toString(16);

                    if(r.length === 1) {
                        r = "0" + r;
                    }
                    if(g.length === 1) {
                        g = "0" + g;
                    }
                    if(b.length === 1) {
                        b = "0" + b;
                    }

                    ausgabe += r;
                    ausgabe += g;
                    ausgabe += b;

                    return ausgabe; // #12A2d7
                },
                set: function (p) {
                    color.r = p[0];
                    color.g = p[1];
                    color.b = p[2];
                },
                enumerable: true
            }
        });
        return Object.seal(obj);
    };

    var obj = objFactory();
    console.log(obj.hexColor);
    obj.hexColor = [0xA2, 0xFF, 0x01];

   // obj.color = "green";
    console.log(obj);

//    obj.destroy;
    console.log(typeof obj);
    console.log( obj instanceof Object);

    obj.makeLabel();
    obj.name = "Baum";
    obj.makeLabel();
}());