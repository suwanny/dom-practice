import QUnit from 'steal-qunit';
import { ViewModel } from './sortable_demo';

// ViewModel unit tests
QUnit.module('dom-practice/sortable_demo');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the demo-sortable component');
});
