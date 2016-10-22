/**
 * Don't let the machines win. You are humanity's last hope...
 **/

var width = parseInt(readline()); // the number of cells on the X axis
var height = parseInt(readline()); // the number of cells on the Y axis

var tab = [readline()];

for (var i = 1; i < height; i++) {
    var line = readline(); // width characters, each either 0 or .
    tab.push(line); // toutes les lignes dans un tableau
}

// parcourt tous les points
for (var i = 0; i < height; i++) {

    for (var j = 0; j < width; j++) {
        if (tab[i][j] == "0") {

            var x2 = -1;
            var y2 = -1;
            var x3 = -1;
            var y3 = -1;
            // cherche le plus proche voisin de droite si on n'est pas à droite
            if (j < width - 1) {
                var j2 = j;
                while ((j2++ < width - 1) && (x2 == -1)) {
                    if (tab[i][j2] == "0") {
                        x2 = j2;
                        y2 = i;
                    }
                }
            }
            // cherche le plus proche voisin de dessous
            if (i < height - 1) {
                var i2 = i;
                while ((i2++ < height - 1) && (x3 == -1)) {
                    if (tab[i2][j] == "0") {
                        x3 = j;
                        y3 = i2;
                    }
                }
            }
            print(j + " " + i + " " + x2 + " " + y2 + " " + x3 + " " + y3);
        }
    }
}