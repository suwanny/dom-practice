import QUnit from 'steal-qunit';
import { ViewModel } from './demo_card';

// ViewModel unit tests
QUnit.module('dom-practice/demo_card');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the demo-card component');
});
