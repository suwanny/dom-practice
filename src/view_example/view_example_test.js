import QUnit from 'steal-qunit';
import { ViewModel } from './view_example';

// ViewModel unit tests
QUnit.module('dom-practice/view_example');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the view-example component');
});
