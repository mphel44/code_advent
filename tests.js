
function coordinate(x, y) {
    this.x = x;
    this.y = y;
}


let listeCoordoonnées = []

listeCoordoonnées.push(new coordinate(1,1))
listeCoordoonnées.push(new coordinate(1,2))
listeCoordoonnées.push(new coordinate(1,3))
listeCoordoonnées.push(new coordinate(1,4))
listeCoordoonnées.push(new coordinate(1,5))
listeCoordoonnées.push(new coordinate(1,6))


let hasCoord = listeCoordoonnées.some( coord => (coord.x == 1 && coord.y == 1 ) )


console.log(Math.sqrt(9))




