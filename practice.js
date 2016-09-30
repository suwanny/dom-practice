var Person = can.Map.extend({
  fullName: can.compute(function() {
    return this.attr('first') + ' ' + this.attr('last');
  })
});

var me = new Person({first: 'Soo', last: 'Park'});

me.attr('fullName');
// "Soo Park"

me.attr('first', 'Soo Hwan');
// Map {_data: Object, _cid: ".map58", _computedAttrs: Object, first: "Soo Hwan", last: "Park"}
//
me.attr('fullName');
// "Soo Hwan Park"
