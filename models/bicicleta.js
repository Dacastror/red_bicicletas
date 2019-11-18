var Bicicleta = function (id, color, modelo, ubicacion){
  this.id = id
  this.color = color
  this.modelo = modelo
  this.ubicacion = ubicacion
}

Bicicleta.prototype.toString = function(){
  return 'id: '+this.id + ' | color: '+ this.color
}

Bicicleta.allBicis = []
Bicicleta.add = function (aBici){
  Bicicleta.allBicis.push(aBici)
}

Bicicleta.findIndexById = function(aBiciId){
  const condicion = (e) => e.id == aBiciId;
  const index = Bicicleta.allBicis.findIndex(condicion)
  return index>=0 ? index : null
}

Bicicleta.findById = function(aBiciId){
  var index = Bicicleta.findIndexById(aBiciId)
  return index==null ? null : Bicicleta.allBicis[index]
}

Bicicleta.removeById = function(aBiciId){
  var index = Bicicleta.findIndexById(aBiciId)
  if (index!=null){Bicicleta.allBicis.splice(index,1)}
}

var a = new Bicicleta(1, 'rojo', 'urbana', [4.6718,-74.0638])
var b = new Bicicleta(2, 'verde', 'montaña', [4.6667,-74.0634])

Bicicleta.add(a)
Bicicleta.add(b)

module.exports = Bicicleta
