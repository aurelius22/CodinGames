/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var surfaceN = parseInt(readline()); // the number of points used to draw the surface of Mars.
var zonePlane = -1;

var landX = [];
var landY = [];

for (var i = 0; i < surfaceN; i++) {
    var inputs = readline().split(' ');
    landX[i] = parseInt(inputs[0]); // X coordinate of a surface point. (0 to 6999)
    landY[i] = parseInt(inputs[1]); // Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
    if ((i > 0) && (landY[i] == landY[i - 1])) {
        printErr("zone plane");
        zonePlane = i - 1;
    }
}

// chercher la zone d'atterrissage plane

// game loop
while (true) {
    var inputs = readline().split(' ');
    var X = parseInt(inputs[0]);
    var Y = parseInt(inputs[1]);
    var hSpeed = parseInt(inputs[2]); // the horizontal speed (in m/s), can be negative.
    var vSpeed = parseInt(inputs[3]); // the vertical speed (in m/s), can be negative.
    var fuel = parseInt(inputs[4]); // the quantity of remaining fuel in liters.
    var rotate = parseInt(inputs[5]); // the rotation angle in degrees (-90 to 90).
    var power = parseInt(inputs[6]); // the thrust power (0 to 4).

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    // capsule au dessus de la zone ?
    if (X < landX[zonePlane]) { // trop loin
        if (vSpeed < -10) {
            power++;
        }
        // angle en fontion de la vitesse de déplacement hor. souhaitée,
        // plus la zone plane est haute, plus l'angle est faible :
        rotate = Math.round((hSpeed - 60) * 200 / landY[zonePlane]);
    } else if (X > landX[zonePlane + 1]) { // trop près
        if (vSpeed < -10) {
            power++;
        }
        rotate = Math.round((hSpeed + 60) * 200 / landY[zonePlane]);
    } else { // au dessus
        power = Math.round(- vSpeed / 30) + 3; // descente lente
        if ((Y < (landY[zonePlane] + 20)) || ((hSpeed < 10) && (hSpeed > -10))) {
            // redresser juste avant de se poser
            rotate = 0;
        } else {
            // réduire la vitesse hor.
            rotate = Math.round(hSpeed * 40);
        }
    }
    // borner les sorties pour plus de stabilité
    if (rotate > 30) rotate = 30;
    if (rotate < -30) rotate = -30;
    if (power > 4) power = 4;
    if (power < 0) power = 0;
    // rotate power. rotate is the desired rotation angle. power is the desired thrust power.
    print(rotate + ' ' + power);
}