import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('dom-practice functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('dom-practice main page shows up', function() {
  F('title').text('dom-practice', 'Title is set');
});
