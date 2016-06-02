import QUnit from 'steal-qunit';
import { ViewModel } from './demo_stache';

// ViewModel unit tests
QUnit.module('dom-practice/demo_stache');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the demo-stache component');
});
